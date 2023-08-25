/*=============================================== ThemeProviderPage ===============================================*/

import { Page } from "../../components"

import { useTheme, Text } from "../../lib"

export function ThemeProviderPage() {
    const { toggleTheme, selectedTheme } = useTheme()

    return (
        <Page title="Theme Provider">
            <Text>Selected theme: {selectedTheme}</Text>

            <button onClick={toggleTheme}>Toggle theme</button>
        </Page>
    )
}
