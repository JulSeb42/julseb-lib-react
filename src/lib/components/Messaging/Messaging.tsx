/*=============================================== Messaging component ===============================================*/

import { forwardRef, useState } from "react"
import { getToday, uuid, stringifyPx } from "ts-utils-julseb"
import { Hr } from "../../"
import { HelmetStyles } from "../../lib-utils"
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
 * @prop data: Array<LibMessage>
 * @prop handleSubmit: () => void
 * @prop input: { message: string; setMessage: Dispatch<SetStateAction<string>>; placeholder?: string; autoFocus?: boolean }
 * @prop textDateTime?: string
 * @prop emptyText?: string
 * @prop iconScroll?: string | JSX.Element
 * @prop iconScrollSize?: number
 * @prop button?: { icon?: string | JSX.Element => only if text is not defined; text?: string => only if icon is not defined }
 *
 * @type LibMessage
 * @prop data-testid?: string
 * @prop type: "sent" | "received"
 * @prop text: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop className?: string
 * @prop date?: Date | string
 * @prop time?: string
 */
export const Messaging = forwardRef<HTMLDivElement, ILibMessaging>(
    (
        {
            "data-testid": testid,
            as,
            className,
            data,
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

        return (
            <MessagesContainer
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                {...rest}
            >
                <HelmetStyles>
                    {`
                        #message-container-scroll-button, 
                        #messaging-form,
                        #messaging-form-input {
                            --input-height: ${stringifyPx(
                                inputHeight >= 72 ? 72 : inputHeight
                            )};
                        }
                    `}
                </HelmetStyles>

                <MessagesList
                    data-testid={testid && `${testid}.MessagesList`}
                    className={className && "MessagesList"}
                    emptyText={emptyText}
                >
                    {data
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
