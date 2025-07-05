import { createRoot } from "react-dom/client"
import { ThemeProviderWrapper, ToastContainer } from "./lib"
import { App } from "./App"
import "./lib/index.css"

createRoot(document.getElementById("root")!).render(
	<ThemeProviderWrapper>
		<App />
		<ToastContainer />
	</ThemeProviderWrapper>,
)
