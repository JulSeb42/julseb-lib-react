/*=============================================== Drawer component ===============================================*/

import { forwardRef, useEffect } from "react"
import classNames from "classnames"
import {
    enableScroll,
    disableScroll as disableScrollFn,
} from "@julseb-lib/utils"
import { useKeyPress } from "../../"
import { StyledDrawer, Overlay, DrawerContent } from "./styles"
import type { ILibDrawer } from "./types"

/**
 * @description Returns a Drawer component
 * @link https://documentation-components-react.vercel.app/components/drawer
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop isOpen: boolean
 * @prop setIsOpen: Dispatch<SetStateAction<boolean>>
 * @prop position?: "left" | "right"
 * @prop enableScrollingOpen?: boolean
 * @prop disableEsc?: boolean
 * @prop backgroundColor?: Any color from the library
 * @prop contentColor?: Any color from the library
 * @prop linksColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop width?: string | number
 * @prop zIndex?: number
 * @prop overlayColor?: Any color or overlay from the library
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 */
export const Drawer = forwardRef<HTMLDivElement, ILibDrawer>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            isOpen,
            setIsOpen,
            enableScrollingOpen,
            disableEsc,
            backgroundColor = "primary",
            contentColor = "background",
            linksColor = "background",
            gap = "s",
            width = "30vw",
            zIndex = 998,
            overlayColor = "black-80",
            position = "right",
            padding = "l",
            ...rest
        },
        ref
    ) => {
        useEffect(() => {
            if (isOpen && !enableScrollingOpen) disableScrollFn()
            else enableScroll()
        }, [isOpen])

        const handleClose = () => {
            setIsOpen(false)
            enableScroll()
        }

        useKeyPress("Escape", () => {
            if (!disableEsc && isOpen) handleClose()
        })

        return (
            <StyledDrawer
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, { Open: isOpen })}
                $zIndex={zIndex}
                {...rest}
            >
                <Overlay
                    data-testid={testid && `${testid}.Overlay`}
                    onClick={handleClose}
                    className={classNames(
                        { DrawerOverlay: className },
                        { Open: isOpen }
                    )}
                    $overlayColor={overlayColor}
                />

                <DrawerContent
                    data-testid={testid && `${testid}.Content`}
                    className={classNames(
                        { DrawerContent: className },
                        { Open: isOpen }
                    )}
                    $gap={gap}
                    $backgroundColor={backgroundColor}
                    $contentColor={contentColor}
                    $linksColor={linksColor}
                    $width={width}
                    $position={position}
                    $padding={padding}
                >
                    {children}
                </DrawerContent>
            </StyledDrawer>
        )
    }
)
