/*=============================================== TextDisplay preview ===============================================*/

import { Text } from "../.."
import { Flexbox } from "../../../Flexbox"

export function TextDisplay() {
    return (
        <Flexbox flexDirection="column" alignItems="stretch">
            <Text tag="h1" display data-testid="testid" className="className">
                Title h1 display
            </Text>

            <Text tag="h2" display data-testid="testid" className="className">
                Title h2 display
            </Text>

            <Text tag="h3" display data-testid="testid" className="className">
                Title h3 display
            </Text>

            <Text tag="h4" display data-testid="testid" className="className">
                Title h4 display
            </Text>

            <Text tag="h5" display data-testid="testid" className="className">
                Title h5 display
            </Text>
        </Flexbox>
    )
}
