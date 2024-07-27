/*=============================================== TextDisplay preview ===============================================*/

import { Text } from "../.."

export function Unordered() {
    return (
        <Text tag="ul" data-testid="testid" className="className">
            <li>Unordered list</li>
            <li>Unordered list</li>
            <li>Unordered list</li>
            <li>Unordered list</li>
            <li>Unordered list</li>
        </Text>
    )
}
