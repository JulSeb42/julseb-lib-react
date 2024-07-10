/*=============================================== BadgePreview ===============================================*/

import { Badge, Flexbox } from "../../../"
import { type LibColorsShort, typeValues } from "../../../types"
import { roundIconSize } from "../../../lib-utils"
import { StarFull } from "../../../icons"
import type { BadgeProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const badgePreview: ComponentPreview<BadgeProps> = {
    name: "Badge",
    component: Badge,
    category: "components",
    imports: ["Badge"],
    typeImports: ["BadgeProps"],
    extends: ["HTMLSpanElement"],
    demos: [
        { previewTitle: "Default", element: BadgePreview({ size: 24 }) },
        {
            previewTitle: "With icon",
            element: BadgePreview({ size: 48, icon: "star" }),
        },
        {
            previewTitle: "With SVG icon",
            element: BadgePreview({
                size: 32,
                icon: <StarFull size={roundIconSize(32)} />,
            }),
        },
        {
            previewTitle: "With number",
            element: BadgePreview({ size: 64, number: 1 }),
        },
        {
            previewTitle: "With long number",
            element: BadgePreview({
                number: 300,
                size: 32,
                padding: { topBottom: "0px", leftRight: "s" },
            }),
        },
    ],
}

function BadgePreview(props: BadgeProps) {
    const arr = Object.keys(typeValues.colorsShort) as Array<LibColorsShort>

    return (
        <Flexbox gap="s" flexWrap="wrap">
            {arr.map((c, i) => (
                <Badge backgroundColor={c} {...props} key={i} />
            ))}
        </Flexbox>
    )
}
