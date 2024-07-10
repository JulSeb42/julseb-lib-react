/*=============================================== KeyPreview ===============================================*/

import { Key, capitalize } from "../../../"
import { typeValues } from "../../../types"
import type { ComponentPreview } from "../../../../data/components"
import type { KeyProps, KeySize } from "../../../types/components-props"

const keys = ["⌘", "K"]
const sizes: Array<KeySize> = Object.keys(typeValues.keySizes) as Array<KeySize>

export const keyPreview: ComponentPreview<KeyProps, typeof Key> = {
    name: "Key",
    component: Key,
    category: "components",
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
