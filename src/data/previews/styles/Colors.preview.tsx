/*=============================================== ColorsPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import { ColorCard } from "../../../components"
import { Flexbox } from "../../../lib"
import { colorsLight, colorsDark } from "../.."

function ColorsPreview() {
    return (
        <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
            {[...colorsLight, ...colorsDark].map((c, i) => (
                <ColorCard color={c} key={i} />
            ))}
        </Flexbox>
    )
}

export const colorsPreview: ComponentPreview<null> = {
    name: "Colors",
    category: "styles",
    component: null,
    imports: ["COLORS_LIGHT", "COLORS_DARK"],
    typeImports: null,
    extends: null,
    previews: [{ previewTitle: "", demo: <ColorsPreview /> }],
}
