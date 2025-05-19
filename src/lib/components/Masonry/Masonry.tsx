import { useEffect, useRef, useState, useCallback, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { useMergeRefs } from "../../"
import { useEventListener, fillCols } from "./utils"
import { StyledMasonry, Col } from "./styles"
import type { ILibMasonry } from "./types"

/**
 * Masonry component for rendering children in a responsive masonry grid layout with configurable columns and gap.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Masonry props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {ElementType} [props.as] - Custom element type to render as.
 *  * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 *  * @param {ReactNode[]} [props.children] - Elements to display in the masonry grid.
 * @param {number} [props.col=4] - Number of columns in the masonry layout.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="l"] - Gap between columns and items.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Masonry component.
 *
 * @see https://documentation-components-react.vercel.app/components/masonry
 * @example
 * <Masonry col={3} gap="m">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Masonry>
 */
export const Masonry: FC<ILibMasonry> = ({
    "data-testid": testid,
    ref,
    as,
    children = [],
    col = 4,
    gap = "l",
    ...rest
}) => {
    const el = useRef<HTMLDivElement>(null as any)

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
