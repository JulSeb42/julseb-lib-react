/*=============================================== Cover component ===============================================*/

import { forwardRef } from "react"
import { StyledCover, CoverImg, CoverContent } from "./styles"
import type { ILibCover } from "./types"

/**
 * @description Returns a Cover component
 * @link https://documentation-components-react.vercel.app/components/cover
 * @extends ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop img: string
 * @prop alt?: string
 * @prop overlay?: "black-50" | "black-80" | "white-50" | "white-80" | "gradient-black" | "gradient-white"
 * @prop height?: number | string
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 */
export const Cover = forwardRef<HTMLDivElement, ILibCover>(
    (
        {
            "data-testid": testid,
            as,
            children,
            img,
            alt,
            overlay,
            height = "100vh",
            gap = "s",
            flexDirection = "column",
            justifyContent = "center",
            alignItems = "center",
            padding = "xxl",
            className,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledCover
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $height={height}
                $overlay={overlay}
                {...rest}
            >
                <CoverImg
                    data-testid={testid && `${testid}.CoverImage`}
                    className={className && "CoverImage"}
                    src={img}
                    alt={alt}
                />

                <CoverContent
                    data-testid={testid && `${testid}.CoverContent`}
                    className={className && "CoverContent"}
                    flexDirection={flexDirection}
                    gap={gap}
                    justifyContent={justifyContent}
                    alignItems={alignItems}
                    $overlay={overlay}
                    $padding={padding}
                >
                    {children}
                </CoverContent>
            </StyledCover>
        )
    }
)
