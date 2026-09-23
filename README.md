# 🚀 Cosmo Mart | Interdimensional Superstore & AI Customer Service

Welcome to **Cosmo Mart**! This interactive web storefront represents a surreal interdimensional superstore selling mildly dangerous items to humans and aliens alike.

The project features **Gleb**, an underpaid, mildly exhausted alien customer service representative powered by an in-memory **RAG (Retrieval-Augmented Generation)** architecture.

ACCESS THE DEMO HERE: https://cosmo-mart-alpha.vercel.app/

---

## What can you ask Gleb about?

Since Gleb is powered by RAG architecture, his answers about the store are pulled from Cosmo Mart's knowledge base. If something isn't on file, he won't make it up. You can ask him about:

* **Products:** Anything on the shelves. Prices, descriptions, atomic mass stability, hazard warnings, item-specific return policies, and common customer complaints. *"Is the Portable Wormhole safe to use?"*
* **Store Policies:** Returns, the Corporate Bio-Hazard Waiver, payment methods, store hours, the employee discount, breakroom rules, and hazard escalation. *"What payment methods do you accept?"*
* **Cosmo Mart:** What the store is, who founded it, and how long it's been open. *"Who owns this store?"*
* **His Boss:** Ask about his manager and watch him get nervous. *"What's your boss like?"*
* **His Work Life:** His shifts, his breaks, and his coworkers. *"How's work going?"*

---

## Project Story

A few months ago, a friend's sister described her workflow at T-Mobile. She explained how an internal AI-powered assistant listened to customer calls, searched company databases, and surfaced accurate policy options in real-time to help representatives answer queries. Interested in how this system works, I took ideas I learned from *AI Engineering* by Chip Huyen and researched foundation models, vector math, and practical AI engineering techniques. I realized I could use **Retrieval-Augmented Generation (RAG)** a technique that connects LLMs to outside knowledge bases to ground responses in verified company facts.

---

## Key Features

* **Gleb AI Assistant:** An AI customer service bot using RAG to answer queries on return policies, biohazard waivers, store hours, breakroom rules, hazard escalation, and product safety.
* **Neubrutalist UI:** A high-contrast, color-coded grid displaying all available Cosmo Mart inventory, complete with hazard warnings and interactive chat triggers.

---

## Tech Stack & Architecture

### **Frontend & UI**
* **Framework:** Next.js 15 (App Router, TypeScript)
* **Styling:** Tailwind CSS (Neubrutalism design system)
* **Chat Integration:** Vercel AI SDK (`@ai-sdk/react`) for real-time response streaming

### **Backend & AI/RAG Pipeline**
* **Server Infrastructure:** Next.js API Routes (Serverless)
* **Language Model:** OpenAI `gpt-4o-mini` (Prompt-engineered with strict hallucination-mitigation guardrails)
* **Embeddings:** OpenAI `text-embedding-3-small`
* **Vector Search Engine:** Custom in-memory Cosine Similarity engine (zero-infrastructure overhead for small, static datasets)
* **Knowledge Base:** Synthetic `products.json` schema containing detailed product specs, hazard warnings, and store policies

### **Deployment & DevOps**
* **Hosting:** Vercel (CI/CD via GitHub integration, Serverless edge deployment)
* **Version Control:** Git / GitHub

### **AI-Assisted Development Workflow**
* **Claude Code:** Agentic code generation, project scaffolding, and iterative file edits.
* **Gemini:** Code architecture cross-verification, rapid technical research, and asset generation.

---

## My Socials
* LinkedIn: https://www.linkedin.com/in/james-huynh-ai/
* Resume Site: https://www.dearhuynh.com
* Github: https://github.com/jameshuynh-dev
