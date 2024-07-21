/*=============================================== PaginationPreview ===============================================*/

import {
    Card,
    Grid,
    Pagination,
    generateNumbers,
    usePaginatedData,
} from "../../../"
import type {} from "../../../types"
import type { ILibPagination } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const paginationPreview: ComponentPreview<ILibPagination> = {
    name: "Pagination",
    component: Pagination,
    category: "components",
    import: "Pagination",
    additionalImports: ["usePaginatedData"],
    optionalImports: ["PaginationButton"],
    propsImport: "ILibPagination",
    additionalTypeImports: [],
    extends: ["HTMLDivElement", "ILibFlexbox"],
    previews: [{ demo: <PaginationDemo /> }],
}

const arr: Array<{ name: string }> = generateNumbers(1, 100).map(n => ({
    name: `Hello ${n}`,
}))

function PaginationDemo() {
    const { paginatedData, totalPages } = usePaginatedData<{ name: string }>(
        arr
    )

    return (
        <>
            {paginatedData && (
                <Grid col={4} gap="s">
                    {paginatedData.map((item, i) => (
                        <Card
                            border={{ width: 1 }}
                            padding="xs"
                            borderRadius="m"
                            key={i}
                        >
                            {item.name}
                        </Card>
                    ))}
                </Grid>
            )}

            <Pagination
                data-testid="testid"
                className="className"
                totalPages={totalPages}
                accentColor="secondary"
                icons={{ previous: "arrow-left", next: "arrow-right" }}
            />
        </>
    )
}
