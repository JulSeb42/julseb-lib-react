import { Truncate } from "../../../"
import type { ILibTruncate } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { TruncateDemo } from "./Truncate.demo"

export const truncatePreview: ComponentPreview<ILibTruncate> = {
    name: "Truncate",
    component: Truncate,
    category: "components",
    import: "Truncate",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibTruncate",
    additionalTypeImports: null,
    extends: ["HTMLDivElement"],
    previews: [{ previewTitle: "Default", demo: <TruncateDemo /> }],
}
