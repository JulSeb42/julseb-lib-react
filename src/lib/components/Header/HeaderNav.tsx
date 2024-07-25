/*=============================================== HeaderNav ===============================================*/

import { Fragment, useRef, type RefObject } from "react"
import { NavLink } from "react-router-dom"
import { uuid } from "ts-utils-julseb"
import { useMaxWidth, useClickOutside } from "../../"
import type {
    DispatchState,
    ReactChildren,
    LibHeaderLink,
    LibHeaderVariant,
    LibNavMenuVariant,
    LibNavMobileVariant,
} from "../../types"
import { HeaderSearch, type ILibHeaderSearch } from "./HeaderSearch"
import { Nav } from "./styles"

interface ILibHeaderNav {
    "data-testid": string | undefined
    className: string | undefined
    searchProps: ILibHeaderSearch | undefined
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
    children: ReactChildren | undefined
    links: Array<LibHeaderLink> | undefined
    headerHeight: number
    headerVariant: LibHeaderVariant
    positionVariant: LibNavMenuVariant
    mobileVariant: LibNavMobileVariant
    navRef: RefObject<HTMLButtonElement>
}

export function HeaderNav({
    "data-testid": testid,
    className,
    searchProps,
    isOpen,
    setIsOpen,
    children,
    links,
    headerHeight,
    headerVariant,
    positionVariant,
    mobileVariant,
    navRef,
}: ILibHeaderNav) {
    const isMobile = useMaxWidth(600)

    const el = useRef<HTMLDivElement>(null)
    useClickOutside(el, e => {
        if (!navRef?.current?.contains(e.target as any)) {
            setIsOpen(false)
        }
    })

    return (
        <Nav
            data-testid={testid}
            ref={el}
            className={className && "HeaderNav"}
            $isOpen={isOpen}
            $headerHeight={headerHeight}
            $headerVariant={headerVariant}
            $positionVariant={positionVariant}
            $mobileVariant={mobileVariant}
        >
            {isMobile && searchProps?.withSearch && (
                <HeaderSearch
                    {...searchProps}
                    data-testid={testid}
                    className={className}
                    withSearch={searchProps.withSearch}
                />
            )}

            {links &&
                links.map(link => (
                    <Fragment key={uuid()}>
                        {link.to ? (
                            <NavLink
                                data-testid={testid && `${testid}.NavLink`}
                                className={className && "NavLink"}
                                to={link.to}
                                end={link.end}
                                target={link.blank ? "_blank" : undefined}
                                rel={
                                    link.blank
                                        ? "noreferrer noopener"
                                        : undefined
                                }
                            >
                                {link.text}
                            </NavLink>
                        ) : link.onClick ? (
                            <button
                                data-testid={testid && `${testid}.NavButton`}
                                className={className && "NavButton"}
                                onClick={link.onClick}
                                disabled={link.disabled}
                            >
                                {link.text}
                            </button>
                        ) : link.href ? (
                            <a
                                data-testid={testid && `${testid}.NavLink`}
                                className={className && "NavLink"}
                                href={link.href}
                                target={link.blank ? "_blank" : undefined}
                                rel={
                                    link.blank
                                        ? "noreferrer noopener"
                                        : undefined
                                }
                            >
                                {link.text}
                            </a>
                        ) : null}
                    </Fragment>
                ))}

            {children && children}
        </Nav>
    )
}
