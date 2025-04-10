import { generateNumbers } from "@julseb-lib/utils"
import { Card, Grid, Pagination, usePaginatedData } from "../../../"

const arr: Array<{ name: string }> = generateNumbers(1, 100).map(n => ({
    name: `Hello ${n}`,
}))

export const PaginationPreview = () => {
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
            />
        </>
    )
}

export const PaginationColor = () => {
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
                pageLimit={2}
                queries={[
                    ["order", "asc"],
                    ["query", "hello"],
                ]}
            />
        </>
    )
}
