/*=============================================== SpacersPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import { StylesCard } from "../../../components"
import { Grid } from "../../../lib"
import { allSpacers } from "../.."

const SpacersPreview = () => {
    return (
        <Grid col={2} gap="m">
            {allSpacers.map(s => (
                <StylesCard variable={s} type="spacer" key={s.name} />
            ))}
        </Grid>
    )
}

export const spacersPreview: ComponentPreview<null> = {
    name: "Spacers",
    category: "styles",
    component: null,
    import: "SPACERS",
    additionalImports: null,
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: [{ demo: <SpacersPreview /> }],
}
