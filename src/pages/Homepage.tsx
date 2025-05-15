import { useLibTheme, Text } from "../lib"
import { Page } from "../components"

export const Homepage = () => {
	const { theme, switchTheme } = useLibTheme()

	return (
		<Page title="Hello World">
			<Text>Theme is {theme}</Text>
			<button
				onClick={switchTheme}
				className="self-start px-4 py-2 font-black text-white bg-blue-500 rounded-md hover:bg-blue-300 active:bg-blue-600"
			>
				Switch to {theme === "light" ? "dark" : "light"} theme
			</button>
		</Page>
	)
}
