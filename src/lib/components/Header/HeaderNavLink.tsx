// @ts-nocheck
/*=============================================== HeaderNavLink ===============================================*/

import { isValidElement } from "react"
import { NavLink } from "react-router-dom"
import type { ILibHeaderNavLink } from "./subtypes"

export const HeaderNavLink = ({
    "data-testid": testid,
    link,
    className,
}: ILibHeaderNavLink) => {
    if (isValidElement(link)) return link

    if (link.to)
        return (
            <NavLink
                data-testid={
                    link["data-testid"] || (testid && `${testid}.NavLink`)
                }
                className={link.className || (className && "NavLink")}
                id={link.id}
                ref={link.ref}
                to={link.to}
                end={link.end}
                target={link.blank ? "_blank" : undefined}
                rel={link.blank ? "noreferrer noopener" : undefined}
            >
                {link.text}
            </NavLink>
        )

    if (link.href)
        return (
            <a
                data-testid={
                    link["data-testid"] || (testid && `${testid}.NavLink`)
                }
                className={link.className || (className && "NavLink")}
                id={link.id}
                ref={link.ref}
                href={link.href}
                target={link.blank ? "_blank" : undefined}
                rel={link.blank ? "noreferrer noopener" : undefined}
            >
                {link.text}
            </a>
        )

    if (link.onClick)
        return (
            <button
                data-testid={
                    link["data-testid"] || (testid && `${testid}.NavButton`)
                }
                className={link.className || (className && "NavButton")}
                id={link.id}
                ref={link.ref}
                onClick={link.onClick}
                disabled={link.disabled}
            >
                {link.text}
            </button>
        )

    return null
}
