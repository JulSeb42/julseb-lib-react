/*=============================================== TruncatePreview ===============================================*/

import styled from "styled-components"
import { Truncate, SPACERS, RADIUSES, Tag } from "../../../"
import type { ILibTruncate } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

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

const StyledTruncate = styled(Truncate)`
    max-width: 400px;
    overflow-x: scroll;
    background-color: ${({ theme }) => theme.GRAY_100};
    padding: ${SPACERS.XS};
    border-radius: ${RADIUSES.M};
`

function TruncateDemo() {
    const names = [
        "Julien",
        "Sile",
        "Max",
        "Maud",
        "Mel",
        "Michael",
        "Yan",
        "Amy",
        "Juliette",
        "Jeff",
    ]

    return (
        <>
            <p>{names?.length} names</p>

            <StyledTruncate>
                {names.map((name, i) => (
                    <Tag
                        borderRadius="round"
                        padding={{ topBottom: "xxs", leftRight: "s" }}
                        key={i}
                    >
                        {name}
                    </Tag>
                ))}
            </StyledTruncate>
        </>
    )
}
