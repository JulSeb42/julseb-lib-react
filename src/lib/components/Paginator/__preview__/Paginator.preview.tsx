/*=============================================== PaginatorPreview ===============================================*/

import {
    Paginator,
    generateNumbers,
    usePaginatedData,
    Card,
    Grid,
} from "../../../"
import type { ILibPaginator } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const arr: Array<{ name: string }> = generateNumbers(1, 100).map(n => ({
    name: `Hello ${n}`,
}))

const PaginatorDemo = () => {
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

export const paginatorPreview: ComponentPreview<ILibPaginator> = {
    name: "Paginator",
    component: Paginator,
    category: "components",
    import: "Paginator",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibPaginator",
    additionalTypeImports: null,
    extends: ["HTMLDivElement", "ILibFlexbox"],
    previews: [{ demo: <PaginatorDemo /> }],
}
