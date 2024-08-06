/*=============================================== AutocompletePreview ===============================================*/

import { useState } from "react"
import { Autocomplete } from "../../../"
import type { ILibAutocomplete } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { frenchCities } from "../../../../data"

export const autocompletePreview: ComponentPreview<ILibAutocomplete> = {
    name: "Autocomplete",
    component: Autocomplete as any,
    category: "components",
    import: "Autocomplete",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibAutocomplete",
    additionalTypeImports: null,
    extends: [
        "InputHTMLAttributes<HTMLInputElement>",
        "ILibInputBase",
        "ILibInputValidationIconComponent",
    ],
    previews: [
        {
            previewTitle: "Default",
            demo: (
                <AutocompleteDemo
                // validation={{ status: false, message: "Hello" }}
                // inputBackground="light"
                />
            ),
        },
    ],
}

function AutocompleteDemo(props: Partial<ILibAutocomplete>) {
    const [location, setLocation] = useState("")

    return (
        <Autocomplete
            {...props}
            value={location}
            setValue={setLocation}
            listResults={frenchCities}
            data-testid="testid"
            className="className"
            label="City"
        />
    )
}
