import type { ComponentPreview } from "../../components"
import { useLibTheme, Button, Text } from "../../../lib"

const ThemeProviderPreview = () => {
    const { selectedTheme, toggleTheme } = useLibTheme()

    return (
        <>
            <Text>Selected theme: {selectedTheme}</Text>
            <Button onClick={toggleTheme}>Toggle theme</Button>
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
}
