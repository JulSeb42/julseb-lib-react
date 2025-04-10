import { Link } from "react-router-dom"
import { unslugify } from "@julseb-lib/utils"
import { Flexbox, Text } from "../../../lib"

export const ContainerPreview = ({ demos }: { demos: Array<string> }) => {
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
