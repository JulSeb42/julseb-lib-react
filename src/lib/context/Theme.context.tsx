/*=============================================== Theme context ===============================================*/

import { useState, useEffect, createContext, useContext } from "react"
import type { IStyleSheetManager, DefaultTheme } from "styled-components"
import { StyleSheetManager } from "../utils"
import { Themes } from "../types/theme"
import type { ILibThemeContext, LibThemeNames, ReactChildren } from "../types"

const ThemeContext = createContext<ILibThemeContext | null>(null)

interface ILibThemeProvider {
    stylesheetManager?: boolean | IStyleSheetManager
    children?: ReactChildren
}

/**
 * @description Returns a Wrapper for the theme
 * @link https://documentation-components-react.vercel.app/styles/theme-provider
 * @prop stylesheetManager?: boolean | IStyleSheetManager => import IStyleSheetManager from "styled-components"
 * @prop children?: ReactChildren
 */

export function ThemeProviderWrapper({
    children,
    stylesheetManager,
}: ILibThemeProvider) {
    const [selectedTheme, setSelectedTheme] = useState<
        LibThemeNames | undefined
    >(undefined)

    const [theme, setTheme] = useState<DefaultTheme>(
        selectedTheme === "dark" ? Themes.dark : Themes.light
    )

    const body = document.body

    const toggleTheme = () => {
        if (selectedTheme === "light") {
            setSelectedTheme("dark")
            setTheme(Themes.dark)
            localStorage.setItem("theme", "dark")
            body.classList.add("dark")
        } else {
            setSelectedTheme("light")
            setTheme(Themes.light)
            localStorage.setItem("theme", "light")
            body.classList.remove("dark")
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches &&
                !selectedTheme
            ) {
                setSelectedTheme("dark")
                setTheme(Themes.dark)
                body.classList.add("dark")
            } else if (localStorage.getItem("theme") === "dark") {
                setSelectedTheme("dark")
                setTheme(Themes.dark)
                body.classList.add("dark")
            } else if (localStorage.getItem("theme") === "light") {
                setSelectedTheme("light")
                setTheme(Themes.light)
                body.classList.remove("dark")
            }
        }
    }, [selectedTheme, body])

    return (
        <ThemeContext.Provider value={{ theme, selectedTheme, toggleTheme }}>
            {stylesheetManager ? (
                <StyleSheetManager
                    {...(stylesheetManager as IStyleSheetManager)}
                >
                    {children}
                </StyleSheetManager>
            ) : (
                children
            )}
        </ThemeContext.Provider>
    )
}

/**
 * @description Hook for Theme context
 * @link https://documentation-components-react.vercel.app/styles/theme-provider
 * @prop theme: DefaultTheme => import from "styled-components"
 * @prop selectedTheme: "light" | "dark" | undefined
 * @prop toggleTheme: () => void
 */

export function useLibTheme() {
    return useContext(ThemeContext) as ILibThemeContext
}
