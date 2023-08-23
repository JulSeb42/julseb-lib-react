/*=============================================== ContainerPage ===============================================*/

import { Link } from "react-router-dom"

import { Page } from "../../components"
import { Text, unslugify } from "../../lib"

export function ContainerPage() {
    const demos: string[] = [
        "main-default",
        "main-large",
        "main-form",
        "main-number",
        "main-full",
        "aside-default",
        "aside-small",
        "aside-both-sides",
    ]

    return (
        <Page title="Container">
            {demos.map(d => (
                <Text key={d}>
                    <Link
                        to={`/demos/${d}`}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {unslugify(d)}
                    </Link>
                </Text>
            ))}
        </Page>
    )
}
