# Roadmap AI

Aurora Deemed To Be University • NIAT • 313 LG Group

Roadmap AI is a **frontend-only** React + Tailwind CSS project that helps students generate career roadmaps using the **Groq API**.

## Setup

1) Install dependencies:

```bash
npm install
```

2) Add your Groq API key (frontend env var):

Copy `.env.example` to `.env` and set:

```bash
VITE_GROQ_API_KEY=your_key_here
```

3) Run the dev server:

```bash
npm run dev
```

## Notes (for viva)

- No backend, no database, no authentication (frontend only).
- AI response is forced into **strict JSON** and rendered into UI cards and timeline.
- Main logic lives in `src/services/groqApi.js` and UI components in `src/components/`.
