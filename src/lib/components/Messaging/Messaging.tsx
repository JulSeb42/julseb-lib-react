import { useState, type FC } from "react"
import { getToday, uuid, stringifyPx } from "@julseb-lib/utils"
import { Hr } from "../../"
import { appendStyles } from "../../lib-utils"
import { MessagesContainer } from "./MessagesContainer"
import { MessagesList } from "./MessagesList"
import { MessageForm } from "./MessageForm"
import { Message } from "./Message"
import type { ILibMessaging } from "./types"

/**
 * Messaging component for displaying a complete chat interface with messages list, input form, and scroll handling.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Messaging props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {Array<LibMessage>} props.items - Array of message objects to display.
 * @param {string} [props.textDateTime] - Text between date and time in messages.
 * @param {string} [props.emptyText] - Text to display when there are no messages.
 * @param {() => void} [props.handleSubmit] - Function to call on form submit.
 * @param {{ message: string; setMessage: React.Dispatch<React.SetStateAction<string>>; placeholder?: string; autoFocus?: boolean }} props.input - Input state and handlers for the message form.
 * @param {{ icon?: string | JSX.Element; text?: string }} [props.button] - Button configuration for the message form.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Messaging component.
 *
 * @see https://documentation-components-react.vercel.app/components/messaging
 * @example
 * <Messaging
 *   items={[
 *     { type: "sent", text: "Hello!", date: new Date(), time: "14:30" },
 *     { type: "received", text: "Hi!", date: new Date(), time: "14:31" }
 *   ]}
 *   input={{ message, setMessage, placeholder: "Type a message..." }}
 *   handleSubmit={handleSend}
 * />
 */
export const Messaging: FC<ILibMessaging> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    items,
    textDateTime,
    emptyText,
    handleSubmit,
    input,
    button,
    ...rest
}) => {
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
                                message.className || (className && "Message")
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
