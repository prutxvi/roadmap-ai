function ProjectCard({ title }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="mt-1 text-xs text-zinc-400">
        Build this to practice the month’s skills.
      </p>
    </div>
  )
}

export default ProjectCard

