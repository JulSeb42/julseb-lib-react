/*=============================================== Theme context ===============================================*/

import {
    useState,
    useEffect,
    createContext,
    type ReactNode,
    useContext,
} from "react"

import { Themes } from "../types/theme"

import type { ThemeType, ThemeContextProps, LibThemeNames } from "../types"

export const ThemeContext = createContext<ThemeContextProps | null>(null)

interface ThemeProviderProps {
    children?: ReactNode | ReactNode[]
}

export function ThemeProviderWrapper({ children }: ThemeProviderProps) {
    const [selectedTheme, setSelectedTheme] = useState<
        LibThemeNames | undefined
    >(undefined)

    const [theme, setTheme] = useState<ThemeType>(
        selectedTheme === "dark" ? Themes.dark : Themes.light,
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
        <ThemeContext.Provider
            value={{
                theme,
                selectedTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext) as ThemeContextProps
