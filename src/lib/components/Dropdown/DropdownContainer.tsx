import { forwardRef } from "react"
import classNames from "classnames"
import { StyledDropdownContainer } from "./styles"
import type { ILibDropdownContainer } from "./types"

/**
 * @description Returns a DropdownContainer component
 * @link https://documentation-components-react.vercel.app/components/dropdown
 * @extends ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop isOpen: boolean
 * @prop inline?: boolean
 * @prop flexDirection?: CssFlexDirection
 * @prop flexWrap?: CssFlexWrap
 * @prop justifyContent?: CssJustifyContent
 * @prop alignItems?: CssAlignItems
 * @prop justifyItems?: CssJustifyItems
 * @prop alignContent?: CssAlignContent
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop columnGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop rowGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 */
export const DropdownContainer = forwardRef<
    HTMLDivElement,
    ILibDropdownContainer
>(({ isOpen, className, ...rest }, ref) => {
    return (
        <StyledDropdownContainer
            ref={ref}
            className={classNames(className, { Open: isOpen })}
            {...rest}
        />
    )
})
