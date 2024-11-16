/*=============================================== SelectPreview ===============================================*/

import { useState } from "react"
import { Select } from "../../../"
import type { ILibSelect } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const SelectDemo = ({ ...rest }: Partial<ILibSelect>) => {
    const options = ["react", "javascript", "scss", "css", "html"]

    const [selected, setSelected] = useState<string>(options[0])

    return (
        <Select
            value={selected}
            setValue={setSelected}
            options={options}
            data-testid="testid"
            className="className"
            {...rest}
        />
    )
}

export const selectPreview: ComponentPreview<ILibSelect> = {
    name: "Select",
    component: Select,
    category: "components",
    import: "Select",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibSelect",
    additionalTypeImports: null,
    extends: [
        "HTMLDivElement",
        "ILibInputBase",
        "ILibInputValidationIconComponent",
    ],
    previews: [{ previewTitle: "Default", demo: <SelectDemo /> }],
}
