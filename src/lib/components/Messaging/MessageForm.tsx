/*=============================================== MessageForm ===============================================*/

import {
    forwardRef,
    useState,
    useCallback,
    type ChangeEvent,
    type FormEvent,
    type KeyboardEvent,
} from "react"
import { Button, ButtonIcon, useKeyPress } from "../../"
import { Send } from "../../icons"
import { StyledMessageForm, StyledMessageInput } from "./styles"
import type { ILibMessageForm } from "./types"
import { roundIconSize } from "../../lib-utils"

/**
 * @description Returns a MessageForm component
 * @link https://documentation-components-react.vercel.app/components/messaging
 * @extends HTMLFormElement
 * @prop data-testid?: string
 * @prop handleSubmit: () => void
 * @prop inputHeight: number
 * @prop setInputHeight: Dispatch<SetStateAction<number>>
 * @prop input: { message: string; setMessage: Dispatch<SetStateAction<string>>; placeholder?: string; autoFocus?: boolean }
 * @prop button?: { icon?: string | JSX.Element => only if text is not defined; text?: string => only if icon is not defined }
 */

export const MessageForm = forwardRef<HTMLFormElement, ILibMessageForm>(
    (
        {
            "data-testid": testid,
            className,
            handleSubmit: submiForm,
            input,
            button,
            inputHeight,
            setInputHeight,
            ...rest
        },
        ref
    ) => {
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
                    >
                        {button.text}
                    </Button>
                ) : (
                    <ButtonIcon
                        data-testid={testid && `${testid}.SubmitButton`}
                        className={className && "SubmitButton"}
                        type="submit"
                        icon={
                            button?.icon || (
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
                        showBackgroundHover
                    />
                )}
            </StyledMessageForm>
        )
    }
)
