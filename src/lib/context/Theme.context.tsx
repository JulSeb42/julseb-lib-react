import { useState, useEffect, createContext, useContext } from "react"
import type { LibThemeNames, ReactChildren, DispatchState } from "../types"

type ILibThemeContext = {
	theme: LibThemeNames
	setTheme: DispatchState<LibThemeNames>
	switchTheme: () => void
}

const ThemeContext = createContext<ILibThemeContext | null>(null)

interface ILibThemeProvider {
	children?: ReactChildren
}

export const ThemeProviderWrapper = ({ children }: ILibThemeProvider) => {
	const [theme, setTheme] = useState<LibThemeNames>("light")

	const switchToLight = () => {
		if (typeof window !== "undefined") {
			document.documentElement.classList.add("light")
			document.documentElement.classList.remove("dark")
			setTheme("light")
			localStorage.setItem("theme", "light")
		}
	}

	const switchToDark = () => {
		if (typeof window !== "undefined") {
			document.documentElement.classList.remove("light")
			document.documentElement.classList.add("dark")
			setTheme("dark")
			localStorage.setItem("theme", "dark")
		}
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme") as LibThemeNames

			if (storedTheme) {
				if (storedTheme === "light") switchToLight()
				else switchToDark()
			} else {
				if (window.matchMedia("(prefers-color-scheme: dark)").matches)
					switchToDark()
				else switchToLight()
			}
		}
	}, [theme])

	const switchTheme = () => {
		if (theme === "light") switchToDark()
		else switchToLight()
	}

	return (
		<ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

/**
 * Custom hook to access the theme context.
 *
 * @returns {ILibThemeContext} The current theme, a setter for the theme, and a function to toggle between light and dark themes.
 * @example
 * const { theme, setTheme, switchTheme } = useLibTheme()
 */
export const useLibTheme = () => useContext(ThemeContext) as ILibThemeContext
