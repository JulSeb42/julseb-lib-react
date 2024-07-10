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

export const themeProviderPreview: ComponentPreview<any, any> = {
    name: "Theme Provider",
    category: "styles",
    component: null,
    demos: [{ element: <ThemeProviderPreview key={0} /> }],
}
