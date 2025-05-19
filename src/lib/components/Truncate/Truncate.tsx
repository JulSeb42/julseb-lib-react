import { useLayoutEffect, useState, useRef, type FC } from "react"
import { useMergeRefs } from "../../"
import { StyledTruncate, StyledTag } from "./styles"
import type { ILibTruncate } from "./types"

/**
 * Truncate component for displaying a list of items in a single line, truncating overflow items and showing a "+ N" tag for hidden items.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Truncate props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="xs"] - Gap between items.
 * @param {ReactNode} [props.children] - Items to display in the truncate container.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Truncate component.
 *
 * @see https://documentation-components-react.vercel.app/components/truncate
 * @example
 * <Truncate>
 *   <Tag>Item 1</Tag>
 *   <Tag>Item 2</Tag>
 *   <Tag>Item 3</Tag>
 *   <Tag>Item 4</Tag>
 * </Truncate>
 */
export const Truncate: FC<ILibTruncate> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    children,
    gap = "xs",
    ...rest
}) => {
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
