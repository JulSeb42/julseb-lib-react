/*=============================================== MixinsPreview ===============================================*/

import type { ComponentPreview } from "../../components"
import { allMixins } from "../../utils/all-mixins"
import { Table, capitalize, CodeContainer, uuid } from "../../../lib"

function MixinsPreview() {
    const headers = Object.keys(allMixins[0]).map(v => capitalize(v))
    const data = allMixins.map(mixin =>
        Object.values(mixin).map((v, i) =>
            i === Object.values(mixin).length - 1 ? (
                <CodeContainer
                    key={uuid()}
                    highlighterProps={{ language: "typescript" }}
                    copyButton={false}
                    color="white"
                    highlighterStyle={{ height: "100%" }}
                >
                    {`${v}${
                        v[0] !== "&" && v[v.length - 1] !== ";" ? ";" : ""
                    }`}
                </CodeContainer>
            ) : (
                v
            )
        )
    )

    return <Table headers={headers} data={data} vAlign="top" />
}

export const mixinsPreview: ComponentPreview<null> = {
    name: "Mixins",
    category: "utils",
    component: null,
    import: "Mixins",
    additionalImports: null,
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: [{ demo: <MixinsPreview /> }],
}
