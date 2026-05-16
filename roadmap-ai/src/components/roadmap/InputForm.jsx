import { useMemo, useState } from "react"
import Button from "../ui/Button"

function InputForm({ onGenerate, loading }) {
  const [goal, setGoal] = useState("")
  const [level, setLevel] = useState("Beginner")
  const [duration, setDuration] = useState("6 Months")

  const canSubmit = useMemo(() => {
    return Boolean(goal.trim() && level.trim() && duration.trim())
  }, [goal, level, duration])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit || loading) return

    onGenerate({
      goal: goal.trim(),
      level: level.trim(),
      duration: duration.trim(),
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-3">
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium text-zinc-200">
            Career Goal
          </label>
          <p className="mt-1 text-xs text-zinc-400">
            Example: Frontend Developer, Data Analyst, DevOps Engineer
          </p>
          <input
            type="text"
            placeholder="Frontend Developer"
            className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-400/60"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-200">
            Skill Level
          </label>
          <select
            className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-white outline-none focus:border-violet-400/60"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-zinc-200">
            Learning Duration
          </label>
          <p className="mt-1 text-xs text-zinc-400">
            Example: 3 Months, 6 Months, 1 Year
          </p>
          <input
            type="text"
            placeholder="6 Months"
            className="mt-3 w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-400/60"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500">
          AI returns strict JSON. The UI renders cards & timeline.
        </p>
        <Button type="submit" size="lg" disabled={!canSubmit || loading}>
          {loading ? "Generating..." : "Generate Roadmap"}
        </Button>
      </div>
    </form>
  )
}

export default InputForm

