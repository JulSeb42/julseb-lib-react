/*=============================================== Components items types ===============================================*/

import type { ForwardedRef, ReactNode } from "react"
import type {
    LibButtonLinkBlank,
    LibAllColors,
    LibIcon,
    LibButtonLinkBlankRequired,
    LibSpacers,
    LibToastStatus,
    ReactChildren,
    LibMessageType,
    CssFontStyle,
    LibColorsHover,
} from "./"

/*====================== Base ======================*/

/**
 * @description Base props for any ComponentItem
 * @type T => HTMLElementType
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<T>
 */
interface LibComponentItemBase<T> {
    "data-testid"?: string
    className?: string
    id?: string
    ref?: ForwardedRef<T>
}

/*====================== ButtonGroupButtons ======================*/

type ButtonGroupItemsBase = LibComponentItemBase<HTMLButtonElement> &
    LibButtonLinkBlank & {
        "aria-label"?: string
        iconBaseUrl?: string
    }

type ButtonGroupItemText = ButtonGroupItemsBase & {
    text: string
    icons?: {
        left?: LibIcon
        right?: LibIcon
        only?: never
    }
    iconSizes?: {
        left?: number
        right?: number
        only?: never
    }
}

type ButtonGroupItemIcon = ButtonGroupItemsBase & {
    text?: never
    icons?: {
        left?: never
        right?: never
        only?: LibIcon
    }
    iconSizes?: {
        left?: never
        right?: never
        only?: number
    }
}

/**
 * @description Props for buttons in ButtonGroup component: https://documentation-components-react.vercel.app/components/button-group
 * @extends LibButtonLinkBlank
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLButtonElement>
 * @prop text: string => only if `iconOnly` is not defined
 * @prop iconLeft?: string | JSX.Element
 * @prop iconRight?: string | JSX.Element
 * @prop iconOnly: string | JSX.Element => only if `text` is not defined
 * @prop iconSizes?: { left?: number; right?: number; only?: number }
 * @prop "aria-label"?: string
 */
export type LibButtonGroupButtonItem = ButtonGroupItemText | ButtonGroupItemIcon

/*====================== ButtonGroupToggles ======================*/

interface LibButtonGroupToggleBase
    extends LibComponentItemBase<HTMLInputElement> {
    id: string
    value: boolean
}

interface ButtonGroupToggleWithIcon extends LibButtonGroupToggleBase {
    icon: LibIcon
    iconSize?: number
    label?: string
    tooltip?: string
    showTooltip?: boolean
    text?: never
}

interface ButtonGroupToggleWithText extends LibButtonGroupToggleBase {
    icon?: never
    iconSize?: never
    label?: never
    tooltip?: never
    showTooltip?: never
    text: string
}

/**
 * @description Props for toggles in ButtonGroup component: https://documentation-components-react.vercel.app/components/button-group
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLInputElement>
 * @prop text: string => only if icon is not defined
 * @prop icon: string | JSX.Element => only if text is not defined
 * @prop iconSize?: number => only if text is not defined
 * @prop label?: string => only if text is not defined
 * @prop tooltip?: string => only if text is not defined
 * @prop showTooltip?: boolean => only if text is not defined
 */
export type LibButtonGroupToggle =
    | ButtonGroupToggleWithIcon
    | ButtonGroupToggleWithText

/*====================== ListGroup ======================*/

// ! DO NOT EXPORT

type ListGroupItemBadgeColor = {
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
    size?: number
}

type ListGroupItemBadgeIcon = ListGroupItemBadgeColor & {
    icon?: LibIcon
    iconSize?: number
    number?: never
}

type ListGroupItemBadgeNumber = ListGroupItemBadgeColor & {
    icon?: never
    iconSize?: never
    number?: number
}

/**
 * @description Props for badge in ListGroupItem
 * @prop backgroundColor?: LibAllColors
 * @prop contentColor?: LibAllColors
 * @prop icon?: LibIcon => only if number is not defined
 * @prop iconSize?: number => only if icon is defined
 * @prop number?: number => only if icon is not defined
 */
type ListGroupItemBadgeExtended =
    | ListGroupItemBadgeIcon
    | ListGroupItemBadgeNumber

// ! END DO NOT EXPORT

type ListGroupItemBase = LibButtonLinkBlank &
    LibComponentItemBase<HTMLDivElement> & {
        text: string
        body?: string
    }

type ListGroupItemWithBadge = ListGroupItemBase & {
    badge?: boolean | ListGroupItemBadgeExtended
    date?: never
}

type ListGroupItemWithDate = ListGroupItemBase & {
    badge?: never
    date?: string | Date
}

/**
 * @description Props for ListGroup component items: https://documentation-components-react.vercel.app/components/list-group
 * @extends LibButtonLinkBlank
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLLIElement>
 * @prop text: string
 * @prop subtext?: string
 * @prop badge?: boolean | { icon?: string | JSX.Element => only if `number` is not defined; number?: number => only if `icon` is not defined; backgroundColor?: LibAllColors; contentColor?: LibAllColors } => only if `date` is not defined
 * @prop date?: string | Date => only if `badge` is not defined
 */
export type LibListGroupItem = ListGroupItemWithBadge | ListGroupItemWithDate

/*====================== AccordionItem ======================*/

/**
 * @description Props for Accordion component items: https://documentation-components-react.vercel.app/components/accordion
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop title: string
 * @prop isOpen?: boolean
 * @prop content?: ReactChildren
 */
export interface LibAccordionItem extends LibComponentItemBase<HTMLDivElement> {
    title: string
    content?: ReactChildren
    defaultOpen?: boolean
}

/*====================== DropdownItem ======================*/

/**
 * @description Props for Dropdown component items: https://documentation-components-react.vercel.app/components/dropdown
 * @extends LibButtonLinkBlankRequired
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
 * @prop text: string
 * @prop icon?: string | JSX.Element
 * @prop iconSize?: number
 * @prop gap?: LibSpacers
 */
export type LibDropdownItem = LibButtonLinkBlankRequired &
    LibComponentItemBase<HTMLButtonElement & HTMLAnchorElement> & {
        text: string
        icon?: LibIcon
        iconSize?: number
        gap?: LibSpacers
    }

/*====================== Toast ======================*/

/**
 * @description Props for Toaster component items: https://documentation-components-react.vercel.app/components/toast
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop body?: string | ReactChildren
 * @prop duration?: number
 * @prop icons?: { left?: string | JSX.Element; close?: string | JSX.Element }
 * @prop iconSizes?: { left?: number close?: number }
 * @prop iconLeftColor?: Any color from the library
 * @prop labelClose?: string
 * @prop withTimer?: boolean
 * @prop timerBackgroundColor?: Any color from the library
 */
export interface LibToastOptions extends LibComponentItemBase<HTMLDivElement> {
    body?: string | ReactChildren
    duration?: number
    icons?: {
        left?: LibIcon
        close?: LibIcon
    }
    iconSizes?: {
        left?: number
        close?: number
    }
    iconLeftColor?: LibAllColors
    iconsBaseUrl?: string
    labelClose?: string
    withTimer?: boolean
    timerBackgroundColor?: LibAllColors
}

/**
 * @description Props for Toast component: https://documentation-components-react.vercel.app/components/toast
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop title: string
 * @prop id?: string
 * @prop status?: "success" | "error" | "warning" | "info"
 * @prop options?: LibToastOptions
 *
 * @type LibToastOptions
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop body?: string | ReactChildren
 * @prop duration?: number
 * @prop icons?: { left?: string | JSX.Element; close?: string | JSX.Element }
 * @prop iconSizes?: { left?: number close?: number }
 * @prop iconLeftColor?: Any color from the library
 * @prop labelClose?: string
 * @prop withTimer?: boolean
 * @prop timerBackgroundColor?: Any color from the library
 */
export interface LibToast extends LibComponentItemBase<HTMLDivElement> {
    title: string
    id?: string
    status?: LibToastStatus
    options?: LibToastOptions
}

/*====================== Step ======================*/

/**
 * @description Props for Step component items: https://documentation-components-react.vercel.app/components/stepper
 * @extends LibButtonLinkBlank
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop text: string
 * @prop onClick?: void => only if to or href are not defined
 * @prop disabled?: boolean => only if onClick is defined
 * @prop to?: string => only if onClick and href are not defined
 * @prop href?: string => only if onClick and to are not defined
 * @prop blank?: boolean => only if to or href are defined
 */
export type LibStep = LibButtonLinkBlank &
    LibComponentItemBase<HTMLDivElement> & {
        text: string
    }

/*====================== BreadcrumbItem ======================*/

/**
 * @description Props for Breadcrumbs component items: https://documentation-components-react.vercel.app/components/breadcrumbs
 * @extends LibButtonLinkBlank
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLAnchorElement & HTMLSpanElement>
 * @prop text: string
 */
export type LibBreadcrumbItem = LibButtonLinkBlank &
    LibComponentItemBase<HTMLAnchorElement & HTMLSpanElement> & {
        text: string | JSX.Element
    }

/*====================== TabsItem ======================*/

/**
 * @description Props for Tabs component items: https://documentation-components-react.vercel.app/components/tabs
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop title: string
 * @prop content: ReactNode
 */
export interface LibTabItem
    extends LibComponentItemBase<HTMLDivElement & HTMLButtonElement> {
    title: string
    content: ReactNode
}

/*====================== Message ======================*/

/**
 * @description Props for Message component: https://documentation-components-react.vercel.app/components/messaging
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop type: "sent" | "received"
 * @prop text: string
 * @prop date?: Date | string
 * @prop time?: string
 */
export interface LibMessage extends LibComponentItemBase<HTMLDivElement> {
    type: LibMessageType
    text: string
    date?: Date | string
    time?: string
}

/*====================== MarkdownEditorOptions ======================*/

/**
 * @description Buttons showing in MarkdownEditor
 * @prop titles?: boolean
 * @prop bold?: boolean
 * @prop italic?: boolean
 * @prop strikethrough?: boolean
 * @prop ul?: boolean
 * @prop ol?: boolean
 * @prop link?: boolean
 * @prop quote?: boolean
 * @prop hr?: boolean
 * @prop code?: boolean
 * @prop codeBlock?: boolean
 * @prop comment?: boolean
 * @prop image?: boolean
 * @prop editorCode?: boolean
 * @prop editorLive?: boolean
 * @prop editorPreview?: boolean
 */
export interface LibMarkdownEditorOptions {
    titles?: boolean
    bold?: boolean
    italic?: boolean
    strikethrough?: boolean
    ul?: boolean
    ol?: boolean
    link?: boolean
    quote?: boolean
    hr?: boolean
    code?: boolean
    codeBlock?: boolean
    comment?: boolean
    image?: boolean
    editorCode?: boolean
    editorLive?: boolean
    editorPreview?: boolean
}

/*====================== HeaderLinks ======================*/

/**
 * @description Props for links in Header component items: https://documentation-components-react.vercel.app/components/header
 * @extends LibButtonLinkBlankRequired
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLAnchorElement & HTMLButtonElement>
 * @prop text: ReactChildren
 * @prop end?: boolean => prop from react-router, to render the active class only if path is not further
 */
export type LibHeaderLink = LibButtonLinkBlankRequired &
    LibComponentItemBase<HTMLAnchorElement & HTMLButtonElement> & {
        text: ReactChildren
        end?: boolean
    }

/*====================== IconMenuItem ======================*/

/**
 * @description Props for Items in IconMenu component items: https://documentation-components-react.vercel.app/icon-menu
 * @extends LibButtonLinkBlankRequired
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
 * @prop label: string
 * @prop icon: string | JSX.Element
 * @prop iconSize?: number
 */
export type LibIconMenuItem = LibButtonLinkBlankRequired &
    LibComponentItemBase<HTMLButtonElement & HTMLAnchorElement> & {
        label: string
        icon: LibIcon
        iconSize?: number
    }

/*====================== FooterLink ======================*/

/**
 * @description Props for links in Footer component items: https://documentation-components-react.vercel.app/components/footer
 * @extends LibButtonLinkBlankRequired
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLAnchorElement & HTMLButtonElement>
 * @prop text: ReactChildren
 */
export type LibFooterLink = LibButtonLinkBlankRequired &
    LibComponentItemBase<HTMLAnchorElement & HTMLButtonElement> & {
        text: ReactChildren
    }

/*====================== DragListItem ======================*/

type LibDragListItemBase = LibComponentItemBase<HTMLDivElement> & {
    id: string
}

interface DragListItemWithContentAndBadge extends LibDragListItemBase {
    title: string
    body?: string
    badge?: boolean | ListGroupItemBadgeExtended
    date?: never
    element?: never
}

interface DragListItemWithContentAndDate extends LibDragListItemBase {
    title: string
    body?: string
    badge?: never
    date?: string | Date
    element?: never
}

interface DragListItemWithElement extends LibDragListItemBase {
    title?: never
    body?: never
    badge?: never
    date?: never
    element?: JSX.Element
}

/**
 * @description Props for DragList item: https://documentation-components-react.vercel.app/components/drag-list
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop title: string => only if element is not defined
 * @prop body?: string => only if element is not defined
 * @prop badge?: boolean | ListGroupItemBadgeExtended => only if element and date are not defined
 * @prop date?: string | Date => only if element and badge are not defined
 * @prop element?: JSX.ELement => only if title and other props are not defined
 */
export type LibDragListItem =
    | DragListItemWithContentAndBadge
    | DragListItemWithContentAndDate
    | DragListItemWithElement

/*====================== HelperBottom ======================*/

interface HelperBottomWithText {
    text: string
    textColor?: LibAllColors
    fontStyle?: CssFontStyle
    icon?: LibIcon
    iconColor?: LibAllColors
    iconSize?: number
    element?: never
    linkColor?: LibColorsHover
}

interface HelperBottomWithElement {
    text?: never
    textColor?: never
    fontStyle?: never
    icon?: never
    iconColor?: never
    iconSize?: never
    element: ReactChildren
    linkColor?: LibColorsHover
}

export type LibHelperBottom =
    | string
    | HelperBottomWithText
    | HelperBottomWithElement
