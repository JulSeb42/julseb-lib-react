import { generateNumbers } from "@julseb-lib/utils"
import { Paginator, usePaginatedData, Grid, Card } from "../../../"

const arr: Array<{ name: string }> = generateNumbers(1, 100).map(n => ({
    name: `Hello ${n}`,
}))

export const Preview = () => {
    const { paginatedData, totalPages } = usePaginatedData<{ name: string }>(
        arr
    )

    return (
        <>
            {paginatedData && (
                <Grid col={4} gap="s">
                    {paginatedData.map((item, i) => (
                        <Card
                            data-testid="card"
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
                data-testid="testid"
                className="className"
            />
        </>
    )
}

export const PreviewNotEditable = () => {
    const { paginatedData, totalPages } = usePaginatedData<{ name: string }>(
        arr
    )

    return (
        <>
            {paginatedData && (
                <Grid col={4} gap="s">
                    {paginatedData.map((item, i) => (
                        <Card
                            data-testid="card"
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
                data-testid="testid"
                className="className"
                texts={{ page: "A", of: "b" }}
                inputNotEditable
            />
        </>
    )
}

export const PreviewColor = () => {
    const { paginatedData, totalPages } = usePaginatedData<{ name: string }>(
        arr
    )

    return (
        <>
            {paginatedData && (
                <Grid col={4} gap="s">
                    {paginatedData.map((item, i) => (
                        <Card
                            data-testid="card"
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
                data-testid="testid"
                className="className"
                accentColor="secondary"
            />
        </>
    )
}
