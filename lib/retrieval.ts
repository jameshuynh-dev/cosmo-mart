import OpenAI from "openai";
import productsData from "@/data/products.json";

const EMBEDDING_MODEL = "text-embedding-3-small";

interface Chunk {
  id: string;
  text: string;
}

interface EmbeddedChunk extends Chunk {
  embedding: number[];
}

const client = new OpenAI();

function buildChunks(): Chunk[] {
  const chunks: Chunk[] = [];

  for (const [key, value] of Object.entries(productsData.store_policies)) {
    chunks.push({ id: `policy:${key}`, text: `${key}: ${value}` });
  }

  for (const product of productsData.products) {
    const text = [
      `Product: ${product.product_name}`,
      `Category: ${product.category}`,
      `Price: ${product.price_in_credits} credits`,
      `Atomic mass stability: ${product.atomic_mass_stability}`,
      `Description: ${product.description}`,
      `Hazards: ${product.interactive_components_hazards}`,
      `Return policy: ${product.item_specific_return_policy}`,
      `Common complaints: ${product.common_customer_complaints.join("; ")}`,
    ].join("\n");
    chunks.push({ id: `product:${product.id}`, text });
  }

  return chunks;
}

let embeddedChunksPromise: Promise<EmbeddedChunk[]> | null = null;

async function embedTexts(texts: string[]): Promise<number[][]> {
  const response = await client.embeddings.create({
    model: EMBEDDING_MODEL,
    input: texts,
  });
  return response.data.map((d) => d.embedding);
}

function getEmbeddedChunks(): Promise<EmbeddedChunk[]> {
  if (!embeddedChunksPromise) {
    embeddedChunksPromise = (async () => {
      const chunks = buildChunks();
      const embeddings = await embedTexts(chunks.map((c) => c.text));
      return chunks.map((chunk, i) => ({ ...chunk, embedding: embeddings[i] }));
    })();
  }
  return embeddedChunksPromise;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function retrieveContext(query: string, topK = 4): Promise<string> {
  const embeddedChunks = await getEmbeddedChunks();
  const [queryEmbedding] = await embedTexts([query]);

  const scored = embeddedChunks.map((chunk) => ({
    chunk,
    score: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored
    .slice(0, topK)
    .map((s) => s.chunk.text)
    .join("\n\n");
}
