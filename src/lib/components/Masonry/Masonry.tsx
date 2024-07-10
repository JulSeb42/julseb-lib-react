/*=============================================== Masonry component ===============================================*/

import {
    forwardRef,
    useEffect,
    useRef,
    useState,
    type ReactNode,
    useCallback,
} from "react"
import { uuid } from "ts-utils-julseb"
import { useMergeRefs } from "../../"
import { StyledMasonry, Col } from "./styles"
import type { MasonryProps } from "./types"

/**
 * @description Returns a Masonry component
 * @link https://documentation-components-react.vercel.app/components/masonry
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop col?: number
 * @prop gap?: LibSpacers
 */

function useEventListener(
    eventNames: keyof GlobalEventHandlersEventMap,
    handler: () => void,
    element = globalThis
) {
    const savedHandler = useRef<() => void>()
    useEffect(() => (savedHandler.current = handler), [handler])

    useEffect(() => {
        if (!element.addEventListener) return

        const listener = (e: EventListenerOrEventListenerObject) =>
            // @ts-expect-error
            savedHandler.current(e)

        // @ts-expect-error
        for (const e of eventNames) element.addEventListener(e, listener)

        return () => {
            // @ts-expect-error
            for (const e of eventNames) element.removeEventListener(e, listener)
        }
    }, [element, eventNames])
}

function fillCols(children: Array<ReactNode>, cols: Array<any>) {
    children.forEach((child, i) => cols[i % cols.length].push(child))
}

export const Ab = forwardRef<HTMLDivElement, MasonryProps>(
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

export function Masonry({
    "data-testid": testid,
    as,
    children = [],
    col = 4,
    gap = "l",
    ...rest
}: MasonryProps) {
    const ref = useRef<HTMLDivElement>(null)

    const [numCols, setNumCols] = useState(col)
    const cols = [...Array(col)].map(() => [])
    fillCols(children, cols)

    const resizeHandler = () =>
        setNumCols(Math.ceil(window.innerWidth / (window.innerWidth / numCols)))

    useEffect(resizeHandler, [numCols])
    useEventListener("resize", resizeHandler)

    return (
        <StyledMasonry
            data-testid={testid}
            as={as}
            ref={ref}
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
