import Container from "../layout/Container"
import SectionHeading from "../ui/SectionHeading"

function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About Project"
          title="What is Roadmap AI?"
          subtitle="A frontend-only web app that helps students create a clear learning plan with AI—without confusion, random videos, or missed basics."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm font-semibold text-white">What it does</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Converts your career goal into a structured roadmap: monthly focus areas, skills,
              mini-projects, and resources.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm font-semibold text-white">Why students need it</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Students often waste time searching. Roadmap AI gives a clear sequence to learn,
              practice, and build confidence.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm font-semibold text-white">How AI helps</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              AI adapts to your current level and duration and returns a JSON roadmap that the UI
              renders into cards, badges, and timeline sections.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About

