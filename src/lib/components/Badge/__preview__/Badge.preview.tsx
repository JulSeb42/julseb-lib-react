import { Badge, Flexbox, getRandomString } from "../../../"
import { type LibColorsShort, typeValues } from "../../../types"
import { roundIconSize } from "../../../lib-utils"
import { StarFull } from "../../../icons"
import type { ILibBadge } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const BadgePreview = (props: ILibBadge & { title: string }) => {
    const arr = Object.keys(typeValues.colorsShort) as Array<LibColorsShort>

    return (
        <Flexbox gap="s" flexWrap="wrap">
            {arr.map((c, i) => (
                <Badge
                    key={i}
                    data-testid="testid"
                    className={getRandomString(10, true)}
                    {...props}
                    backgroundColor={c}
                    id={`badge-${c}-${i}-${props?.title}`}
                />
            ))}
        </Flexbox>
    )
}

export const badgePreview: ComponentPreview<ILibBadge> = {
    name: "Badge",
    component: Badge,
    category: "components",
    import: "Badge",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibBadge",
    additionalTypeImports: null,
    extends: ["HTMLSpanElement"],
    previews: [
        {
            previewTitle: "Default",
            demo: <BadgePreview size={24} title="default" />,
        },
        {
            previewTitle: "With icon",
            demo: <BadgePreview size={48} icon="star" title="with-icon" />,
        },
        {
            previewTitle: "With SVG icon",
            demo: (
                <BadgePreview
                    size={32}
                    icon={<StarFull size={roundIconSize(32)} />}
                    title="with-icon-svg"
                />
            ),
        },
        {
            previewTitle: "With number",
            demo: <BadgePreview size={64} number={1} title="with-number" />,
        },
        {
            previewTitle: "With long number",
            demo: (
                <BadgePreview
                    size={32}
                    number={300}
                    padding={{ topBottom: "0px", leftRight: "s" }}
                    title="with-long-number"
                />
            ),
        },
    ],
}
