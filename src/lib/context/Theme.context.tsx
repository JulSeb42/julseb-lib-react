"use client"

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
	const storedTheme = localStorage.getItem("theme") as LibThemeNames
	const [theme, setTheme] = useState(storedTheme ?? "system")

	const docEl = document.documentElement

	useEffect(() => {
		if (storedTheme || theme === "system") {
			if (theme === "light") {
				docEl.classList.add("light")
				docEl.classList.remove("dark")
			} else if (theme === "dark") {
				docEl.classList.add("dark")
				docEl.classList.remove("light")
			} else {
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
					docEl.classList.add("dark")
					docEl.classList.remove("light")
				} else {
					docEl.classList.add("light")
					docEl.classList.remove("dark")
				}
			}
		} else {
			localStorage.setItem("theme", "system")
		}
	}, [theme, localStorage.getItem("theme"), docEl])

	const switchTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark"
		setTheme(newTheme)
		localStorage.setItem("theme", newTheme)
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
 * @returns {ILibThemeContext} The theme context value, including the current theme,
 * a function to update the theme, and a handler to change the theme.
 *
 * @example
 * const { theme, setTheme, handleChangeTheme } = useLibTheme()
 * handleChangeTheme("dark")
 */
export const useLibTheme = () => useContext(ThemeContext) as ILibThemeContext
