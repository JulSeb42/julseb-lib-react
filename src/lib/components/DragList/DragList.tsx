import { Fragment, useState, useRef, type DragEvent, type FC } from "react"
import { Hr } from "../../"
import { DragListItem } from "./DragListItem"
import { StyledDragList } from "./styles"
import type { ILibDragList } from "./types"

/**
 * DragList component for displaying a sortable list with drag-and-drop support.
 *
 * @component
 * @param {Object} props - DragList props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {Array<LibDragListItem>} [props.items] - Array of list items (used if children is not provided).
 * @param {Dispatch<SetStateAction<Array<LibDragListItem>>>} [props.setItems] - Setter for the list items (used if items is provided).
 * @param {boolean} [props.hideSeparator] - Hide the separator between items.
 * @param {ReactNode} [props.children] - List items as children (used if items is not provided).
 * @param {string|JSX.Element} [props.iconDrag] - Icon for drag handle.
 * @param {number} [props.iconDragSize] - Size of the drag icon.
 * @param {string} [props.iconDragBaseUrl] - Base URL for the drag icon.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="s"] - Gap between items.
 * @param {Object} [props.border] - Border style, width, and color.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.borderRadius="m"] - Border radius for the list.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | Object} [props.padding="s"] - Padding for the list.
 * @param {string} [props.className] - Additional class names.
 * @returns {JSX.Element} The rendered DragList component.
 *
 * @example
 * <DragList
 *   items={items}
 *   setItems={setItems}
 *   iconDrag={<DragIcon />}
 * />
 */
export const DragList: FC<ILibDragList> = ({
    "data-testid": testid,
    as,
    ref,
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
}) => {
    const [dragIndex, setDragIndex] = useState(-1)
    const dragNode = useRef<HTMLDivElement>(null)

    const handleDragStart = (e: DragEvent<HTMLDivElement>, i: number) => {
        const { target } = e
        setDragIndex(i)

        if (dragNode && dragNode.current) {
            dragNode.current = target as HTMLDivElement
            e.dataTransfer.effectAllowed = "move"

            if (target instanceof HTMLElement) {
                e.dataTransfer.setData("text/html", target.outerHTML)
            }
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
