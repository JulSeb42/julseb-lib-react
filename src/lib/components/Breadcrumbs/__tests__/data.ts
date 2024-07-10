/*=============================================== Breadcrumbs data ===============================================*/

type BreadcrumbItem = {
    text: string
    to?: string
}

export const breadcrumbsItems: Array<BreadcrumbItem> = [
    {
        text: "Link",
        to: "/",
    },
    {
        text: "Link",
        to: "#",
    },
    {
        text: "Link",
        to: "#",
    },
    {
        text: "Active",
    },
]
