/*=============================================== Linkify types ===============================================*/

import type { TextProps } from "../Text/types"

export type LinkifyProps = TextProps & {
    blank?: boolean
    children?: string
}
