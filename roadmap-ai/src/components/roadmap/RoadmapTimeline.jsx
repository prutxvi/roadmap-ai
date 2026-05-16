import TimelineCard from "./TimelineCard"

function RoadmapTimeline({ roadmap }) {
  if (!roadmap) return null

  return (
    <section className="mt-10">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            {roadmap.title || "Generated Roadmap"}
          </h2>
          {roadmap.overview ? (
            <p className="text-sm leading-relaxed text-zinc-300">{roadmap.overview}</p>
          ) : null}
        </div>

        {Array.isArray(roadmap.timeline) && roadmap.timeline.length > 0 ? (
          <div className="mt-8">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-white">Timeline</p>
              <p className="text-xs text-zinc-400">
                {roadmap.timeline.length} steps
              </p>
            </div>

            <div className="mt-4 grid gap-4">
              {roadmap.timeline.map((item, index) => (
                <TimelineCard key={`${item?.month ?? "m"}-${index}`} item={item} index={index} />
              ))}
            </div>
          </div>
        ) : null}

        {Array.isArray(roadmap.finalTips) && roadmap.finalTips.length > 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Final Tips</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              {roadmap.finalTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default RoadmapTimeline

