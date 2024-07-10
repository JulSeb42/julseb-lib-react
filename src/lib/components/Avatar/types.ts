/*=============================================== Avatar types ===============================================*/

import type {
    LibComponentBase,
    LibBorderProps,
    LibAllColors,
    LibRadiusProps,
    LibPaddingProps,
    LibIcon,
} from "../../types"

const badgePositions = { top: "top", bottom: "bottom" } as const
export type AvatarBadgePosition = keyof typeof badgePositions

interface AvatarPropsBase extends LibComponentBase<HTMLSpanElement> {
    size?: number
    border?: LibBorderProps
    borderRadius?: LibRadiusProps
    badge?:
        | boolean
        | number
        | {
              content?: number
              contentColor?: LibAllColors
              backgroundColor?: LibAllColors
              position?: AvatarBadgePosition
              size?: number
              padding?: LibPaddingProps
              outline?: LibBorderProps
          }
}

interface AvatarPropsImage extends AvatarPropsBase {
    img: string | { src: string; alt: string }
    letter?: never
    icon?: never
    iconSize?: never
    backgroundColor?: never
    contentColor?: never
}

interface AvatarPropsLetter extends AvatarPropsBase {
    img?: never
    letter: string
    icon?: never
    iconSize?: never
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
}

interface AvatarPropsIcon extends AvatarPropsBase {
    img?: never
    letter?: never
    icon: LibIcon
    iconSize?: number
    backgroundColor?: LibAllColors
    contentColor?: LibAllColors
}

export type AvatarProps = AvatarPropsImage | AvatarPropsLetter | AvatarPropsIcon
