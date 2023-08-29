/*=============================================== Flexbox component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { StyledFlexbox } from "./styles"
import type { FlexboxProps } from "./types"

/**
 * @description Returns a Flexbox component
 * @link https://documentation-components-react.vercel.app/layouts/flexbox
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop inline?: boolean
 * @prop flexDirection?: FlexDirection
 * @prop flexWrap?: FlexWrap
 * @prop justifyContent?: JustifyContent
 * @prop alignItems?: AlignItems
 * @prop justifyItems?: JustifyItems
 * @prop alignContent?: AlignContent
 * @prop gap?: LibSpacers
 * @prop columnGap?: LibSpacers
 * @prop rowGap?: LibSpacers
 */

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
        ref?: ForwardedRef<HTMLDivElement>
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
    }
)
