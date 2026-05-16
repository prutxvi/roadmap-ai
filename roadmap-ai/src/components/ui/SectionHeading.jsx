function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest text-violet-300/80 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading

