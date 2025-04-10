import { Table } from "../../../"
import { toTitleCase } from "@julseb-lib/utils"
import type { ILibTable } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import type { ReactChildren } from "../../../types"

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

const headers: Array<ReactChildren> = [
    ...new Set(
        users
            .map(user => Object.keys(user))
            .flat()
            .map(key => toTitleCase(key))
    ),
]

const data: Array<Array<ReactChildren>> = users.map(user =>
    Object.values(user).map((v, i) =>
        i === Object.values(user).length - 1 ? `http://twitter.com/${v}` : v
    )
)

export const tablePreview: ComponentPreview<ILibTable> = {
    name: "Table",
    component: Table,
    category: "components",
    import: "Table",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibTable",
    additionalTypeImports: null,
    extends: ["HTMLTableElement"],
    previews: [
        {
            previewTitle: "Default",
            props: {
                headers,
                data,
                linkify: true,
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Border bottom",
            props: {
                headers,
                data,
                variant: "border-bottom",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Stripped",
            props: {
                headers,
                data,
                variant: "stripped",
                "data-testid": "testid",
                className: "className",
            },
        },
    ],
}

type User = {
    id: number
    firstName: string
    lastName: string
    facebook: string
    twitter: string
}
