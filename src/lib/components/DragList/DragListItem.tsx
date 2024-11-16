/*=============================================== DragListItem component ===============================================*/

import { forwardRef, type DragEvent } from "react"
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
 * @description Returns a DragList item component
 * @link https://documentation-components-react.vercel.app/components/drag-list
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop handleDragStart: (e: DragEvent<HTMLDivElement>, i: number) => void
 * @prop handleDragOver: (e: DragEvent<HTMLDivElement>, i: number) => void
 * @prop index: number
 * @prop item: LibDragListItem => only if children is not defined
 * @prop children?: ReactChildren => only if item is not defined
 * @prop iconDrag?: string | JSX.Element
 * @prop iconDragSize?: number
 * @prop iconDragBaseUrl?: string
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
export const DragListItem = forwardRef<HTMLDivElement, ILibDragListItem>(
    (
        {
            "data-testid": testid,
            as,
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
        },
        ref
    ) => {
        if (item?.element) return item.element

        const badgeProps: ILibBadge = {
            "data-testid":
                testid && `${testid}.DragListItemRightContainer.Badge`,
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
                                    testid &&
                                    `${testid}.DragListItemContent.Title`
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
)
