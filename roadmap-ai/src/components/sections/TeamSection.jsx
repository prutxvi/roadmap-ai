import Container from "../layout/Container"
import SectionHeading from "../ui/SectionHeading"

const TEAM = [
  { name: "VOOTUKURI KEERTHAN", id: "6277" },
  { name: "VASIREDDY AKHIL", id: "6269" },
  { name: "VARRI HANUMAN", id: "4162" },
  { name: "TOGANTI PRUTHVI RAJ", id: "4157" },
  { name: "NYAYAM SRI CHARAN REDDY", id: "6288" },
]

function TeamSection() {
  return (
    <section id="team" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Team"
          title="313 LG Group"
          subtitle="Aurora Deemed To Be University • NIAT"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="mt-1 text-xs text-zinc-400">Student ID: {member.id}</p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 border border-white/10" />
              </div>
              <p className="mt-4 text-xs text-zinc-500">
                Frontend Developer • UI/UX • AI Integration
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TeamSection

