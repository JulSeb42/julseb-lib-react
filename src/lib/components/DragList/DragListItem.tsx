import type { DragEvent, FC } from "react"
import { Text, Badge } from "../../"
import { Drag } from "../../icons"
import { LibIcon } from "../LibIcon"
import {
    StyledItem,
    DragIconContainer,
    Content,
    RightContainer,
} from "./styles"
import type { ILibDragListItem } from "./types"
import type { ILibBadge } from "../Badge/types"

/**
 * DragListItem component for rendering a draggable item in a DragList.
 *
 * @component
 * @param {Object} props - DragListItem props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.id] - HTML id attribute (used if item is not provided).
 * @param {LibDragListItem} [props.item] - Item object to render (used if children is not provided).
 * @param {ReactNode} [props.children] - Custom content (used if item is not provided).
 * @param {number} props.index - Index of the item in the list.
 * @param {(e: DragEvent<HTMLDivElement>, i: number) => void} props.handleDragStart - Handler for drag start event.
 * @param {(e: DragEvent<HTMLDivElement>, i: number) => void} props.handleDragOver - Handler for drag over event.
 * @param {string|JSX.Element} [props.iconDrag] - Icon for the drag handle.
 * @param {number} [props.iconDragSize=24] - Size of the drag icon.
 * @param {string} [props.iconDragBaseUrl] - Base URL for the drag icon.
 * @returns {JSX.Element} The rendered DragListItem component.
 *
 * @example
 * <DragListItem
 *   item={item}
 *   index={0}
 *   handleDragStart={handleDragStart}
 *   handleDragOver={handleDragOver}
 * />
 */
export const DragListItem: FC<ILibDragListItem> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    id,
    iconDragSize = 24,
    iconDrag = (
        <Drag
            data-testid={testid && `${testid}.IconDrag`}
            className={className && "IconDrag"}
            size={iconDragSize}
        />
    ),
    iconDragBaseUrl,
    item,
    children,
    index,
    handleDragStart,
    handleDragOver,
    ...rest
}) => {
    if (item?.element) return item.element

    const badgeProps: ILibBadge = {
        "data-testid": testid && `${testid}.DragListItemRightContainer.Badge`,
        className: className && "Badge",
        backgroundColor:
            typeof item?.badge === "object"
                ? item.badge.backgroundColor
                : undefined,
        contentColor:
            typeof item?.badge === "object"
                ? item.badge?.contentColor
                : undefined,
        size:
            typeof item?.badge === "object" && item.badge.size
                ? item?.badge?.size
                : 12,
    }

    return (
        <StyledItem
            data-testid={testid}
            ref={ref}
            as={as}
            className={className}
            id={item ? item.id : id}
            draggable
            onDragStart={(e: DragEvent<HTMLDivElement>) =>
                handleDragStart(e, index)
            }
            onDragOver={(e: DragEvent<HTMLDivElement>) =>
                handleDragOver(e, index)
            }
            {...rest}
        >
            <DragIconContainer
                data-testid={testid && `${testid}.DragIconContainer`}
                className={className && "DragIconContainer"}
                $size={iconDragSize}
            >
                <LibIcon
                    data-testid={
                        testid && `${testid}.DragIconContainer.IconDrag`
                    }
                    className={className && "IconDrag"}
                    icon={iconDrag}
                    size={iconDragSize}
                    baseUrl={iconDragBaseUrl}
                />
            </DragIconContainer>

            <Content
                data-testid={testid && `${testid}.DragListItemContent`}
                className={className && "DragListItemContent"}
            >
                {item ? (
                    <>
                        <Text
                            tag="h6"
                            data-testid={
                                testid && `${testid}.DragListItemContent.Title`
                            }
                            className={className && "DragListItemTitle"}
                        >
                            {item.title}
                        </Text>
                        {item.body && (
                            <Text
                                data-testid={
                                    testid &&
                                    `${testid}.DragListItemContent.Body`
                                }
                                className={className && "DragListItemBody"}
                            >
                                {item.body}
                            </Text>
                        )}
                    </>
                ) : (
                    children
                )}
            </Content>

            {(item?.badge || item?.date) && (
                <RightContainer
                    data-testid={
                        testid && `${testid}.DragListItemRightContainer`
                    }
                    className={className && "DragListItemRightContainer"}
                >
                    {item?.badge &&
                        (typeof item.badge === "object" ? (
                            <Badge
                                icon={item.badge.icon}
                                iconSize={item.badge.iconSize}
                                number={item.badge.number}
                                size={4}
                                {...(badgeProps as any)}
                            />
                        ) : (
                            <Badge {...badgeProps} />
                        ))}

                    {item?.date && (
                        <Text
                            data-testid={
                                testid &&
                                `${testid}.DragListItemRightContainer.Date`
                            }
                            className={className && "Date"}
                            tag="small"
                            color="gray"
                        >
                            {item?.date.toString()}
                        </Text>
                    )}
                </RightContainer>
            )}
        </StyledItem>
    )
}
