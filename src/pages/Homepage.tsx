import { useLibTheme, Text } from "../lib"
import { Page } from "../components"

export const Homepage = () => {
	const { theme, switchTheme } = useLibTheme()

	return (
		<Page title="Homepage">
			<Text tag="h1">Hello World</Text>

			<Text>Theme is {theme}</Text>
			<button
				onClick={switchTheme}
				className="self-start bg-blue-500 hover:bg-blue-300 active:bg-blue-600 rounded-md px-4 py-2 text-white font-black"
			>
				Switch to {theme === "light" ? "dark" : "light"} theme
			</button>
		</Page>
	)
}
