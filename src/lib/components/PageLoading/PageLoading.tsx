/*=============================================== PageLoading component ===============================================*/

import { forwardRef, useEffect } from "react"
import { disableScroll } from "ts-utils-julseb"
import { Loader } from "../../"
import { StyledPageLoading } from "./styles"
import type { ILibPageLoading } from "./types"

/**
 * @description Returns a PageLoading component
 * @link https://documentation-components-react.vercel.app/components/page-loading
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop backgroundColor?: Any color from the library
 * @prop loaderColor?: Any color from the library
 * @prop loaderVariant?: 1 | 2 | 3 | 4
 * @prop stopScrolling?: boolean
 */

export const PageLoading = forwardRef<HTMLDivElement, ILibPageLoading>(
    (
        {
            "data-testid": testid,
            as,
            className,
            backgroundColor = "primary",
            loaderColor = "white",
            loaderVariant = 1,
            stopScrolling,
            ...rest
        },
        ref
    ) => {
        useEffect(() => {
            if (stopScrolling) disableScroll()
        }, [stopScrolling])

        const loaderProps = {
            "data-testid": testid && `${testid}.Loader`,
            size: 64,
            color: loaderColor
                ? loaderColor
                : backgroundColor === "white"
                ? "primary"
                : "background",
            className: className && "Loader",
            variant: loaderVariant,
        }

        return (
            <StyledPageLoading
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $backgroundColor={backgroundColor}
                {...rest}
            >
                <Loader {...(loaderProps as any)} />
            </StyledPageLoading>
        )
    }
)
