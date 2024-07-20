/*=============================================== AutocompletePreview ===============================================*/

import { useState } from "react"
import { Autocomplete } from "../../../"
import type {} from "../../../types"
import type { ILibAutocomplete } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { frenchCities } from "../../../../data"

export const autocompletePreview: ComponentPreview<ILibAutocomplete> = {
    name: "Autocomplete",
    component: Autocomplete as any,
    category: "components",
    import: "Autocomplete",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibAutocomplete",
    additionalTypeImports: [],
    extends: [
        "InputHTMLAttributes<HTMLInputElement>",
        "ILibInputBase",
        "ILibInputValidationIconComponent",
    ],
    previews: [{ previewTitle: "Default", demo: <AutocompleteDemo /> }],
}

function AutocompleteDemo({ ...rest }: Partial<ILibAutocomplete>) {
    const [location, setLocation] = useState("")

    return (
        <Autocomplete
            {...rest}
            value={location}
            setValue={setLocation}
            listResults={frenchCities}
        />
    )
}
