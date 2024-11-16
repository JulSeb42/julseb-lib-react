/*=============================================== IconMenuItem ===============================================*/

import { forwardRef } from "react"
import { StyledButtonIcon } from "./styles"
import type { ILibIconMenuItem } from "./types"

/**
 * @description Returns a IconMenuItem component
 * @link https://documentation-components-react.vercel.app/components/icon-menu
 * @extends HTMLButtonElement & HTMLAnchorElement & ILibButtonIcon
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
 * @prop label: string
 * @prop indexPosition: number
 * @prop isOpen: boolean
 * @prop icon: string | JSX.Element
 * @prop iconSize?: number
 * @prop direction?: "left" | "up" | "right" | "down"
 * @prop variant?: "plain" | "transparent" | "ghost"
 * @prop iconBaseUrl?: string
 * @prop onClick?: void => only if `to` or `href` are not defined
 * @prop disabled?: boolean => only if `onClick` is defined
 * @prop to?: string => only if `onClick` and `href` are not defined
 * @prop href?: string => only if `onClick` and `to` are not defined
 * @prop blank?: boolean => only if `to` or `href` are defined
 * @prop icon: string | JSX.Element
 * @prop iconSize?: number
 * @prop iconBaseUrl?: string
 * @prop size?: number
 * @prop shadow?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | { default: "xxl" | "xl" | "l" | "m" | "s" | "xs"; hover: "xxl" | "xl" | "l" | "m" | "s" | "xs"; active: "xxl" | "xl" | "l" | "m" | "s" | "xs" }
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop variant?: "plain" | "ghost" | "transparent"
 * @prop showBackgroundHover?: boolean => only if variant is set to transparent
 * @prop isLoading?: boolean
 * @prop loaderVariant?: 1 | 2 | 3 | 4 => only if isLoading is defined
 * @prop loaderBorderWidth?: number => only if loaderVariant is set to 1 | 2 | 3
 * @prop tooltip?: string
 * @prop showTooltip?: boolean | { position?: "top" | "bottom" | "left" | "right"; offset?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; backgroundColor?: Any color from the library; textColor?: Any color from the library; hideArrow?: boolean } => only if tooltip is defined
 * @prop containerStyle?: CSSProperties => only if tooltip is defined
 */
export const IconMenuItem = forwardRef<
    HTMLButtonElement & HTMLAnchorElement,
    ILibIconMenuItem
>(
    (
        {
            indexPosition,
            direction,
            isOpen,
            variant = "ghost",
            style,
            iconBaseUrl,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledButtonIcon
                ref={ref}
                type="button"
                variant={variant}
                iconBaseUrl={iconBaseUrl}
                $direction={direction}
                containerStyle={{
                    ["--button-position" as any]: indexPosition,
                    ...style,
                }}
                {...rest}
            />
        )
    }
)
