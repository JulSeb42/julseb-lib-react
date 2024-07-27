/*=============================================== BreadcrumbItem ===============================================*/

import { Link } from "react-router-dom"
import { uuid } from "ts-utils-julseb"
import type { LibBreadcrumbItem } from "../../types"

interface ILibBreadcrumbItem {
    "data-testid": string | undefined
    className: string | undefined
    item: LibBreadcrumbItem
    i: number
}

export function BreadcrumbItem({
    "data-testid": testid,
    className,
    item,
    i,
}: ILibBreadcrumbItem) {
    if (item.to)
        return (
            <Link
                to={item.to}
                data-testid={
                    item["data-testid"] || (testid && `${testid}.Link.${i}`)
                }
                className={item.className || (className && "Link")}
                id={item.id}
                ref={item.ref}
                key={uuid()}
            >
                {item.text}
            </Link>
        )

    return (
        <span
            key={uuid()}
            data-testid={
                item["data-testid"] || (testid && `${testid}.Text.${i}`)
            }
            className={item.className || (className && "Text")}
            id={item.id}
            ref={item.ref}
        >
            {item.text}
        </span>
    )
}
