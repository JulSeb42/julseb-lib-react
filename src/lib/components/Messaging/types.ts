/*=============================================== Messaging types ===============================================*/

import type { ReactNode } from "react"
import type {
    LibComponentBase,
    LibMessage,
    DispatchState,
    LibIcon,
    ReactChildren,
} from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

/*====================== Messaging ======================*/

export interface ILibMessaging
    extends LibComponentBase<HTMLDivElement>,
        MessageFormCommon {
    data: Array<LibMessage>
    textDateTime?: string
    emptyText?: string
    iconScroll?: LibIcon
    iconScrollSize?: number
    children?: never
}

/*====================== MessagesContainer ======================*/

export interface ILibMessagesContainer
    extends LibComponentBase<HTMLDivElement> {
    children?: ReactChildren
}

/*====================== MessagesList ======================*/

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
    }
}

interface MessagesListWithoutScrollButton extends ILibMessagesListBase {
    hideScrollButton: true
    scrollButton?: never
}

export type ILibMessagesList =
    | MessagesListWithScrollButton
    | MessagesListWithoutScrollButton

/*====================== MessageForm ======================*/

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
}

/*====================== Message ======================*/

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
    dateFormat?: "short" | "long"
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
 * @prop type: "sent" | "received"
 * @prop text: string => only if children is not defined
 * @prop children?: ReactChildren => only if text is not defined
 * @prop date?: Date | string
 * @prop time?: string
 * @prop textDateTime?: string
 * @prop textToday?: string
 * @prop textYesterday?: string
 * @prop dateFormat?: "short" | "long"
 * @prop className?: string
 */
export type ILibMessage = MessageWithDate | MessageWithoutDate
