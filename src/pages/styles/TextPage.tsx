/*=============================================== TextPage ===============================================*/

import { Link } from "react-router-dom"

import { Page } from "../../components"
import { Text } from "../../lib"

export function TextPage() {
    return (
        <Page title="Text">
            <>
                <Text tag="h1" display>
                    Title h1 display
                </Text>

                <Text tag="h2" display>
                    Title h2 display
                </Text>

                <Text tag="h3" display>
                    Title h3 display
                </Text>

                <Text tag="h4" display>
                    Title h4 display
                </Text>

                <Text tag="h5" display>
                    Title h5 display
                </Text>
            </>

            <>
                <Text tag="h1">Title h1</Text>
                <Text tag="h2">Title h2</Text>
                <Text tag="h3">Title h3</Text>
                <Text tag="h4">Title h4</Text>
                <Text tag="h5">Title h5</Text>
                <Text tag="h6">Title h6</Text>
            </>

            <>
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
            </>

            <Text tag="small">Small</Text>

            <Text tag="blockquote">Blockquote</Text>

            <Text tag="ul">
                <li>Unordered list</li>
                <li>Unordered list</li>
                <li>Unordered list</li>
                <li>Unordered list</li>
                <li>Unordered list</li>
            </Text>

            <Text tag="ol">
                <li>Ordered list</li>
                <li>Ordered list</li>
                <li>Ordered list</li>
                <li>Ordered list</li>
                <li>Ordered list</li>
            </Text>

            <Text tag="dl">
                <dt>Description list title</dt>
                <dd>Description list content</dd>
                <dt>Description list title</dt>
                <dd>Description list content</dd>
                <dt>Description list title</dt>
                <dd>Description list content</dd>
                <dt>Description list title</dt>
                <dd>Description list content</dd>
                <dt>Description list title</dt>
                <dd>Description list content</dd>
            </Text>
        </Page>
    )
}
