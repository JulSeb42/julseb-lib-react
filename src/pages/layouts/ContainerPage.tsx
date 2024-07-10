/*=============================================== ContainerPage ===============================================*/

import { Link } from "react-router-dom"
import { unslugify } from "ts-utils-julseb"
import { Page } from "../../components"
import { Text, Flexbox } from "../../lib"

export function ContainerPage() {
    const demos: Array<string> = [
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
            <Flexbox flexDirection="column" alignItems="stretch">
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
            </Flexbox>
        </Page>
    )
}
