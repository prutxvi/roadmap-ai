import { safeJsonParse } from "../utils/parseJson"

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

function buildRoadmapPrompt({ goal, level, duration }) {
  return [
    "You are Roadmap AI, a roadmap generator for college students.",
    "",
    "Return ONLY valid JSON (no markdown, no code fences, no extra text).",
    "The JSON MUST match this exact schema:",
    "{",
    '  "title": "",',
    '  "overview": "",',
    '  "timeline": [',
    "    {",
    '      "month": "",',
    '      "focus": "",',
    '      "skills": [],',
    '      "projects": [],',
    '      "resources": []',
    "    }",
    "  ],",
    '  "finalTips": []',
    "}",
    "",
    "Rules:",
    '- timeline MUST be an array of months (or steps) for the given duration. Use labels like "Month 1", "Month 2", etc.',
    "- skills/projects/resources MUST be arrays of short strings.",
    "- finalTips MUST be an array of short strings.",
    "- Keep it beginner-friendly and practical.",
    "",
    `Career Goal: ${goal}`,
    `Current Skill Level: ${level}`,
    `Learning Duration: ${duration}`,
  ].join("\n")
}

export async function generateRoadmap(data) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY

  if (!apiKey) {
    return {
      ok: false,
      error:
        "Missing VITE_GROQ_API_KEY. Add it to a .env file (see .env.example) and restart the dev server.",
      roadmap: null,
      raw: null,
    }
  }

  const prompt = buildRoadmapPrompt(data)

  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "Output must be valid JSON only." },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        ok: false,
        error: result?.error?.message || "Groq request failed.",
        roadmap: null,
        raw: result,
      }
    }

    const content = result?.choices?.[0]?.message?.content ?? ""
    const parsed = safeJsonParse(content)

    if (!parsed.ok) {
      return {
        ok: false,
        error: `AI did not return valid JSON: ${parsed.error}`,
        roadmap: null,
        raw: content,
      }
    }

    return { ok: true, error: null, roadmap: parsed.value, raw: content }
  } catch (error) {
    console.error(error)
    return {
      ok: false,
      error: "Network error. Please try again.",
      roadmap: null,
      raw: null,
    }
  }
}
