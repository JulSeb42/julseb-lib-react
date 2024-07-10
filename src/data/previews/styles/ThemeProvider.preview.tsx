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
    imports: ["ThemeProviderWrapper", "useLibTheme"],
    typeImports: "ThemeContextProps",
    extends: null,
    demos: [{ element: <ThemeProviderPreview /> }],
}
