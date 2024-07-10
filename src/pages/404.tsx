/*=============================================== Homepage ===============================================*/

import { useParams } from "react-router-dom"
import { Page } from "../components"
import { Text, toPascalCase } from "../lib"

export function NotFoundPage() {
    const { componentName } = useParams<{ componentName: string }>()

    return (
        <Page title="404">
            {componentName && (
                <Text>
                    The component {toPascalCase(componentName)} does not exist
                </Text>
            )}
        </Page>
    )
}
