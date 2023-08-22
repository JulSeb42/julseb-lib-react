/*=============================================== App ===============================================*/

import { RouterProvider } from "react-router-dom"

import { ThemeProvider, useTheme } from "./lib"
import { router } from "./routes"

export function App() {
    const { theme } = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}
