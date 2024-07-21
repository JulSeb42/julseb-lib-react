/*=============================================== PaginatorPreview ===============================================*/

import {
    Paginator,
    generateNumbers,
    usePaginatedData,
    Card,
    Grid,
} from "../../../"
import type {} from "../../../types"
import type { ILibPaginator } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const paginatorPreview: ComponentPreview<ILibPaginator> = {
    name: "Paginator",
    component: Paginator,
    category: "components",
    import: "Paginator",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibPaginator",
    additionalTypeImports: [],
    extends: ["HTMLDivElement", "ILibFlexbox"],
    previews: [{ demo: <PaginatorDemo /> }],
}

const arr: Array<{ name: string }> = generateNumbers(1, 100).map(n => ({
    name: `Hello ${n}`,
}))

function PaginatorDemo() {
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

            <Paginator
                totalPages={totalPages}
                accentColor="success"
                data-testid="testid"
                className="className"
            />
        </>
    )
}
