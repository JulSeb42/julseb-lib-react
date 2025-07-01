import type { ComponentPreview } from "../../components"
import { useLibTheme, Text } from "../../../lib"

const ThemeProviderPreview = () => {
	const { theme, switchTheme } = useLibTheme()

	return (
		<>
			<Text>Selected theme: {theme}</Text>
			<button
				onClick={switchTheme}
				className="self-start bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-4 py-2 rounded-xl font-bold text-white"
			>
				Toggle theme
			</button>
		</>
	)
}

export const themeProviderPreview: ComponentPreview<null> = {
	name: "Theme Provider",
	category: "styles",
	component: null,
	import: "useLibTheme",
	additionalImports: ["ThemeProviderWrapper"],
	optionalImports: null,
	propsImport: "ThemeContextProps",
	additionalTypeImports: null,
	extends: null,
	previews: [{ demo: <ThemeProviderPreview /> }],
	props: null,
}
