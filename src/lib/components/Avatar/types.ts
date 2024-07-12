/*=============================================== Avatar types ===============================================*/

import type {
    LibComponentBase,
    ILibBorder,
    LibAllColors,
    ILibRadius,
    ILibPadding,
    LibIcon,
    LibAvatarBadgePosition,
} from "../../types"

interface ILibAvatarBase extends LibComponentBase<HTMLSpanElement> {
    size?: number
    border?: ILibBorder
    borderRadius?: ILibRadius
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
}

interface AvatarWithImage extends ILibAvatarBase {
    img: string | { src: string; alt: string }
    letter?: never
    icon?: never
    iconSize?: never
    backgroundColor?: never
    contentColor?: never
}

interface AvatarWithLetter extends ILibAvatarBase {
    img?: never
    letter: string
    icon?: never
    iconSize?: never
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
}

interface AvatarWithIcon extends ILibAvatarBase {
    img?: never
    letter?: never
    icon: LibIcon
    iconSize?: number
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
}

export type ILibAvatar = AvatarWithImage | AvatarWithLetter | AvatarWithIcon
