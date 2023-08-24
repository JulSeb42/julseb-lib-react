/*=============================================== Flexbox component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledFlexbox } from "./styles"
import type { FlexboxProps } from "./types"

export const Flexbox = forwardRef(
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
            ...rest
        }: FlexboxProps,
        ref?: ForwardedRef<HTMLDivElement>,
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
                {...rest}
            >
                {children}
            </StyledFlexbox>
        )
    },
)
