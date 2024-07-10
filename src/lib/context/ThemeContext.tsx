/*=============================================== Theme context ===============================================*/

import { useState, useEffect, createContext, useContext } from "react"
import type { IStyleSheetManager, DefaultTheme } from "styled-components"
import { StyleSheetManager } from "../utils/StyleSheetManager"
import { Themes } from "../types/theme"
import type { ThemeContextProps, LibThemeNames, ReactChildren } from "../types"

export const ThemeContext = createContext<ThemeContextProps | null>(null)

interface ThemeProviderProps {
    stylesheetManager?: boolean | IStyleSheetManager
    children?: ReactChildren
}

export function ThemeProviderWrapper({
    children,
    stylesheetManager,
}: ThemeProviderProps) {
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

export function useLibTheme() {
    return useContext(ThemeContext) as ThemeContextProps
}
