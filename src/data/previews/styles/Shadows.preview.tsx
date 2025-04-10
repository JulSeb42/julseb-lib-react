import type { ComponentPreview } from "../../components"
import { StylesCard } from "../../../components"
import { Grid } from "../../../lib"
import { allShadows } from "../.."

const ShadowsPreview = () => {
    return (
        <Grid col={2} gap="m">
            {allShadows.map(shadow => (
                <StylesCard variable={shadow} type="shadow" key={shadow.css} />
            ))}
        </Grid>
    )
}

export const shadowsPreview: ComponentPreview<null> = {
    name: "Shadows",
    category: "styles",
    component: null,
    import: "SHADOWS",
    additionalImports: null,
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: [{ demo: <ShadowsPreview /> }],
}
