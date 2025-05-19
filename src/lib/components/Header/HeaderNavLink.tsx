// @ts-nocheck

import { isValidElement, type FC } from "react"
import { Link } from "../../"
import type { ILibHeaderNavLink } from "./subtypes"

export const HeaderNavLink: FC<ILibHeaderNavLink> = ({
    "data-testid": testid,
    link,
    className,
}) => {
    if (isValidElement(link)) return link

    return (
        <Link
            data-testid={link["data-testid"] || (testid && `${testid}.NavLink`)}
            className={link.className || (className && "NavLink")}
            id={link.id}
            ref={link.ref}
            end={link.end}
            blank={link.blank}
            to={link.to}
            href={link.href}
            onClick={link.onClick}
            disabled={link.disabled}
            isNavLink
        >
            {link.text}
        </Link>
    )
}
