import type { ReactNode } from "react"
import type {
    LibComponentBase,
    LibMessage,
    DispatchState,
    LibIcon,
    ReactChildren,
    LibMessagingDateFormat,
} from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

export interface ILibMessaging
    extends LibComponentBase<HTMLDivElement>,
        MessageFormCommon {
    items: Array<LibMessage>
    textDateTime?: string
    emptyText?: string
    iconScroll?: LibIcon
    iconScrollSize?: number
    children?: never
}

export interface ILibMessagesContainer
    extends LibComponentBase<HTMLDivElement> {}

interface ILibMessagesListBase
    extends LibComponentBase<HTMLDivElement>,
        ILibFlexbox {
    children?: Array<ReactNode>
    emptyText?: string
}

interface MessagesListWithScrollButton extends ILibMessagesListBase {
    hideScrollButton?: false | undefined
    scrollButton?: {
        icon?: LibIcon
        iconSize?: number
        positionFromBottom?: number
        iconBaseUrl?: string
    }
}

interface MessagesListWithoutScrollButton extends ILibMessagesListBase {
    hideScrollButton: true
    scrollButton?: never
}

export type ILibMessagesList =
    | MessagesListWithScrollButton
    | MessagesListWithoutScrollButton

type MessageFormButtonWithIcon = {
    icon?: LibIcon
    text?: never
}

type MessageFormButtonWithText = {
    icon?: never
    text?: string
}

interface MessageFormCommon {
    handleSubmit: () => void
    input: {
        message: string
        setMessage: DispatchState<string>
        placeholder?: string
        autoFocus?: boolean
    }
    button?: MessageFormButtonWithIcon | MessageFormButtonWithText
}

export interface ILibMessageForm
    extends Exclude<LibComponentBase<HTMLFormElement>, "as">,
        MessageFormCommon {
    inputHeight: number
    setInputHeight: DispatchState<number>
    iconBaseUrl?: string
}

interface ILibMessageBase
    extends LibComponentBase<HTMLDivElement>,
        ILibFlexbox,
        Omit<LibMessage, "text" | "ref"> {
    textDateTime?: string
}

interface MessageWithText extends ILibMessageBase {
    text: string
    children?: never
}

interface MessageWithChildren extends ILibMessageBase {
    text?: never
    children?: ReactChildren
}

type ILibMessageContent = MessageWithText | MessageWithChildren

type MessageWithDate = ILibMessageContent & {
    date?: Date | string
    textToday?: string
    textYesterday?: string
    dateFormat?: LibMessagingDateFormat
}

type MessageWithoutDate = ILibMessageContent & {
    date?: undefined
    textToday?: never
    textYesterday?: never
    dateFormat?: never
}

/**
 * @extends HTMLDivElement & ILibFlexbox
 * @prop data-testid?: string
 * @prop as?: ElementType
 */
export type ILibMessage = MessageWithDate | MessageWithoutDate
