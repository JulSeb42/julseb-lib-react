import { useRef, type FC, type ReactNode } from "react"
import classNames from "classnames"
import { uuid } from "@julseb-lib/utils"
import { useMaxWidth, useClickOutside } from "../../"
import { HeaderNavLink } from "./HeaderNavLink"
import { HeaderSearch } from "./HeaderSearch"
import { Nav } from "./styles"
import type { ILibHeaderNav } from "./subtypes"
import type { LibHeaderLink } from "../../types"

export const HeaderNav: FC<ILibHeaderNav> = ({
    "data-testid": testid,
    className,
    search,
    isOpen,
    children,
    links,
    headerHeight,
    variant,
    navMobileVariant,
    burgerPosition,
    burgerRef,
    handleClose,
    nav,
}) => {
    const isMobile = useMaxWidth(600)

    const el = useRef<HTMLDivElement>(null as any)
    useClickOutside(el, e => {
        if (!burgerRef?.current?.contains(e.target as any)) {
            handleClose()
        }
    })

    const valueArr = links ? links : (children as Array<ReactNode>)

    const searchHeight = isMobile && !!search ? 32 : 0

    const linksHeight = links
        ? links.length * 24 + ([...valueArr, searchHeight].length - 1) * 12
        : 56

    const navHeight = searchHeight + linksHeight

    return (
        <Nav
            data-testid={testid && `${testid}.HeaderNav`}
            ref={el}
            className={classNames({ HeaderNav: className }, { Open: isOpen })}
            $headerHeight={headerHeight}
            $variant={variant}
            $burgerPosition={burgerPosition}
            $navMobileVariant={navMobileVariant}
            $navHeight={navHeight}
        >
            {isMobile && search && (
                <HeaderSearch
                    {...search}
                    data-testid={testid}
                    className={className}
                    handleClose={handleClose}
                />
            )}

            {links &&
                links.map(link => (
                    <HeaderNavLink
                        data-testid={testid}
                        className={className}
                        link={link as LibHeaderLink | JSX.Element}
                        key={uuid()}
                    />
                ))}

            {children && children}

            {nav && nav}
        </Nav>
    )
}
