export function extractFirstJsonObject(text) {
  if (!text) return null

  const trimmed = String(text).trim()
  const withoutFences = trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```$/i, "")
    .trim()

  const firstBrace = withoutFences.indexOf("{")
  const lastBrace = withoutFences.lastIndexOf("}")
  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) return null

  return withoutFences.slice(firstBrace, lastBrace + 1)
}

export function safeJsonParse(text) {
  const candidate = extractFirstJsonObject(text) ?? text
  if (!candidate) return { ok: false, value: null, error: "Empty response" }

  try {
    return { ok: true, value: JSON.parse(candidate), error: null }
  } catch (error) {
    return { ok: false, value: null, error: error?.message ?? "Invalid JSON" }
  }
}

