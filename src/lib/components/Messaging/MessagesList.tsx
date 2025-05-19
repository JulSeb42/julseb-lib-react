import { useRef, useState, useEffect, type FC } from "react"
import classNames from "classnames"
import { Text, useMergeRefs } from "../../"
import { roundIconSize } from "../../lib-utils"
import { ChevronDown } from "../../icons"
import { StyledMessagesList, MessageListBottom, ScrollButton } from "./styles"
import type { ILibMessagesList } from "./types"

/**
 * MessagesList component for displaying a scrollable list of chat messages with optional empty state and scroll-to-bottom button.
 *
 * @component
 * @extends HTMLDivElement & ILibFlexbox
 * @param {Object} props - MessagesList props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {ReactNode[]} [props.children] - Array of message elements to display.
 * @param {string} [props.emptyText="No message yet."] - Text to display when there are no messages.
 * @param {boolean} [props.hideScrollButton] - Hide the scroll-to-bottom button.
 * @param {{ icon?: string | JSX.Element; iconSize?: number; positionFromBottom?: number; iconBaseUrl?: string }} [props.scrollButton] - Customization for the scroll button (only if hideScrollButton is false or undefined).
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered MessagesList component.
 *
 * @see https://documentation-components-react.vercel.app/components/messaging
 * @example
 * <MessagesList>
 *   <Message type="sent" text="Hello!" />
 *   <Message type="received" text="Hi!" />
 * </MessagesList>
 */
export const MessagesList: FC<ILibMessagesList> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    children,
    emptyText: textEmpty = "No message yet.",
    scrollButton,
    hideScrollButton,
    ...rest
}) => {
    const [isButtonVisible, setIsButtonVisible] = useState(false)

    const containerRef = useRef<HTMLDivElement>(null as any)
    const bottomRef = useRef<HTMLDivElement>(null as any)

    const scrollToBottom = () => {
        if (containerRef && containerRef.current) {
            const scrollHeight = containerRef?.current?.scrollHeight
            const height = containerRef?.current?.clientHeight
            const maxScrollTop = scrollHeight - height

            containerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0

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
