import { useLibTheme, Text } from "../lib"
import { Page } from "../components"

export const Homepage = () => {
	const { theme, switchTheme } = useLibTheme()

	const heights = [
		"3xs",
		"2xs",
		"xs",
		"sm",
		"md",
		"lg",
		"xl",
		"2xl",
		"3xl",
		"4xl",
		"5xl",
		"6xl",
		"7xl",
		"none",
		"px",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"screen",
		"min",
		"max",
		"fit",
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
					<li key={h}>{`"${h}": "${h}",`}</li>
				))}
			</ul>
		</Page>
	)
}
