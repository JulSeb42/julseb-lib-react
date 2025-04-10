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
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop children?: Array<ReactNode>
 * @prop emptyText?: string
 * @prop hideScrollButton?: boolean
 * @prop scrollButton?: { icon?: string | JSX.Element; iconSize?: number; positionFromBottom?: number; iconBaseUrl?: string } => only if hideScrollButton is false or undefined
 */
export const MessagesList = forwardRef<HTMLDivElement, ILibMessagesList>(
    (
        {
            "data-testid": testid,
            as,
            className,
            children,
            emptyText: textEmpty = "No message yet.",
            scrollButton,
            hideScrollButton,
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

                {!hideScrollButton && (
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
                            scrollButton?.icon ?? (
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
                        iconBaseUrl={scrollButton?.iconBaseUrl}
                    />
                )}
            </StyledMessagesList>
        )
    }
)
