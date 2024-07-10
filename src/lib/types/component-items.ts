/*=============================================== Components items types ===============================================*/

import type { ForwardedRef } from "react"
import type {
    LibButtonLinkBlank,
    LibAllColors,
    LibIcon,
    LibButtonLinkBlankRequired,
    LibSpacers,
    LibToastStatus,
    ReactChildren,
} from "./"

/*====================== ButtonGroup ======================*/

type ButtonGroupItemsBase = LibButtonLinkBlank & {
    "data-testid"?: string
    "aria-label"?: string
    className?: string
}

type ButtonGroupItemText = ButtonGroupItemsBase & {
    text: string
    iconLeft?: LibIcon
    iconRight?: LibIcon
    iconOnly?: never
    iconSizes?: {
        left?: number
        right?: number
        only?: never
    }
}

type ButtonGroupItemIcon = ButtonGroupItemsBase & {
    text?: never
    iconLeft?: never
    iconRight?: never
    iconOnly: LibIcon
    iconSizes?: {
        left?: never
        right?: never
        only?: number
    }
}

/**
 * @description Props for ButtonGroup component items: https://documentation-components-react.vercel.app/components/button-group
 * @prop text: string => only if `iconOnly` is not defined
 * @prop iconLeft?: string | JSX.Element
 * @prop iconRight?: string | JSX.Element
 * @prop iconOnly: string | JSX.Element => only if `text` is not defined
 * @prop iconSizes?: { left?: number; right?: number; only?: number }
 * @prop onClick?: void => only if `to` & `href` are not defined
 * @prop disabled?: boolean => only if `onClick` is defined
 * @prop to?: string => only if `onClick` & `href` are not defined
 * @prop href?: string => only if `to` & `onClick` are not defined
 * @prop blank?: boolean => only if `to` & `href` are defined
 * @prop "aria-label"?: string
 */
export type LibButtonGroupItem = ButtonGroupItemText | ButtonGroupItemIcon

/*====================== ListGroup ======================*/

type ListGroupItemBadgeColor = {
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
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

type ListGroupItemBadgeExtended =
    | ListGroupItemBadgeIcon
    | ListGroupItemBadgeNumber

type ListGroupItemBase = LibButtonLinkBlank & {
    "data-testid"?: string
    className?: string
    text: string
    subtext?: string
    ref?: ForwardedRef<HTMLLIElement>
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
 * @prop text: string
 * @prop subtext?: string
 * @prop ref?: ForwardedRef<HTMLLIElement>
 * @prop onClick?: void => only if `to` & `href` are not defined
 * @prop disabled?: boolean => only if `onClick` is defined
 * @prop to?: string => only if `onClick` & `href` are not defined
 * @prop href?: string => only if `to` & `onClick` are not defined
 * @prop blank?: boolean => only if `to` & `href` are defined
 * @prop badge?: boolean | { icon?: string | JSX.Element => only if `number` is not defined; number?: number => only if `icon` is not defined; backgroundColor?: LibAllColors; contentColor?: LibAllColors } => only if `date` is not defined
 * @prop date?: string | Date => only if `badge` is not defined
 * @prop onClick?: void => only if `to` & `href` are not defined
 * @prop disabled?: boolean => only if `onClick` is defined
 * @prop to?: string => only if `onClick` & `href` are not defined
 * @prop href?: string => only if `to` & `onClick` are not defined
 * @prop blank?: boolean => only if `to` & `href` are defined
 */
export type LibListGroupItem = ListGroupItemWithBadge | ListGroupItemWithDate

/*====================== AccordionItem ======================*/

/**
 * @description Props for Accordion component items: https://documentation-components-react.vercel.app/components/accordion
 * @prop title: string
 * @prop isOpen?: boolean
 * @prop content?: string | ReactChildren
 * @prop ref?: ForwardedRef<HTMLDivElement>
 */
export interface LibAccordionItem {
    "data-testid"?: string
    className?: string
    title: string
    content?: string | ReactChildren
    defaultOpen?: boolean
    ref?: ForwardedRef<HTMLDivElement>
}

/*====================== DropdownItem ======================*/

/**
 * @description Props for Dropdown component items: https://documentation-components-react.vercel.app/components/dropdown
 * @prop text: string
 * @prop icon?: string | JSX.Element
 * @prop iconSize?: number
 * @prop gap?: LibSpacers
 * @prop ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
 */
export type LibDropdownItem = LibButtonLinkBlankRequired & {
    "data-testid"?: string
    className?: string
    text: string
    icon?: LibIcon
    iconSize?: number
    gap?: LibSpacers
    ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
}

/*====================== Toast ======================*/

export interface LibToastOptions {
    "data-testid"?: string
    className?: string
    id?: string
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
    ref?: ForwardedRef<HTMLDivElement>
    labelClose?: string
    withTimer?: boolean
    timerBackgroundColor?: LibAllColors
}

export interface LibToast {
    title: string
    id?: string
    status?: LibToastStatus
    options?: LibToastOptions
}

/*====================== Step ======================*/

export type LibStep = LibButtonLinkBlank & {
    "data-testid"?: string
    className?: string
    text: string
}
