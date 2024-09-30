/*=============================================== App ===============================================*/

import type { FC } from "react"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider, ToasterProviderWrapper, useLibTheme } from "./lib"
import { router } from "./routes"

export const App: FC = () => {
    const { theme } = useLibTheme()

    return (
        <ThemeProvider theme={theme}>
            <ToasterProviderWrapper>
                <RouterProvider router={router} />
            </ToasterProviderWrapper>
        </ThemeProvider>
    )
}
