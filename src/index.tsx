import "reflect-metadata"
import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./App"
import { worker } from "./mocks/browser"
import "./core/i18n/i18n"
import express from "express"

const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get("/health", (_, res) => {
  res.send("ok")
})

app.use(express.static("build"))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

if (process.env.NODE_ENV === "development") {
  worker.start()
}

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
