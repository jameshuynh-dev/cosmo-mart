Welcome to my Cosmo Mart Project!
An interactive web storefront for a fictional interdimensional superstore selling surreal, mildly dangerous items to humans and aliens alike.

This project features Gleb, an underpaid, mildly exhausted alien customer service representative powered by an in-memory RAG (Retrieval-Augmented Generation) architecture.

Key Features:
- "Gleb" an AI-powered Assistant that utilizes RAG (Retrieval-Augmented Generation) to answer customer questions about return policies, biohazard waivers, payment methods, store hours, employee discount policies, his work experience, breakroom rules, hazard escalation, and product advice/information!
- UI Featuring all available products at Cosmo Mart.

Tech Stack 
Front End:
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS
- Vercel AI SDK (for streaming chat UI)

Backend / API
- Next.js API Routes (for serverless functions)
- Vercel AI SDK (streaming LLM responses)

  AI / RAG Pipeline
  - OpenAI gpt-4o-mini to create chatbot persona "Gleb".
  - OpenAI text-embedding-3-small for semantic embeddings.
  - Custom in-memory vector retrieval (cosine similarity over cached embeddings), no external vector DB, chosen for zero-infrastructure overhead on a small, static dataset
  - Prompt-engineered persona with context-grounded fallback behavior (hallucination mitigation)

  Data
  - Structured synthetic JSON dataset (this makes it so that custom schemas: products, hazards, policies, etc are generated for retrieval-augmented responses).
 
  Deployment / DevOps
  - Vercel (Github integration, serverless deployment, managed SSL)
  - Git / GitHub version control.
 
  AI-Assisted Development Workflow
  - Claude Code used for agentic code generation, file scaffolding, and iterative implementation.
  - Gemini used for cross-verification of generated code/files and rapid concept researching.
  - Used together for build velocity and validate output before integration.
    
