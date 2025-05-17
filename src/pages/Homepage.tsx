import { useLibTheme, Text } from "../lib"
import { Page } from "../components"

export const Homepage = () => {
	const { theme, switchTheme } = useLibTheme()

	const heights = [
		"min-h-px",
		"min-h-full",
		"min-h-screen",
		"min-h-dvh",
		"min-h-dvw",
		"min-h-lvh",
		"min-h-lvw",
		"min-h-svw",
		"min-h-svh",
		"min-h-auto",
		"min-h-min",
		"min-h-max",
		"min-h-fit",
		"min-h-lh",
	]

	return (
		<Page title="Hello World">
			<Text>Theme is {theme}</Text>
			<button
				onClick={switchTheme}
				className="self-start bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-4 py-2 rounded-md font-black text-white"
			>
				Switch to {theme === "light" ? "dark" : "light"} theme
			</button>

			<ul>
				{heights.map(h => (
					<li key={h}>{`"${h.replaceAll("min-h-", "")}"|`}</li>
				))}
			</ul>
		</Page>
	)
}
