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
 * ThemeProviderWrapper provides a context for managing and toggling between light and dark themes in the application.
 *
 * @component
 * @param {Object} props - ThemeProviderWrapper props.
 * @param {boolean | IStyleSheetManager} [props.stylesheetManager] - Optionally wrap children with a styled-components StyleSheetManager.
 * @param {ReactChildren} [props.children] - Children components to wrap with the theme context.
 * @returns {JSX.Element} The Theme context provider with optional StyleSheetManager.
 *
 * @see https://documentation-components-react.vercel.app/styles/theme-provider
 * @example
 * <ThemeProviderWrapper>
 *   <App />
 * </ThemeProviderWrapper>
 */
export const ThemeProviderWrapper = ({
    children,
    stylesheetManager,
}: ILibThemeProvider) => {
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
                !selectedTheme &&
                !localStorage.getItem("theme")
            ) {
                setSelectedTheme("dark")
                setTheme(Themes.dark)
                localStorage.setItem("theme", "dark")
                body.classList.add("dark")
            } else if (
                !localStorage.getItem("theme") ||
                localStorage.getItem("theme") === null ||
                localStorage.getItem("theme") === undefined
            ) {
                window.localStorage.setItem("theme", "light")
                setSelectedTheme("light")
                setTheme(Themes.light)
            } else if (localStorage.getItem("theme") === "light") {
                setSelectedTheme("light")
                setTheme(Themes.light)
                body.classList.remove("dark")
            } else if (localStorage.getItem("theme") === "dark") {
                setSelectedTheme("dark")
                setTheme(Themes.dark)
                body.classList.add("dark")
            }
        }
    }, [selectedTheme, body])

    return (
        <ThemeContext.Provider
            value={{ theme: theme ?? Themes.light, selectedTheme, toggleTheme }}
        >
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
 * useLibTheme is a hook for accessing the Theme context and toggling the theme.
 *
 * @function
 * @returns {ILibThemeContext} The theme context with properties: theme, selectedTheme, toggleTheme.
 *
 * @see https://documentation-components-react.vercel.app/styles/theme-provider
 * @example
 * const { theme, selectedTheme, toggleTheme } = useLibTheme()
 */
export const useLibTheme = () => useContext(ThemeContext) as ILibThemeContext
