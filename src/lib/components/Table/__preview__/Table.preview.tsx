/*=============================================== TablePreview ===============================================*/

import { Table } from "../../../"
import { toTitleCase } from "ts-utils-julseb"
import type {} from "../../../types"
import type { ILibTable } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

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

const headers: Array<string | JSX.Element> = [
    ...new Set(
        users
            .map(user => Object.keys(user))
            .flat()
            .map(key => toTitleCase(key))
    ),
]

const data: Array<Array<string | JSX.Element>> = users.map(user =>
    Object.values(user).map((v, i) =>
        i === Object.values(user).length - 1
            ? `http://twitter.com/${v}`
            : v.toString()
    )
)

export const tablePreview: ComponentPreview<ILibTable> = {
    name: "Table",
    component: Table,
    category: "components",
    import: "Table",
    additionalImports: [],
    optionalImports: [],
    propsImport: "ILibTable",
    additionalTypeImports: [],
    extends: ["HTMLTableElement"],
    previews: [
        { previewTitle: "Default", props: { headers, data, linkify: true } },
        {
            previewTitle: "Border bottom",
            props: { headers, data, variant: "border-bottom" },
        },
        {
            previewTitle: "Stripped",
            props: { headers, data, variant: "stripped" },
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
