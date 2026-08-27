"use client";

import { useState, type ReactNode } from "react";
import { useChat } from "@ai-sdk/react";
import productsData from "@/data/products.json";

const CARD_COLORS = ["coral", "lavender", "mint", "sky", "pink", "yellow"] as const;

const CARD_COLOR_CLASSES: Record<(typeof CARD_COLORS)[number], string> = {
  coral: "bg-coral",
  lavender: "bg-lavender",
  mint: "bg-mint",
  sky: "bg-sky",
  pink: "bg-pink",
  yellow: "bg-yellow",
};

const NAV_BUTTON_BASE =
  "inline-block rounded-xl border-3 border-ink px-4 py-2 text-sm font-black text-ink shadow-hard transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:text-base";

const EXTERNAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/james-huynh-ai/", color: "bg-sky" },
  { label: "GitHub", href: "https://github.com/jameshuynh-dev", color: "bg-mint" },
  { label: "Resume Site", href: "https://jameshuynh-dev.github.io/site/", color: "bg-pink" },
] as const;

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="bg-bg bg-grain min-h-screen">
      <TopNav showInfo={showInfo} onToggleInfo={setShowInfo} />
      {showInfo ? <ProjectInfo /> : <Storefront />}
      <ChatWidget />
    </div>
  );
}

function TopNav({
  showInfo,
  onToggleInfo,
}: {
  showInfo: boolean;
  onToggleInfo: (value: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 border-b-3 border-ink bg-bg px-6 py-4 sm:px-10">
      {showInfo ? (
        <button
          onClick={() => onToggleInfo(false)}
          className={`${NAV_BUTTON_BASE} bg-yellow`}
        >
          ← Return to Cosmo Mart
        </button>
      ) : (
        <button
          onClick={() => onToggleInfo(true)}
          className={`${NAV_BUTTON_BASE} bg-yellow`}
        >
          Project Information
        </button>
      )}
      <div className="flex flex-wrap gap-3">
        {EXTERNAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${NAV_BUTTON_BASE} ${link.color}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

function InfoCard({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`mb-8 rounded-2xl border-3 border-ink ${color} p-6 text-ink shadow-hard`}
    >
      <h2 className="mb-4 text-xl font-black sm:text-2xl">{title}</h2>
      <div className="space-y-3 text-sm font-medium sm:text-base">
        {children}
      </div>
    </section>
  );
}

function ProjectInfo() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
      <header className="mb-12">
        <h1 className="inline-block rotate-[-1deg] border-3 border-ink bg-yellow px-6 py-3 text-4xl font-black tracking-tight text-ink shadow-hard sm:text-5xl">
          PROJECT INFORMATION
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-medium text-white">
          Cosmo Mart — Interdimensional Superstore &amp; AI Customer Service
        </p>
      </header>

      <InfoCard
        color="bg-yellow"
        title="🚀 Cosmo Mart: An Interdimensional Superstore & AI Customer Service"
      >
        <p>
          Welcome to Cosmo Mart! This interactive web storefront represents a
          surreal interdimensional superstore selling mildly dangerous items
          to humans and aliens alike.
        </p>
        <p>
          The project features Gleb! An underpaid, mildly exhausted
          alien customer service representative powered by an in-memory RAG
          (Retrieval-Augmented Generation) architecture.
        </p>
      </InfoCard>

      <InfoCard
        color="bg-lavender"
        title="💡 Origin Story: From Customer Support Insights to Code"
      >
        <p>
          A few months ago, a friend&rsquo;s sister described her workflow at
          T-Mobile. She explained how an internal AI-powered assistant
          listened to customer calls, searched company databases, and
          surfaced accurate policy options in real-time to help
          representatives answer queries.
        </p>
        <p>
          Fascinated by the technology, I dove into <em>AI Engineering</em> by
          Chip Huyen and researched foundation models, vector math, and
          practical AI engineering techniques. I realized I could replicate
          this exact enterprise workflow using RAG (Retrieval-Augmented
          Generation)&mdash;a technique that connects LLMs to outside
          knowledge bases to ground responses in verified company facts.
        </p>
        <p>
          Cosmo Mart and Gleb were born as a full-stack demo to showcase this
          architecture in action!
        </p>
      </InfoCard>

      <InfoCard color="bg-mint" title="🌟 Key Features">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Gleb AI Assistant:</strong> An AI customer service bot
            using RAG to answer queries on return policies, biohazard
            waivers, store hours, breakroom rules, hazard escalation, and
            product safety.
          </li>
          <li>
            <strong>Neubrutalist UI:</strong> A high-contrast, color-coded
            grid displaying all available Cosmo Mart inventory, complete with
            hazard warnings and interactive chat triggers.
          </li>
        </ul>
      </InfoCard>

      <InfoCard color="bg-sky" title="🛠️ Tech Stack & Architecture">
        <div className="space-y-4">
          <div>
            <h3 className="mb-1 font-black uppercase tracking-wide">
              Frontend &amp; UI
            </h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Framework:</strong> Next.js 15 (App Router,
                TypeScript)
              </li>
              <li>
                <strong>Styling:</strong> Tailwind CSS (Neubrutalism design
                system)
              </li>
              <li>
                <strong>Chat Integration:</strong> Vercel AI SDK
                (@ai-sdk/react) for real-time response streaming
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 font-black uppercase tracking-wide">
              Backend &amp; AI/RAG Pipeline
            </h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Server Infrastructure:</strong> Next.js API Routes
                (Serverless)
              </li>
              <li>
                <strong>Language Model:</strong> OpenAI gpt-4o-mini
                (Prompt-engineered with strict hallucination-mitigation
                guardrails)
              </li>
              <li>
                <strong>Embeddings:</strong> OpenAI text-embedding-3-small
              </li>
              <li>
                <strong>Vector Search Engine:</strong> Custom in-memory Cosine
                Similarity engine (zero-infrastructure overhead for small,
                static datasets)
              </li>
              <li>
                <strong>Knowledge Base:</strong> Synthetic products.json
                schema containing detailed product specs, hazard warnings,
                and store policies
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 font-black uppercase tracking-wide">
              Deployment &amp; DevOps
            </h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Hosting:</strong> Vercel (CI/CD via GitHub
                integration, Serverless edge deployment)
              </li>
              <li>
                <strong>Version Control:</strong> Git / GitHub
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 font-black uppercase tracking-wide">
              AI-Assisted Development Workflow
            </h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Claude Code:</strong> Agentic code generation, project
                scaffolding, and iterative file edits.
              </li>
              <li>
                <strong>Gemini:</strong> Code architecture cross-verification,
                rapid technical research, and asset generation.
              </li>
            </ul>
          </div>
        </div>
      </InfoCard>
    </main>
  );
}

function Storefront() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="inline-block rotate-[-1deg] border-3 border-ink bg-yellow px-6 py-3 text-4xl font-black tracking-tight text-ink shadow-hard sm:text-5xl">
            COSMO MART
          </h1>
          <span className="text-sm font-bold italic text-white/70">
            by James Huynh
          </span>
        </div>
        <p className="mt-4 max-w-xl text-lg font-medium text-white">
          Surreal, mildly dangerous goods for humans and aliens alike. Returns
          require 95% of original atomic mass. Try asking Gleb about products, return policies, and Gleb's work life!
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsData.products.map((product, i) => {
          const color = CARD_COLORS[i % CARD_COLORS.length];
          return (
            <article
              key={product.id}
              className={`flex flex-col justify-between rounded-2xl border-3 border-ink ${CARD_COLOR_CLASSES[color]} p-5 text-ink shadow-hard transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111111]`}
            >
              <div>
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h2 className="text-lg font-extrabold leading-tight">
                    {product.product_name}
                  </h2>
                  <span className="shrink-0 rounded-full border-3 border-ink bg-white px-2 py-0.5 text-xs font-bold">
                    {product.price_in_credits}₡
                  </span>
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wide opacity-70">
                  {product.category}
                </p>
                <p className="mb-3 text-sm font-medium">{product.description}</p>
                <p className="rounded-lg border-3 border-ink bg-white/60 p-2 text-xs font-semibold">
                  ⚠ {product.interactive_components_hazards}
                </p>
              </div>
              <p className="mt-3 text-xs font-semibold italic opacity-80">
                {product.item_specific_return_policy}
              </p>
            </article>
          );
        })}
      </div>
    </main>
  );
}

function ChatWidget() {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-2xl border-3 border-ink bg-mint px-5 py-3 font-black text-ink shadow-hard transition-transform hover:-translate-y-1"
      >
        <img
          src="/gleb.png"
          className="absolute -top-16 left-6 h-20 w-auto z-10 pointer-events-none"
        />
        💬 Ask Gleb
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 flex h-[32rem] w-[22rem] max-w-[90vw] flex-col rounded-2xl border-3 border-ink bg-bg shadow-hard">
      <div className="relative flex items-center justify-between rounded-t-2xl border-b-3 border-ink bg-lavender px-4 py-3">
        <img
          src="/gleb.png"
          className="absolute -top-16 right-16 h-24 w-auto z-20 pointer-events-none"
        />
        <div>
          <p className="font-black text-ink">Gleb</p>
          <p className="text-xs font-semibold text-ink opacity-70">
            Customer Service, allegedly
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="rounded-lg border-3 border-ink bg-white px-2 py-1 text-sm font-bold text-ink shadow-hard"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto p-3">
        {messages.length === 0 && (
          <p className="text-sm font-medium text-white/60">
            ...what do you want.
          </p>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl border-3 border-ink px-3 py-2 text-sm font-medium text-ink shadow-hard ${
                message.role === "user" ? "bg-white" : "bg-yellow"
              }`}
            >
              {message.parts.map((part, i) =>
                part.type === "text" ? (
                  <span key={i} className="whitespace-pre-wrap">
                    {part.text}
                  </span>
                ) : null
              )}
            </div>
          </div>
        ))}
        {status === "submitted" && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl border-3 border-ink bg-yellow px-3 py-2 text-sm font-medium text-ink shadow-hard">
              ...one sec.
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex gap-2 border-t-3 border-ink p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about a product..."
          className="flex-1 rounded-xl border-3 border-ink bg-white px-3 py-2 text-sm font-medium text-ink outline-none"
        />
        <button
          type="submit"
          disabled={status !== "ready"}
          className="rounded-xl border-3 border-ink bg-coral px-3 py-2 text-sm font-black text-ink shadow-hard disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
