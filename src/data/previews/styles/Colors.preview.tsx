import type { ComponentPreview } from "../../components"
import { ColorCard } from "../../../components"
import { Flexbox, Tabs } from "../../../lib"
import { colorsLight, colorsDark } from "../.."
import type { LibTabItem } from "../../../lib/types"

const tabs: Array<LibTabItem> = [
    {
        title: "Light",
        content: (
            <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
                {colorsLight.map((color, i) => (
                    <ColorCard key={i} color={color} />
                ))}
            </Flexbox>
        ),
    },
    {
        title: "Dark",
        content: (
            <Flexbox gap="xs" flexDirection="column" alignItems="stretch">
                {colorsDark.map((color, i) => (
                    <ColorCard key={i} color={color} />
                ))}
            </Flexbox>
        ),
    },
]

const ColorsPreview = () => {
    return (
        <Tabs tabsItems={tabs} variant="rounded" justify="stretch" showInUrl />
    )
}

export const colorsPreview: ComponentPreview<null> = {
    name: "Colors",
    category: "styles",
    component: null,
    import: null,
    additionalImports: ["COLORS_LIGHT", "COLORS_DARK"],
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: [{ previewTitle: "", demo: <ColorsPreview /> }],
}
