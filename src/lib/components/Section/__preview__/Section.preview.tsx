/*=============================================== SectionPreview ===============================================*/

import { Section } from "../"
import { Text } from "../../../"
import type { SectionProps } from "../types"
import type { ComponentPreview } from "../../../../data/components"
import type { LibSpacers } from "../../../types"

const sizes: Array<LibSpacers> = ["xxl", "xl", "l", "m", "s", "xs", "xxs", 100]

export const sectionPreview: ComponentPreview<SectionProps> = {
    name: "Section",
    component: Section,
    category: "layouts",
    imports: "Section",
    typeImports: "SectionProps",
    extends: "HTMLDivElement",
    previews: sizes.map(size => ({
        props: {
            gap: size,
            children: (
                <>
                    <Text tag="h4">Gap {size}</Text>
                    <Text>Content</Text>
                </>
            ),
        },
    })),
}
