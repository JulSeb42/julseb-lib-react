/*=============================================== ThemeProviderPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import { useLibTheme, Button, Text } from "../../../lib"

function ThemeProviderPreview() {
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
    import: ["ThemeProviderWrapper", "useLibTheme"],
    propsImport: "ThemeContextProps",
    extends: null,
    previews: [{ demo: <ThemeProviderPreview /> }],
}
