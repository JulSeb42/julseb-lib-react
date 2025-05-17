import type { ILibText } from "../Text/types"

export type ILibLinkify = ILibText & {
	blank?: boolean
	children?: string
	linkClasses?: string | Array<string>
}
