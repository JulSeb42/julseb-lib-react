/*=============================================== Grid component ===============================================*/

import { forwardRef } from "react"
import { StyledGrid } from "./styles"
import type { ILibGrid } from "./types"

/**
 * @description Returns a Grid component
 * @link https://documentation-components-react.vercel.app/layouts/grid
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop inline?: boolean
 * @prop col?: number | string
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop columnGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop rowGap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop justifyItems?: CssJustifyItems
 * @prop alignItems?: CssAlignItems
 * @prop justifyContent?: CssJustifyContent
 * @prop alignContent?: CssAlignContent
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 */
export const Grid = forwardRef<HTMLDivElement, ILibGrid>(
    (
        {
            "data-testid": testid,
            as,
            children,
            inline,
            col,
            gap,
            columnGap,
            rowGap,
            justifyItems,
            alignItems,
            justifyContent,
            alignContent,
            padding,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledGrid
                data-testid={testid}
                ref={ref}
                as={as}
                $inline={inline}
                $col={col}
                $gap={gap}
                $columnGap={columnGap}
                $rowGap={rowGap}
                $justifyItems={justifyItems}
                $alignItems={alignItems}
                $justifyContent={justifyContent}
                $alignContent={alignContent}
                $padding={padding}
                {...rest}
            >
                {children}
            </StyledGrid>
        )
    }
)
