import type { ClassNames } from "../../types"
import type { ILibText } from "../Text/types"

export type ILibLinkify = ILibText & {
	blank?: boolean
	children?: string
	linkClasses?: ClassNames
}
