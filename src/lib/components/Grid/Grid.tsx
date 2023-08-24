/*=============================================== Grid component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledGrid } from "./styles"
import type { GridProps } from "./types"

export const Grid = forwardRef(
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
        }: GridProps,
        ref?: ForwardedRef<HTMLDivElement>,
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
    },
)
