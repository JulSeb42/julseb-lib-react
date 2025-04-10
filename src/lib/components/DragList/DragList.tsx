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
 * @prop items: Array<LibDragListItem> => only if children is not defined
 * @prop setItems: Dispatch<SetStateAction<Array<LibDragListItem>>> => only if children is not defined
 * @prop hideSeparator?: boolean => only if children is not defined
 * @prop children?: ReactChildren => only if items is not defined
 * @prop iconDrag?: string | JSX.Element
 * @prop iconDragSize?: number
 * @prop iconDragBaseUrl?: string
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop border?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: Any color from the library }
 * @prop padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 *
 * @type LibDragListItem
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop title: string => only if element is not defined
 * @prop body?: string => only if element is not defined
 * @prop badge?: boolean | ListGroupItemBadgeExtended => only if element and date are not defined
 * @prop date?: string | Date => only if element and badge are not defined
 * @prop element?: JSX.ELement => only if title and other props are not defined
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
