import "reflect-metadata"
import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./App"
import { worker } from "./mocks/browser"
import "./core/i18n/i18n"

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
