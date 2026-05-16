import Container from "../layout/Container"
import Button from "../ui/Button"

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute top-24 right-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Container className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">
            AI roadmap generator for students
            <span className="h-1 w-1 rounded-full bg-zinc-500" />
            Beginner friendly
          </p>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Build your{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              career roadmap
            </span>{" "}
            with AI
          </h1>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-400">
            Enter a career goal, your current skill level, and learning duration. Roadmap AI
            generates a structured timeline with skills, projects, resources, and final tips.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button as="a" href="#generator" size="lg">
              Generate Roadmap
            </Button>
            <Button as="a" href="#features" variant="secondary" size="lg">
              See Features
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero

