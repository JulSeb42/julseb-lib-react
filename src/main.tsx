import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { ThemeProviderWrapper, ToastContainer } from "./lib"
import "./lib/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProviderWrapper>
			<App />
			<ToastContainer position="bottom-right" />
		</ThemeProviderWrapper>
	</React.StrictMode>,
)
