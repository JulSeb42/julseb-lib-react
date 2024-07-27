/*=============================================== TextDisplay preview ===============================================*/

import { Text } from "../.."

export function Ordered() {
    return (
        <Text tag="ol" data-testid="testid" className="className">
            <li>Ordered list</li>
            <li>Ordered list</li>
            <li>Ordered list</li>
            <li>Ordered list</li>
            <li>Ordered list</li>
        </Text>
    )
}
