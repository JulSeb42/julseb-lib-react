import type { ComponentPreview } from "../../components"
import { allHelpers } from "../../utils/all-helpers"
import { RenderPreview } from "./RenderPreview"

export const helpersPreview: ComponentPreview<null> = {
    name: "Helpers",
    category: "helpers",
    component: null,
    import: null,
    additionalImports: null,
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: [{ demo: <RenderPreview data={allHelpers} /> }],
}
