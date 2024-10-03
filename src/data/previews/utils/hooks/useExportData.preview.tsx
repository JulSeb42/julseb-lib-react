import { useExportData, Flexbox, Button } from "../../../../lib"

export const PreviewUseExportData = () => {
    const headers: Array<string> = [
        ...new Set(users.map(user => Object.keys(user)).flat()),
    ]

    const usersExport = users.map(user => {
        const { id, firstName, lastName, facebook, twitter } = user

        return [id, firstName, lastName, facebook, twitter].join(", ")
    })

    const { exportToCsv, exportToJson } = useExportData()

    return (
        <Flexbox gap="xs">
            <Button onClick={() => exportToCsv(usersExport, "Users", headers)}>
                Export to CSV ({users.length} rows)
            </Button>

            <Button onClick={() => exportToJson(users, "Users")}>
                Export to JSON ({users.length} rows)
            </Button>
        </Flexbox>
    )
}

type User = {
    id: number
    firstName: string
    lastName: string
    facebook: string
    twitter: string
}

const users: Array<User> = [
    {
        id: 1,
        firstName: "Anna",
        lastName: "Fali",
        facebook: "Anna Fali",
        twitter: "@anna.fali",
    },
    {
        id: 2,
        firstName: "Niek",
        lastName: "Bove",
        facebook: "Niek Bove",
        twitter: "@niek.bove",
    },
    {
        id: 3,
        firstName: "Lacara",
        lastName: "Jones",
        facebook: "Lacara Jones",
        twitter: "@lacara.jones",
    },
    {
        id: 4,
        firstName: "Pablo",
        lastName: "Cambeiro",
        facebook: "Pablo Cambeiro",
        twitter: "@pablo.cambeiro",
    },
    {
        id: 5,
        firstName: "Irene",
        lastName: "Sotelo",
        facebook: "Irene Sotelo",
        twitter: "@irene.sotelo",
    },
]
