/*=============================================== DragList component ===============================================*/

import { forwardRef, Fragment, useState, useRef, type DragEvent } from "react"
import { Hr } from "../../"
import { DragListItem } from "./DragListItem"
import { StyledDragList } from "./styles"
import type { ILibDragList } from "./types"

/**
 * @description Returns a DragList component
 * @link https://documentation-components-react.vercel.app/components/drag-list
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export const DragList = forwardRef<HTMLDivElement, ILibDragList>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            gap = "s",
            iconDrag,
            iconDragSize,
            iconDragBaseUrl,
            items,
            setItems,
            border = { color: "gray-200" },
            padding = "s",
            borderRadius = "m",
            hideSeparator,
            ...rest
        },
        ref
    ) => {
        const [dragIndex, setDragIndex] = useState(-1)
        const dragNode = useRef<HTMLDivElement>(null)

        const handleDragStart = (e: DragEvent<HTMLDivElement>, i: number) => {
            const { target } = e
            setDragIndex(i)

            if (dragNode && dragNode.current) {
                // @ts-ignore
                dragNode.current = target
                e.dataTransfer.effectAllowed = "move"
                // @ts-ignore
                e.dataTransfer.setData("text/html", target)
            }
        }

        const handleDragOver = (e: DragEvent<HTMLDivElement>, i: number) => {
            e.preventDefault()

            if (dragNode.current !== e.target && items) {
                const newItems = [...items]
                newItems.splice(i, 0, newItems.splice(dragIndex, 1)[0])
                setDragIndex(i)
                setItems(newItems)
            }
        }

        return (
            <StyledDragList
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $gap={gap}
                $border={border}
                $padding={padding}
                $borderRadius={borderRadius}
                {...rest}
            >
                {items?.map((item, i) => (
                    <Fragment key={item.id}>
                        <DragListItem
                            data-testid={
                                item["data-testid"] ||
                                (testid && `${testid}.DragListItem`)
                            }
                            className={
                                item.className || (className && "DragListItem")
                            }
                            id={item.id}
                            iconDrag={iconDrag}
                            iconDragSize={iconDragSize}
                            item={item}
                            index={i}
                            handleDragStart={handleDragStart}
                            handleDragOver={handleDragOver}
                            iconDragBaseUrl={iconDragBaseUrl}
                        />

                        {!hideSeparator && i !== items.length - 1 && (
                            <Hr data-testid={testid && `${testid}.Separator`} />
                        )}
                    </Fragment>
                )) ?? children}
            </StyledDragList>
        )
    }
)
