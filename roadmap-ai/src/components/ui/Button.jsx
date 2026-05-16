function Button({
  as = "button",
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) {
  const Comp = as

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-60 disabled:cursor-not-allowed"

  const variants = {
    primary:
      "bg-violet-500 text-white hover:bg-violet-400 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] shadow-violet-500/15",
    secondary:
      "bg-white/5 text-zinc-100 hover:bg-white/10 border border-white/10",
    ghost: "text-zinc-100 hover:bg-white/5 border border-transparent",
  }

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-12 px-5 text-base",
  }

  return (
    <Comp
      className={[base, variants[variant], sizes[size], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  )
}

export default Button

