import SkillBadge from "./SkillBadge"
import ProjectCard from "./ProjectCard"

function TimelineCard({ item, index }) {
  const monthLabel = item?.month || `Month ${index + 1}`

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-sm font-semibold text-white">{monthLabel}</p>
        {item?.focus ? (
          <p className="text-xs text-zinc-400">Focus: {item.focus}</p>
        ) : null}
      </div>

      {Array.isArray(item?.skills) && item.skills.length > 0 ? (
        <div className="mt-5">
          <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
            Skills
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
        </div>
      ) : null}

      {Array.isArray(item?.projects) && item.projects.length > 0 ? (
        <div className="mt-5">
          <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
            Projects
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {item.projects.map((project) => (
              <ProjectCard key={project} title={project} />
            ))}
          </div>
        </div>
      ) : null}

      {Array.isArray(item?.resources) && item.resources.length > 0 ? (
        <div className="mt-5">
          <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
            Resources
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            {item.resources.map((resource) => (
              <li key={resource}>{resource}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default TimelineCard

