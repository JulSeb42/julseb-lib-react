/*=============================================== HelpersPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import { allHelpers } from "../../utils/all-helpers"
import { Table, capitalize } from "../../../lib"

function HelpersPreview() {
    const headers = Object.keys(allHelpers[0]).map(v => capitalize(v))
    const data = allHelpers.map(helper => Object.values(helper).map(v => v))

    return <Table headers={headers} data={data} />
}

export const helpersPreview: ComponentPreview<null> = {
    name: "Helpers",
    category: "utils",
    component: null,
    import: null,
    additionalImports: null,
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: [{ demo: <HelpersPreview /> }],
}
