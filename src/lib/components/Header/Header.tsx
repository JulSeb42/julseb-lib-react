/*=============================================== Header component ===============================================*/

import { forwardRef, useState, useEffect, useRef } from "react"
import { useMaxWidth } from "../../"
import { HeaderBurger } from "./HeaderBurger"
import { HeaderSearch } from "./HeaderSearch"
import { HeaderNav } from "./HeaderNav"
import { HeaderLogo } from "./HeaderLogo"
import { StyledHeader, Overlay } from "./styles"
import type { ILibHeader } from "./types"

/**
 * @description Returns a Header component
 * @link https://documentation-components-react.vercel.app/components/header
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export const Header = forwardRef<HTMLDivElement, ILibHeader>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            logo,
            variant = "primary",
            burgerPosition = "right",
            navDesktopVariant = "right",
            navMobileVariant = "drawer",
            search,
            position = "relative",
            hideOnScroll,
            links,
            ...rest
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(false)

        const isMobile = useMaxWidth(600)

        const logoObj = typeof logo === "object" ? logo : undefined

        const logoHeight = logoObj?.height || 30
        const burgerHeight = 32
        const logoTextHeight = 35
        const heightsArr = [logoHeight, burgerHeight, logoTextHeight].sort()
        const valueForHeight = heightsArr[heightsArr.length - 1]

        const headerHeight = valueForHeight + 16 * 2

        const [isHidden, setIsHidden] = useState(false)
        const hidePosition =
            typeof hideOnScroll === "boolean" ? 400 : hideOnScroll

        useEffect(() => {
            if (hidePosition) {
                if (window.pageYOffset >= hidePosition) {
                    setIsHidden(true)
                } else {
                    setIsHidden(false)
                }

                window.addEventListener("scroll", () => {
                    if (window.pageYOffset >= hidePosition) {
                        setIsHidden(true)
                    } else {
                        setIsHidden(false)
                    }
                })
            }
        }, [hidePosition])

        const navRef = useRef<HTMLButtonElement>(null)

        const burgerProps = {
            "data-testid": testid && `${testid}.HeaderBurger`,
            className,
            isOpen,
            setIsOpen,
            navMobileVariant,
            headerVariant: variant,
            ref: navRef,
        }

        const searchProps = {
            "data-testid": testid && `${testid}.HeaderSearch`,
            className,
            withSearch: !!search,
            maxWidth: search?.maxWidth || 400,
            icon: search?.icon,
            iconClear: search?.iconClear,
            iconSize: search?.iconSize,
            iconClearSize: search?.iconClearSize,
            placeholder: search?.placeholder,
            inputBackground: search?.inputBackground,
            inputVariant: search?.inputVariant,
            keyboardShortcut: search?.keyboardShortcut,
            showKeys: search?.showKeys,
            pathName: search?.pathname,
            queries: search?.queries,
            setIsOpen,
        }

        const navProps = {
            "data-testid": testid && `${testid}.HeaderNav`,
            className,
            withSearch: !!search,
            searchProps,
            isOpen,
            setIsOpen,
            children,
            links,
            headerHeight,
            headerVariant: variant,
            positionVariant: navDesktopVariant,
            mobileVariant: navMobileVariant,
            navRef,
        }

        return (
            <StyledHeader
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $isHidden={isHidden}
                $isOpen={isOpen}
                $burgerPosition={burgerPosition}
                $headerHeight={headerHeight}
                $position={position}
                $variant={variant}
                {...rest}
            >
                {burgerPosition === "left" && <HeaderBurger {...burgerProps} />}

                <HeaderLogo
                    data-testid={testid}
                    className={className}
                    to={logoObj?.to}
                    href={logoObj?.href}
                    img={logoObj?.img}
                    alt={logoObj?.alt}
                    width={logoObj?.width}
                    height={logoObj?.height}
                >
                    {typeof logo === "object" ? logo.text : logo}
                </HeaderLogo>

                {navDesktopVariant === "left" && <HeaderNav {...navProps} />}

                {!isMobile && navDesktopVariant === "right" && (
                    <HeaderSearch {...searchProps} />
                )}

                {burgerPosition === "right" && (
                    <HeaderBurger {...burgerProps} />
                )}

                {navDesktopVariant === "right" && <HeaderNav {...navProps} />}

                {isMobile && navMobileVariant === "drawer" && (
                    <Overlay
                        onClick={() => setIsOpen(false)}
                        $isVisible={isOpen}
                    />
                )}

                {!isMobile && navDesktopVariant === "left" && (
                    <HeaderSearch {...searchProps} />
                )}
            </StyledHeader>
        )
    }
)
