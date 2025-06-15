import type { ReactChildren } from "../../types"

export interface ILibMeta {
	title: string
	favicon?: string
	description?: string
	keywords?: Array<string>
	author?: string
	publisher?: string
	type?: string
	cover?: string
	siteName?: string
	language?: string
	url?: string
	email?: string
	children?: ReactChildren
}
