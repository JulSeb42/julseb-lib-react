/*=============================================== BadgePreview ===============================================*/

import { Badge, Flexbox } from "../../../"
import { type LibColorsShort, typeValues } from "../../../types"
import { roundIconSize } from "../../../lib-utils"
import { StarFull } from "../../../icons"
import type { ILibBadge } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const badgePreview: ComponentPreview<ILibBadge> = {
    name: "Badge",
    component: Badge,
    category: "components",
    import: "Badge",
    additionalImports: null,
    optionalImports: null,
    propsImport: "BadgeProps",
    additionalTypeImports: null,
    extends: ["HTMLSpanElement"],
    previews: [
        { previewTitle: "Default", demo: <BadgePreview size={24} /> },
        {
            previewTitle: "With icon",
            demo: <BadgePreview size={48} icon="star" />,
        },
        {
            previewTitle: "With SVG icon",
            demo: (
                <BadgePreview
                    size={32}
                    icon={<StarFull size={roundIconSize(32)} />}
                />
            ),
        },
        {
            previewTitle: "With number",
            demo: <BadgePreview size={64} number={1} />,
        },
        {
            previewTitle: "With long number",
            demo: (
                <BadgePreview
                    size={32}
                    number={300}
                    padding={{ topBottom: "0px", leftRight: "s" }}
                />
            ),
        },
    ],
}

function BadgePreview(props: ILibBadge) {
    const arr = Object.keys(typeValues.colorsShort) as Array<LibColorsShort>

    return (
        <Flexbox gap="s" flexWrap="wrap">
            {arr.map((c, i) => (
                <Badge backgroundColor={c} {...props} key={i} />
            ))}
        </Flexbox>
    )
}
