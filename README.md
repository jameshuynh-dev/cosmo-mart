# 🚀 Cosmo Mart | Interdimensional Superstore & AI Customer Service

Welcome to **Cosmo Mart**! This interactive web storefront represents a surreal interdimensional superstore selling mildly dangerous items to humans and aliens alike. 

The project features **Gleb**, an underpaid, mildly exhausted alien customer service representative powered by an in-memory **RAG (Retrieval-Augmented Generation)** architecture.

🛸ACCESS THE DEMO HERE 🛸 https://cosmo-mart-alpha.vercel.app/
---

## 💡 Origin Story: From Customer Support Insights to Code

A few months ago, a friend’s sister described her workflow at T-Mobile. She explained how an internal AI-powered assistant listened to customer calls, searched company databases, and surfaced accurate policy options in real-time to help representatives answer queries.

Fascinated by the technology, I dove into *AI Engineering* by Chip Huyen and researched foundation models, vector math, and practical AI engineering techniques. I realized I could replicate this exact enterprise workflow using **Retrieval-Augmented Generation (RAG)** a technique that connects LLMs to outside knowledge bases to ground responses in verified company facts. 

Cosmo Mart and Gleb were born as a full-stack demo to showcase this architecture in action!

---

## 🌟 Key Features

* **Gleb AI Assistant:** An AI customer service bot using RAG to answer queries on return policies, biohazard waivers, store hours, breakroom rules, hazard escalation, and product safety.
* **Neubrutalist UI:** A high-contrast, color-coded grid displaying all available Cosmo Mart inventory, complete with hazard warnings and interactive chat triggers.

---

## 🛠️ Tech Stack & Architecture

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

### **My Socials**
* LinkedIn: https://www.linkedin.com/in/james-huynh-ai/
* Resume Site: https://jameshuynh-dev.github.io/site/
* Github: https://github.com/jameshuynh-dev
