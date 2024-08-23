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
