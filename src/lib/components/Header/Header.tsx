/*=============================================== Header component ===============================================*/

import { forwardRef, useState, useEffect, useRef, type RefObject } from "react"
import classNames from "classnames"
import { enableScroll, disableScroll } from "ts-utils-julseb"
import { useMaxWidth } from "../../"
import { HeaderBurger } from "./HeaderBurger"
import { HeaderSearch } from "./HeaderSearch"
import { HeaderNav } from "./HeaderNav"
import { HeaderLogo } from "./HeaderLogo"
import { StyledHeader, Overlay } from "./styles"
import type { ILibHeader } from "./types"
import type {
    ILibHeaderNav,
    ILibHeaderBurger,
    ILibHeaderSearch,
} from "./sub-types"

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
            enableScrollingOpen,
            ...rest
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(false)

        const handleOpen = () => {
            if (!enableScrollingOpen) disableScroll()
            setIsOpen(true)
        }

        const handleClose = () => {
            if (!enableScrollingOpen) enableScroll()
            setTimeout(() => setIsOpen(false), 10)
        }

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

        const burgerRef = useRef<HTMLButtonElement>(null)

        const burgerProps: ILibHeaderBurger & {
            ref: RefObject<HTMLButtonElement>
        } = {
            "data-testid": testid,
            className,
            isOpen,
            navMobileVariant,
            variant,
            ref: burgerRef,
            handleOpen,
            handleClose,
        }

        const navProps: ILibHeaderNav = {
            "data-testid": testid,
            className,
            search,
            isOpen,
            handleClose,
            links,
            children,
            headerHeight,
            variant,
            navMobileVariant,
            burgerPosition,
            burgerRef,
        }

        const searchProps: ILibHeaderSearch = {
            "data-testid": testid,
            className,
            search,
            handleClose,
        }

        return (
            <StyledHeader
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(
                    className,
                    { Hidden: isHidden },
                    { Open: isOpen }
                )}
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
                    logo={logo}
                    isOpen={isOpen}
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
                        className={classNames(
                            { HeaderOverlay: className },
                            { Visible: isOpen }
                        )}
                    />
                )}

                {!isMobile && navDesktopVariant === "left" && (
                    <HeaderSearch {...searchProps} />
                )}
            </StyledHeader>
        )
    }
)
