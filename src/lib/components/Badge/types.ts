import type {
    LibAllColors,
    LibComponentBase,
    ILibPadding,
    ILibRadius,
    LibIcon,
} from "../../types"

interface ILibBadgeBase extends LibComponentBase<HTMLSpanElement> {
    size?: number
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
    borderRadius?: ILibRadius
    padding?: ILibPadding
    children?: never
}

interface BadgeWithIcon extends ILibBadgeBase {
    icon?: LibIcon
    iconSize?: number
    iconBaseUrl?: string
    number?: never
}

interface BadgeWithNumber extends ILibBadgeBase {
    icon?: never
    iconSize?: never
    iconBaseUrl?: never
    number?: number
}

export type ILibBadge = BadgeWithIcon | BadgeWithNumber
