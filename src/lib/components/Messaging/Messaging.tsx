import { forwardRef, useState } from "react"
import { getToday, uuid, stringifyPx } from "@julseb-lib/utils"
import { Hr } from "../../"
import { appendStyles } from "../../lib-utils"
import { MessagesContainer } from "./MessagesContainer"
import { MessagesList } from "./MessagesList"
import { MessageForm } from "./MessageForm"
import { Message } from "./Message"
import type { ILibMessaging } from "./types"

/**
 * @description Returns a Messaging component
 * @link https://documentation-components-react.vercel.app/components/messaging
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop items: Array<LibMessage>
 * @prop textDateTime?: string
 * @prop emptyText?: string
 * @prop iconScroll?: string | JSX.Element
 * @prop iconScrollSize?: number
 *
 * @type LibMessage
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop type: "sent" | "received"
 * @prop text: string
 * @prop date?: Date | string
 * @prop time?: string
 */
export const Messaging = forwardRef<HTMLDivElement, ILibMessaging>(
    (
        {
            "data-testid": testid,
            as,
            className,
            items,
            textDateTime,
            emptyText,
            handleSubmit,
            input,
            button,
            ...rest
        },
        ref
    ) => {
        const [inputHeight, setInputHeight] = useState(32)

        appendStyles(`
            #message-container-scroll-button, 
            #messaging-form,
            #messaging-form-input {
                --input-height: ${stringifyPx(
                    inputHeight >= 72 ? 72 : inputHeight
                )};
            }
        `)

        return (
            <MessagesContainer
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                {...rest}
            >
                <MessagesList
                    data-testid={testid && `${testid}.MessagesList`}
                    className={className && "MessagesList"}
                    emptyText={emptyText}
                >
                    {items
                        ?.sort(
                            (a, b) =>
                                new Date(
                                    `${a.date}-${a.time}` || getToday()
                                )?.getTime() -
                                new Date(
                                    `${b.date}-${b.time}` || getToday()
                                ).getTime()
                        )
                        .map(message => (
                            <Message
                                key={uuid()}
                                data-testid={
                                    message["data-testid"] ||
                                    (testid && `${testid}.MessagesList.Message`)
                                }
                                className={
                                    message.className ||
                                    (className && "Message")
                                }
                                id={message.id}
                                ref={message.ref}
                                textDateTime={textDateTime}
                                {...message}
                            />
                        ))}
                </MessagesList>

                <Hr
                    data-testid={testid && `${testid}.Separator`}
                    className={className && "Separator"}
                />

                <MessageForm
                    data-testid={testid && `${testid}.Form`}
                    className={className && "Form"}
                    handleSubmit={handleSubmit}
                    input={input}
                    button={button}
                    inputHeight={inputHeight}
                    setInputHeight={setInputHeight}
                />
            </MessagesContainer>
        )
    }
)
