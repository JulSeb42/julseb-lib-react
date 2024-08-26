/*=============================================== Truncate component ===============================================*/

import { forwardRef, useLayoutEffect, useState, useRef } from "react"
import { useMergeRefs } from "../../"
import { StyledTruncate, StyledTag } from "./styles"
import type { ILibTruncate } from "./types"

/**
 * @description Returns a Truncate component
 * @link https://documentation-components-react.vercel.app/components/truncate
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 */
export const Truncate = forwardRef<HTMLDivElement, ILibTruncate>(
    (
        { "data-testid": testid, as, className, children, gap = "xs", ...rest },
        ref
    ) => {
        const containerRef = useRef<HTMLDivElement>(null)
        const [invisibleNumber, setInvisibleNumber] = useState<number>(0)

        useLayoutEffect(() => {
            const truncate = () => {
                if (!containerRef.current) return

                const childNodes = Array.from(
                    containerRef.current.children
                ) as Array<HTMLElement>

                for (const node of childNodes) {
                    node.hidden = true
                }

                if (childNodes.length === 0) return

                for (let i = 0; i < childNodes.length; i += 1) {
                    const itemEl = childNodes[i]
                    itemEl.hidden = false

                    const itemRect = itemEl.getBoundingClientRect()
                    const containerRect =
                        containerRef.current.getBoundingClientRect()

                    if (
                        itemRect.bottom > containerRect.bottom ||
                        itemRect.right > containerRect.right
                    ) {
                        itemEl.hidden = true

                        if (i > 0) {
                            childNodes[i - 1].hidden = true
                        }

                        if (i) break
                    }
                }

                const getInvisibleNumber =
                    containerRef.current.querySelectorAll("[hidden]").length - 1

                setInvisibleNumber(getInvisibleNumber)
            }

            truncate()

            const resizeObserver = new ResizeObserver((entries: any) => {
                window.requestAnimationFrame(() => {
                    // eslint-disable-next-line
                    for (const _ of entries) {
                        truncate()
                    }
                })
            })

            const containerEl = containerRef.current

            if (containerEl) {
                resizeObserver.observe(containerEl)
            }

            return () => {
                if (containerEl) {
                    resizeObserver.unobserve(containerEl)
                }
            }
        }, [children])

        return (
            <StyledTruncate
                data-testid={testid}
                ref={useMergeRefs([ref, containerRef])}
                as={as}
                className={className}
                $gap={gap}
                {...rest}
            >
                {children}

                {invisibleNumber > 0 && (
                    <StyledTag
                        data-testid={testid && `${testid}.Plus`}
                        className={className && "Plus"}
                    >
                        {`+ ${invisibleNumber}`}
                    </StyledTag>
                )}
            </StyledTruncate>
        )
    }
)
