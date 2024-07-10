/*=============================================== TextDisplay preview ===============================================*/

import { Text } from "../.."
import { Flexbox } from "../../../Flexbox"

export function TextDisplay() {
    return (
        <Flexbox flexDirection="column" alignItems="stretch">
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
        </Flexbox>
    )
}
