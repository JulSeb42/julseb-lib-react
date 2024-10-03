/*=============================================== BreadcrumbItem ===============================================*/

import { Link } from "react-router-dom"
import { uuid } from "@julseb-lib/utils"
import type { ILibBreadcrumbItem } from "./subtypes"

export const BreadcrumbItem = ({
    "data-testid": testid,
    className,
    item,
    index,
}: ILibBreadcrumbItem) => {
    if (item.to)
        return (
            <Link
                to={item.to}
                data-testid={
                    item["data-testid"] || (testid && `${testid}.Link.${index}`)
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
                item["data-testid"] || (testid && `${testid}.Text.${index}`)
            }
            className={item.className || (className && "Text")}
            id={item.id}
            ref={item.ref}
        >
            {item.text}
        </span>
    )
}
