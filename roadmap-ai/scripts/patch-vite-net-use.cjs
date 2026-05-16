/* eslint-disable no-console */
const fs = require("node:fs")
const path = require("node:path")

const file = path.join(
  __dirname,
  "..",
  "node_modules",
  "vite",
  "dist",
  "node",
  "chunks",
  "node.js"
)

function patch() {
  if (!fs.existsSync(file)) {
    console.log("[postinstall] Vite file not found, skipping patch.")
    return
  }

  const src = fs.readFileSync(file, "utf8")
  if (src.includes("/* patched: ignore-net-use */")) {
    console.log("[postinstall] Vite already patched.")
    return
  }

  const target = 'exec("net use", (error, stdout) => {'
  const targetIndex = src.indexOf(target)
  if (targetIndex === -1) {
    console.log("[postinstall] Pattern not found, skipping patch.")
    return
  }

  const injectedBefore = "/* patched: ignore-net-use */\n\ttry {\n\t\t"

  // Replace only the first occurrence of target with injected wrapper.
  let out =
    src.slice(0, targetIndex) +
    injectedBefore +
    target +
    src.slice(targetIndex + target.length)

  // Now find the first closing for that exec call (after the target).
  const close = "});"
  const closeIndex = out.indexOf(
    close,
    targetIndex + injectedBefore.length + target.length
  )
  if (closeIndex === -1) {
    console.log("[postinstall] Close pattern not found, skipping patch.")
    return
  }

  const afterCloseInsertIndex = closeIndex + close.length
  out =
    out.slice(0, afterCloseInsertIndex) +
    "\n\t} catch (error) {\n\t\treturn;\n\t}" +
    out.slice(afterCloseInsertIndex)

  fs.writeFileSync(file, out, "utf8")
  console.log("[postinstall] Patched Vite to ignore net use exec errors.")
}

patch()
