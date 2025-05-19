import type { FC, Ref } from "react"
import { Link as RouterLink, NavLink } from "react-router-dom"
import type { ILibLink } from "./types"

/**
 * Link component for rendering a button, anchor, NavLink, or RouterLink based on provided props.
 *
 * @component
 * @extends HTMLButtonElement | HTMLAnchorElement
 * @param {Object} props - Link props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {Ref<HTMLButtonElement | HTMLAnchorElement>} [props.ref] - Ref forwarded to the root element.
 * @param {boolean} [props.isNavLink] - Render as a NavLink (from react-router-dom).
 * @param {string} [props.to] - Target path for RouterLink or NavLink.
 * @param {string} [props.href] - Href for anchor element.
 * @param {() => void} [props.onClick] - Click handler for button element.
 * @param {boolean} [props.blank] - Open link in new tab.
 * @param {boolean} [props.end] - NavLink end prop.
 * @param {any} [props.rest] - Additional props passed to the rendered element.
 * @returns {JSX.Element|null} The rendered Link component.
 *
 * @see https://documentation-components-react.vercel.app/components/link
 * @example
 * <Link to="/about" isNavLink>About</Link>
 * <Link href="https://example.com" blank>External</Link>
 * <Link onClick={handleClick}>Button</Link>
 */
export const Link: FC<ILibLink> = ({
    "data-testid": testid,
    as,
    ref,
    isNavLink,
    to,
    href,
    onClick,
    blank,
    end,
    ...rest
}) => {
    if (onClick)
        return (
            <button
                data-testid={testid}
                ref={ref as Ref<HTMLButtonElement>}
                onClick={onClick}
                {...rest}
            />
        )

    if (href)
        return (
            <a
                data-testid={testid}
                ref={ref as Ref<HTMLAnchorElement>}
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
                ref={ref as Ref<HTMLAnchorElement>}
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
                ref={ref as Ref<HTMLAnchorElement>}
                to={to}
                target={blank ? "_blank" : undefined}
                rel={blank ? "noreferrer noopener" : undefined}
                {...rest}
            />
        )

    return null
}
