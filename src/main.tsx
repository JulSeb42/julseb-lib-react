/*=============================================== Main ===============================================*/

import ReactDOM from "react-dom/client"
import { App } from "./App"
import { ThemeProviderWrapper } from "./lib"

import "./lib/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProviderWrapper>
        <App />
    </ThemeProviderWrapper>
)
