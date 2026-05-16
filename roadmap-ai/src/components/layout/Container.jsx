function Container({ className = "", children }) {
  return (
    <div className={["mx-auto w-full max-w-6xl px-4 sm:px-6", className].join(" ")}>
      {children}
    </div>
  )
}

export default Container

