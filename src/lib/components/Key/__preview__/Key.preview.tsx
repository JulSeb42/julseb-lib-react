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
    props: [
        ...sizes.map(size => ({ previewTitle: capitalize(size), keys, size })),
        ...sizes.map(size => ({
            previewTitle: `${capitalize(size)} with separator`,
            keys,
            size,
            withSeparator: true,
        })),
    ],
}
