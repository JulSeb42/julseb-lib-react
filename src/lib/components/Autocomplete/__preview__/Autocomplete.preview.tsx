/*=============================================== AutocompletePreview ===============================================*/

import { Autocomplete } from "../../../"
import {  } from "../../../types"
import type { AutocompleteProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const autocompletePreview: ComponentPreview<AutocompleteProps, typeof Autocomplete> = {
    name: "Autocomplete",
    component: Autocomplete,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
