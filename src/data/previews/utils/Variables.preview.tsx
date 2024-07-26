/*=============================================== VariablesPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import {
    allColors,
    allFontFamilies,
    allFontSizes,
    allFontWeights,
    allLineHeights,
    allOverlays,
    allRadiuses,
    allShadows,
    allSpacers,
    allTransitions,
    allLayouts,
} from "../../styles"
import { Table, toTitleCase } from "../../../lib"
import type { ReactChildren } from "../../../lib/types"
import type { Color, Variable } from "../../types"

interface IVariablesPreview {
    headers: Array<ReactChildren>
    data: Array<Variable | Color | (Variable & { valueTablet: string })>
}

function VariablesPreview({ headers, data }: IVariablesPreview) {
    return (
        <Table
            headers={headers.map(h =>
                typeof h === "string" ? toTitleCase(h?.toString()) : h
            )}
            data={data.map(d => Object.values(d).map(v => v))}
        />
    )
}

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
    category: "utils",
    component: null,
    import: null,
    additionalImports: null,
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: lists.map(list => ({
        previewTitle: list.name,
        demo: (
            <VariablesPreview
                headers={Object.keys(list.list[0])}
                data={list.list}
            />
        ),
    })),
}
