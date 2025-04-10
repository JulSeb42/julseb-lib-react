import { forwardRef } from "react"
import { StyledFullBleed } from "./styles"
import type { ILibFullBleed } from "./types"

/**
 * @description Returns a FullBleed component
 * @link https://documentation-components-react.vercel.app/components/full-bleed
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop height?: number | string
 * @prop aspectRatio?: string
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 */
export const FullBleed = forwardRef<HTMLDivElement, ILibFullBleed>(
    (
        {
            "data-testid": testid,
            as,
            children,
            height,
            aspectRatio,
            padding,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledFullBleed
                data-testid={testid}
                ref={ref}
                as={as}
                $height={height}
                $aspectRatio={aspectRatio}
                $padding={padding}
                {...rest}
            >
                {children}
            </StyledFullBleed>
        )
    }
)
