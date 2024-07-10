/*=============================================== Grid component ===============================================*/

import { forwardRef } from "react"
import { StyledGrid } from "./styles"
import type { GridProps } from "./types"

/**
 * @description Returns a Grid component
 * @link https://documentation-components-react.vercel.app/layouts/grid
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop inline?: boolean
 * @prop col?: number | string
 * @prop gap?: LibSpacers
 * @prop columnGap?: LibSpacers
 * @prop rowGap?: LibSpacers
 * @prop justifyItems?: JustifyItems
 * @prop alignItems?: AlignItems
 * @prop justifyContent?: JustifyContent
 * @prop alignContent?: AlignContent
 */

export const Grid = forwardRef<HTMLDivElement, GridProps>(
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
                {...rest}
            >
                {children}
            </StyledGrid>
        )
    }
)
