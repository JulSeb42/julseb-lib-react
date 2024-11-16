/*=============================================== VariablesPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import { allColors } from "../../styles/all-colors"
import { allOverlays } from "../../styles/all-overlays"
import { allFontFamilies } from "../../styles/all-font-families"
import { allFontWeights } from "../../styles/all-font-weights"
import { allFontSizes } from "../../styles/all-font-sizes"
import { allLineHeights } from "../../styles/all-line-heights"
import { allRadiuses } from "../../styles/all-radiuses"
import { allShadows } from "../../styles/all-shadows"
import { allSpacers } from "../../styles/all-spacers"
import { allTransitions } from "../../styles/all-transition"
import { allLayouts } from "../../styles/all-layouts"
import type { Color, Variable } from "../../types"
import { RenderPreview } from "./RenderPreview"

interface List {
    name: string
    list: Array<Color | Variable | (Variable & { valueTablet: string })>
}

const lists: Array<List> = [
    { name: "Colors", list: allColors },
    { name: "Overlay", list: allOverlays },
    { name: "Font families", list: allFontFamilies },
    { name: "Font sizes", list: allFontSizes },
    { name: "Font weights", list: allFontWeights },
    { name: "Line heights", list: allLineHeights },
    { name: "Shadows", list: allShadows },
    { name: "Radiuses", list: allRadiuses },
    { name: "Spacers", list: allSpacers },
    { name: "Transitions", list: allTransitions },
    { name: "Layouts", list: allLayouts },
]

export const variablesPreview: ComponentPreview<null> = {
    name: "Variables",
    category: "helpers",
    component: null,
    import: null,
    additionalImports: null,
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: lists.map(list => ({
        previewTitle: list.name,
        demo: <RenderPreview data={list.list} />,
    })),
}
