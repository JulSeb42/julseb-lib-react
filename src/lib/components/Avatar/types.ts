/*=============================================== Avatar types ===============================================*/

import type { CSSProperties } from "react"
import type {
    LibComponentBase,
    ILibBorder,
    LibAllColors,
    ILibRadius,
    ILibPadding,
    LibIcon,
    LibAvatarBadgePosition,
    LibFontSizes,
} from "../../types"

interface ILibAvatarBase extends LibComponentBase<HTMLSpanElement> {
    size?: number
    border?: ILibBorder
    borderRadius?: ILibRadius
}

interface AvatarWithImage extends ILibAvatarBase {
    img:
        | string
        | {
              src: string
              alt: string
              fallback?: string
          }
    letter?: never
    fontSize?: never
    icon?: never
    iconSize?: never
    iconBaseUrl?: never
    backgroundColor?: never
    contentColor?: never
}

interface AvatarWithLetter extends ILibAvatarBase {
    img?: never
    letter: string
    fontSize?: LibFontSizes
    icon?: never
    iconSize?: never
    iconBaseUrl?: never
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
}

interface AvatarWithIcon extends ILibAvatarBase {
    img?: never
    letter?: never
    fontSize?: never
    icon: LibIcon
    iconSize?: number
    iconBaseUrl?: string
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
}

type ILibAvatarContent = AvatarWithImage | AvatarWithLetter | AvatarWithIcon

type AvatarWithBadge = ILibAvatarContent & {
    badge?:
        | boolean
        | number
        | {
              content?: number
              contentColor?: LibAllColors
              backgroundColor?: LibAllColors
              position?: LibAvatarBadgePosition
              size?: number
              padding?: ILibPadding
              outline?: ILibBorder
          }
    containerStyle?: CSSProperties
}

type AvatarWithoutBadge = ILibAvatarContent & {
    badge?: undefined | false
    containerStyle?: never
}

export type ILibAvatar = AvatarWithBadge | AvatarWithoutBadge
