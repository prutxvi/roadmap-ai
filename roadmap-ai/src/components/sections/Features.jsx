import Container from "../layout/Container"
import SectionHeading from "../ui/SectionHeading"

const FEATURES = [
  {
    title: "AI Generated Roadmaps",
    desc: "Generate a structured learning plan tailored to your goal and skill level.",
  },
  {
    title: "Skill Tracking",
    desc: "See which skills to focus on each month with easy-to-scan badges.",
  },
  {
    title: "Project Suggestions",
    desc: "Monthly mini-projects to build confidence and improve your portfolio.",
  },
  {
    title: "Learning Timeline",
    desc: "Roadmap is displayed as a clean timeline with focus areas and milestones.",
  },
  {
    title: "Resource Recommendations",
    desc: "Curated resources per month to avoid random and confusing content.",
  },
]

function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything students need to learn faster"
          subtitle="A polished UI that renders AI output as structured sections—no raw text."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition hover:bg-white/10"
            >
              <p className="text-sm font-semibold text-white">{feature.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{feature.desc}</p>
              <div className="mt-4 h-px w-full bg-white/5" />
              <p className="mt-3 text-xs text-zinc-500">
                Rendered as cards • badges • timeline
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features

