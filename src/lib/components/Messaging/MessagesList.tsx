/*=============================================== MessagesList ===============================================*/

import { forwardRef, useRef, useState, useEffect } from "react"
import classNames from "classnames"
import { Text, useMergeRefs } from "../../"
import { roundIconSize } from "../../lib-utils"
import { ChevronDown } from "../../icons"
import { StyledMessagesList, MessageListBottom, ScrollButton } from "./styles"
import type { ILibMessagesList } from "./types"

/**
 * @description Returns a MessagesList component
 * @link https://documentation-components-react.vercel.app/components/messaging
 * @extends HTMLDivElement & ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop children?: ReactChildren
 * @prop emptyText?: string
 * @prop iconButtonScroll?: string | JSX.Element
 * @prop iconButtonScrollSize?: number
 * @prop positionScrollButton?: number
 */

export const MessagesList = forwardRef<HTMLDivElement, ILibMessagesList>(
    (
        {
            "data-testid": testid,
            as,
            className,
            children,
            emptyText: textEmpty = "No message yet.",
            withScrollButtons = true,
            ...rest
        },
        ref
    ) => {
        const [isButtonVisible, setIsButtonVisible] = useState(false)

        const containerRef = useRef<HTMLDivElement>(null)
        const bottomRef = useRef<HTMLDivElement>(null)

        const scrollToBottom = () => {
            if (containerRef && containerRef.current) {
                const scrollHeight = containerRef?.current?.scrollHeight
                const height = containerRef?.current?.clientHeight
                const maxScrollTop = scrollHeight - height

                containerRef.current.scrollTop =
                    maxScrollTop > 0 ? maxScrollTop : 0

                setIsButtonVisible(false)
            }
        }

        useEffect(() => {
            if (children?.length) scrollToBottom()

            containerRef?.current?.addEventListener("scroll", () => {
                const scroll = containerRef.current?.scrollTop
                const height = containerRef?.current?.clientHeight

                if (scroll && height) {
                    if (scroll < height) {
                        setIsButtonVisible(true)
                    } else {
                        setIsButtonVisible(false)
                    }
                }
            })
        }, [children?.length])

        const isEmpty: boolean = !children?.length

        return (
            <StyledMessagesList
                data-testid={testid}
                ref={useMergeRefs([ref, containerRef])}
                as={as}
                className={className}
                flexDirection="column"
                gap="s"
                justifyContent={isEmpty ? "center" : "flex-start"}
                alignItems={isEmpty ? "center" : "stretch"}
                {...rest}
            >
                {children?.length ? (
                    <>
                        {children}

                        <MessageListBottom
                            data-testid={testid && `${testid}.ListBottom`}
                            ref={bottomRef}
                            className={className && "MessageListBottom"}
                        />
                    </>
                ) : (
                    <Text
                        data-testid={testid && `${testid}.EmptyText`}
                        color="gray"
                        className={className && "MessageListEmptyText"}
                    >
                        {textEmpty}
                    </Text>
                )}

                {withScrollButtons && (
                    <ScrollButton
                        data-testid={testid && `${testid}.ScrollButton`}
                        className={classNames(
                            {
                                MessagesListScrollButton: className,
                            },
                            { Visible: isButtonVisible }
                        )}
                        id="message-container-scroll-button"
                        icon={
                            (typeof withScrollButtons === "object" &&
                                withScrollButtons.icon) || (
                                <ChevronDown
                                    data-testid={
                                        testid && `${testid}.ScrollButton.Icon`
                                    }
                                    className={className && "ScrollIcon"}
                                    size={roundIconSize(32)}
                                />
                            )
                        }
                        onClick={scrollToBottom}
                        variant="ghost"
                        shadow="s"
                        $bottom={
                            typeof withScrollButtons === "object" &&
                            withScrollButtons.positionFromBottom
                                ? withScrollButtons.positionFromBottom
                                : 32
                        }
                    />
                )}
            </StyledMessagesList>
        )
    }
)
