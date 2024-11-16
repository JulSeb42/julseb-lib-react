/*=============================================== Masonry component ===============================================*/

import { forwardRef, useEffect, useRef, useState, useCallback } from "react"
import { uuid } from "@julseb-lib/utils"
import { useMergeRefs } from "../../"
import { useEventListener, fillCols } from "./utils"
import { StyledMasonry, Col } from "./styles"
import type { ILibMasonry } from "./types"

/**
 * @description Returns a Masonry component
 * @link https://documentation-components-react.vercel.app/components/masonry
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop children?: Array<ReactNode>
 * @prop col?: number
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 */
export const Masonry = forwardRef<HTMLDivElement, ILibMasonry>(
    (
        {
            "data-testid": testid,
            as,
            children = [],
            col = 4,
            gap = "l",
            ...rest
        },
        ref
    ) => {
        const el = useRef<HTMLDivElement>(null)

        const [numCols, setNumCols] = useState(col)
        const cols = [...Array(col)].map(() => [])
        fillCols(children, cols)

        const resizeHandler = useCallback(
            () =>
                setNumCols(
                    Math.ceil(window.innerWidth / (window.innerWidth / numCols))
                ),
            [numCols]
        )

        useEffect(resizeHandler, [numCols, resizeHandler])

        useEventListener("resize", resizeHandler)

        return (
            <StyledMasonry
                data-testid={testid}
                as={as}
                ref={useMergeRefs([el, ref])}
                $gap={gap}
                {...rest}
            >
                {[...Array(numCols)].map((_, i) => (
                    <Col $gap={gap} key={uuid()}>
                        {cols[i]}
                    </Col>
                ))}
            </StyledMasonry>
        )
    }
)
