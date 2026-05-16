import Container from "./Container"

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-white">Roadmap AI</p>
          <p className="mt-1 text-xs text-zinc-400">
            Aurora Deemed To Be University • NIAT • 313 LG Group
          </p>
        </div>

        <p className="text-xs text-zinc-500">
          Frontend-only project (React + Tailwind + Groq API)
        </p>
      </Container>
    </footer>
  )
}

export default Footer

