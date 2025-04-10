import type { ComponentPreview } from "../../components"
import { allMixins } from "../../utils/all-mixins"
import { RenderPreview } from "./RenderPreview"

export const mixinsPreview: ComponentPreview<null> = {
    name: "Mixins",
    category: "helpers",
    component: null,
    import: "Mixins",
    additionalImports: null,
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: [{ demo: <RenderPreview data={allMixins} withCode /> }],
}
