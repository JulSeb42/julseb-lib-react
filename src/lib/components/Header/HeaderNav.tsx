/*=============================================== HeaderNav ===============================================*/

import { useRef, type RefObject, type ReactNode } from "react"
import classNames from "classnames"
import { uuid } from "ts-utils-julseb"
import { useMaxWidth, useClickOutside } from "../../"
import { HeaderNavLink } from "./HeaderNavLink"
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

    const valueArr = links ? links : (children as Array<ReactNode>)

    const searchHeight = isMobile && searchProps?.withSearch ? 32 : 0

    const linksHeight =
        valueArr.length * 24 + ([...valueArr, searchHeight].length - 1) * 12

    const navHeight = searchHeight + linksHeight
    console.log({ navHeight })

    return (
        <Nav
            data-testid={testid}
            ref={el}
            className={classNames({ HeaderNav: className }, { Open: isOpen })}
            $headerHeight={headerHeight}
            $headerVariant={headerVariant}
            $positionVariant={positionVariant}
            $mobileVariant={mobileVariant}
            $navHeight={navHeight}
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
                    <HeaderNavLink
                        data-testid={testid}
                        className={className}
                        link={link}
                        key={uuid()}
                    />
                ))}

            {children && children}
        </Nav>
    )
}
