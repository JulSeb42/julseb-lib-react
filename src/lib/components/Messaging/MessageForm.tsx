import {
    useState,
    useCallback,
    type ChangeEvent,
    type FormEvent,
    type KeyboardEvent,
    type FC,
} from "react"
import { Button, ButtonIcon, useKeyPress } from "../../"
import { Send } from "../../icons"
import { StyledMessageForm, StyledMessageInput } from "./styles"
import type { ILibMessageForm } from "./types"
import { roundIconSize } from "../../lib-utils"

/**
 * MessageForm component for sending chat messages with a flexible input, submit button, and keyboard handling.
 *
 * @component
 * @extends HTMLFormElement
 * @param {Object} props - MessageForm props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {Ref<HTMLFormElement>} [props.ref] - Ref forwarded to the form element.
 * @param {string} [props.className] - Additional class names.
 * @param {number} props.inputHeight - Current height of the textarea input.
 * @param {Dispatch<React.SetStateAction<number>>} props.setInputHeight - Setter for the input height.
 * @param {() => void} props.handleSubmit - Function to call on form submit.
 * @param {{ message: string; setMessage: React.Dispatch<React.SetStateAction<string>>; placeholder?: string; autoFocus?: boolean }} props.input - Input state and handlers.
 * @param {{ icon?: string | JSX.Element; text?: string }} [props.button] - Button configuration (icon or text).
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {any} [props.rest] - Additional props passed to the form element.
 * @returns {JSX.Element} The rendered MessageForm component.
 *
 * @see https://documentation-components-react.vercel.app/components/messaging
 * @example
 * <MessageForm
 *   inputHeight={32}
 *   setInputHeight={setInputHeight}
 *   handleSubmit={handleSend}
 *   input={{ message, setMessage, placeholder: "Type a message..." }}
 *   button={{ icon: <Send /> }}
 * />
 */
export const MessageForm: FC<ILibMessageForm> = ({
    "data-testid": testid,
    ref,
    className,
    handleSubmit: submiForm,
    input,
    button,
    inputHeight,
    setInputHeight,
    iconBaseUrl,
    ...rest
}) => {
    const [isInputSelected, setIsInputSelected] = useState(false)

    const handleInput = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement>) => {
            input.setMessage(e.target.value)
            setInputHeight(e.target.scrollHeight)

            if (!e.target.value.length) setInputHeight(32)
        },
        [input.setMessage, setInputHeight]
    )

    useKeyPress(
        ["Enter"],
        () => {
            if (isInputSelected && input.message.length) {
                submiForm()
            }
        },
        ["Shift"]
    )

    const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (isInputSelected && e.key === "Enter") {
            e.preventDefault()
        }

        if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault()
            input.setMessage(`${input.message}\n`)
            setInputHeight(inputHeight + 24)
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submiForm()
    }

    return (
        <StyledMessageForm
            data-testid={testid}
            ref={ref}
            className={className}
            onSubmit={handleSubmit}
            id="messaging-form"
            {...rest}
        >
            <StyledMessageInput
                data-testid={testid && `${testid}.Input`}
                className={className && "MessageInput"}
                value={input.message}
                onChange={handleInput}
                autoFocus={input?.autoFocus}
                placeholder={input?.placeholder || "Type your message..."}
                onFocus={() => setIsInputSelected(true)}
                onBlur={() => setIsInputSelected(false)}
                onKeyDown={handleKeyPress}
                id="messaging-form-input"
            />

            {button?.text ? (
                <Button
                    data-testid={testid && `${testid}.SubmitButton`}
                    className={className && "SubmitButton"}
                    type="submit"
                    variant="transparent"
                    disabled={!input.message.length}
                    noPadding
                    iconBaseUrl={iconBaseUrl}
                >
                    {button.text}
                </Button>
            ) : (
                <ButtonIcon
                    data-testid={testid && `${testid}.SubmitButton`}
                    className={className && "SubmitButton"}
                    type="submit"
                    icon={
                        button?.icon ?? (
                            <Send
                                data-testid={
                                    testid && `${testid}.SubmitButton.Icon`
                                }
                                className={className && "IconSubmit"}
                                size={roundIconSize(32)}
                            />
                        )
                    }
                    disabled={!input.message.length}
                    size={32}
                    variant="transparent"
                    iconBaseUrl={iconBaseUrl}
                    showBackgroundHover
                />
            )}
        </StyledMessageForm>
    )
}
