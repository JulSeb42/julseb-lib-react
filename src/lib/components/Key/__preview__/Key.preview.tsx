/*=============================================== KeyPreview ===============================================*/

import { Key, capitalize } from "../../../"
import { typeValues, type LibKeySize } from "../../../types"
import type { ComponentPreview } from "../../../../data/components"
import type { KeyProps } from "../../../types/components-props"

const keys = ["⌘", "K"]
const sizes: Array<LibKeySize> = Object.keys(
    typeValues.keySizes
) as Array<LibKeySize>

export const keyPreview: ComponentPreview<KeyProps> = {
    name: "Key",
    component: Key,
    category: "components",
    imports: "Key",
    typeImports: ["KeyProps"],
    extends: "HTMLSpanElement",
    previews: [
        ...sizes.map(size => ({
            previewTitle: capitalize(size),
            props: { keys, size },
        })),
        ...sizes.map(size => ({
            previewTitle: `${capitalize(size)} with separator`,
            props: {
                keys,
                size,
                withSeparator: true,
            },
        })),
    ],
}
