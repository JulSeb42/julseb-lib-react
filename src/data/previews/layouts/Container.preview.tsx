/*=============================================== ContainerPreview ===============================================*/

import { Link } from "react-router-dom"
import { unslugify } from "ts-utils-julseb"
import type { ComponentPreview } from "../../components"
import { Flexbox, Text } from "../../../lib"

function ContainerPreview() {
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
    )
}

export const containerPreview: ComponentPreview<any, any> = {
    name: "Container",
    category: "layouts",
    component: null,
    demos: [{ element: <ContainerPreview key={0} /> }],
}
