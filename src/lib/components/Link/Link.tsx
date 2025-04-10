import { forwardRef, type RefObject } from "react"
import { Link as RouterLink, NavLink } from "react-router-dom"
import type { ILibLink } from "./types"

/**
 * @description Returns a Link component
 * @link https://documentation-components-react.vercel.app/components/link
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export const Link = forwardRef<HTMLAnchorElement | HTMLButtonElement, ILibLink>(
    (
        {
            "data-testid": testid,
            isNavLink,
            to,
            href,
            onClick,
            blank,
            end,
            ...rest
        },
        ref
    ) => {
        if (onClick)
            return (
                <button
                    data-testid={testid}
                    ref={ref as RefObject<HTMLButtonElement>}
                    onClick={onClick}
                    {...rest}
                />
            )

        if (href)
            return (
                <a
                    data-testid={testid}
                    ref={ref as RefObject<HTMLAnchorElement>}
                    href={href}
                    target={blank ? "_blank" : undefined}
                    rel={blank ? "noreferrer noopener" : undefined}
                    {...rest}
                />
            )

        if (isNavLink && to)
            return (
                <NavLink
                    data-testid={testid}
                    ref={ref as RefObject<HTMLAnchorElement>}
                    to={to}
                    target={blank ? "_blank" : undefined}
                    rel={blank ? "noreferrer noopener" : undefined}
                    end={end}
                    {...rest}
                />
            )

        if (to)
            return (
                <RouterLink
                    data-testid={testid}
                    ref={ref as RefObject<HTMLAnchorElement>}
                    to={to}
                    target={blank ? "_blank" : undefined}
                    rel={blank ? "noreferrer noopener" : undefined}
                    {...rest}
                />
            )

        return null
    }
)
