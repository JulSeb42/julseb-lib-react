/*=============================================== TextDisplay preview ===============================================*/

import { Link } from "react-router-dom"
import { Text } from "../.."
import { Flexbox } from "../../../Flexbox"

export function Paragraphs() {
    return (
        <Flexbox flexDirection="column" alignItems="stretch">
            <Text tag="p">Paragraph</Text>

            <Text tag="p">
                Paragraph <Text tag="strong">strong</Text>
            </Text>
            <Text tag="p">
                Paragraph <Text tag="em">italic</Text>
            </Text>
            <Text tag="p">
                Paragraph with <Link to="#">link</Link>
            </Text>
            <Text tag="p">
                Paragraph with <button>button</button>
            </Text>
            <Text tag="p">
                Paragraph <code>code</code>
            </Text>
        </Flexbox>
    )
}
