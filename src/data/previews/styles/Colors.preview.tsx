/*=============================================== ColorsPreview ===============================================*/

import { uuid } from "ts-utils-julseb"
import type { ComponentPreview } from "../../components"
import { ColorCard } from "../../../components"
import { Flexbox } from "../../../lib"
import { colorsLight, colorsDark } from "../.."

function ColorsPreview() {
    return (
        <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
            {[...colorsLight, ...colorsDark].map(c => (
                <ColorCard color={c} key={uuid()} />
            ))}
        </Flexbox>
    )
}

export const colorsPreview: ComponentPreview<any, any> = {
    name: "Colors",
    category: "styles",
    component: null,
    demos: [{ element: <ColorsPreview key={0} /> }],
}
