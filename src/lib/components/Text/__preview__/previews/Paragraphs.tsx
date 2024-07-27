/*=============================================== TextDisplay preview ===============================================*/

import { Link } from "react-router-dom"
import { Text } from "../.."
import { Flexbox } from "../../../Flexbox"

export function Paragraphs() {
    return (
        <Flexbox flexDirection="column" alignItems="stretch">
            <Text tag="p" data-testid="testid" className="className">
                Paragraph
            </Text>

            <Text tag="p" data-testid="testid" className="className">
                Paragraph{" "}
                <Text tag="strong" data-testid="testid" className="className">
                    strong
                </Text>
            </Text>
            <Text tag="p" data-testid="testid" className="className">
                Paragraph{" "}
                <Text tag="em" data-testid="testid" className="className">
                    italic
                </Text>
            </Text>
            <Text tag="p" data-testid="testid" className="className">
                Paragraph with <Link to="#">link</Link>
            </Text>
            <Text tag="p" data-testid="testid" className="className">
                Paragraph with <button>button</button>
            </Text>
            <Text tag="p" data-testid="testid" className="className">
                Paragraph <code>code</code>
            </Text>
        </Flexbox>
    )
}
