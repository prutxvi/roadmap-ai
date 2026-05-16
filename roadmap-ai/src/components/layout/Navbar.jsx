import Container from "./Container"
import Button from "../ui/Button"

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]" />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Roadmap AI</p>
            <p className="text-xs text-zinc-400">Aurora • NIAT • 313 LG</p>
          </div>
        </a>

        <nav className="hidden sm:flex items-center gap-1 text-sm text-zinc-300">
          <a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#about">
            About
          </a>
          <a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#features">
            Features
          </a>
          <a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#team">
            Team
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button as="a" href="#generator" variant="secondary" size="sm">
            Generate
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Navbar

