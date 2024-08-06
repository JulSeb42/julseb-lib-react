/*=============================================== Breadcrumbs sub components types ===============================================*/

import type { LibBreadcrumbItem } from "../../types"
import type { ILibBreadcrumbs } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN BREADCRUMBS COMPONENTS

// "data-testid": string | undefined
// className: string | undefined
// item: LibBreadcrumbItem
// i: number

export interface ILibBreadcrumbItem
    extends Pick<ILibBreadcrumbs, "data-testid" | "className"> {
    item: LibBreadcrumbItem
    index: number
}
