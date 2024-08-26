/*=============================================== Flexbox component ===============================================*/

import { forwardRef } from "react"
import { StyledFlexbox } from "./styles"
import type { ILibFlexbox } from "./types"

/**
 * @description Returns a Flexbox component
 * @link https://documentation-components-react.vercel.app/layouts/flexbox
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
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
export const Flexbox = forwardRef<HTMLDivElement, ILibFlexbox>(
    (
        {
            "data-testid": testid,
            as,
            children,
            inline,
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            justifyItems,
            alignContent,
            gap,
            columnGap,
            rowGap,
            padding,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledFlexbox
                data-testid={testid}
                ref={ref}
                as={as}
                $inline={inline}
                $flexDirection={flexDirection}
                $flexWrap={flexWrap}
                $justifyContent={justifyContent}
                $alignItems={alignItems}
                $justifyItems={justifyItems}
                $alignContent={alignContent}
                $gap={gap}
                $columnGap={columnGap}
                $rowGap={rowGap}
                $padding={padding}
                {...rest}
            >
                {children}
            </StyledFlexbox>
        )
    }
)
