import { createRoot } from "react-dom/client"
import { ThemeProviderWrapper } from "./lib/context/Theme.context"
import { App } from "./App"
import "./lib/index.css"

createRoot(document.getElementById("root")!).render(
	<ThemeProviderWrapper>
		<App />
	</ThemeProviderWrapper>,
)
