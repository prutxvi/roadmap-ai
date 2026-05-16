import { useState } from "react"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Features from "./components/sections/Features"
import TeamSection from "./components/sections/TeamSection"

import InputForm from "./components/roadmap/InputForm"
import RoadmapTimeline from "./components/roadmap/RoadmapTimeline"

import { generateRoadmap } from "./services/groqApi"

function App() {
  const [roadmap, setRoadmap] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleGenerate = async (data) => {
    setLoading(true)
    setError("")
    setRoadmap(null)

    const result = await generateRoadmap(data)
    if (!result.ok) {
      setError(result.error || "Something went wrong.")
      setLoading(false)
      return
    }

    setRoadmap(result.roadmap)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      <Hero />

      <About />
      <Features />

      <section id="generator" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-center">
              <p className="text-xs font-semibold tracking-widest text-violet-300/80 uppercase">
                Roadmap Generator
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Generate your roadmap in seconds
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-400">
                The AI returns strict JSON, so the UI can render a clean roadmap timeline.
              </p>
            </div>

            <InputForm onGenerate={handleGenerate} loading={loading} />

            {error ? (
              <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            {roadmap ? <RoadmapTimeline roadmap={roadmap} /> : null}
          </div>
        </div>
      </section>

      <TeamSection />
      <Footer />
    </div>
  )
}

export default App
