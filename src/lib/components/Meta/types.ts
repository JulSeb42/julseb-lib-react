import type { ReactChildren } from "../../types"

interface ILibMetaBase {
	title: string
	favicon?: string
	description?: string
	generator?: string
	keywords?: Array<string>
	author?: string
	authorUrl?: string
	publisher?: string
	appName?: string
	type?:
		| "article"
		| "book"
		| "music.album"
		| "music.playlist"
		| "music.radio_station"
		| "music.song"
		| "profile"
		| "video.episode"
		| "video.movie"
		| "video.other"
		| "video. tv_show"
		| "website"
	cover?: string
	siteName?: string
	language?: string
	url?: string
	email?: string
	creator?: string
	manifest?: string
	category?: string
	twitterCard?: "app" | "player" | "summary" | "summary_large_image"
	appleTouchIcon?: string
	children?: ReactChildren
}

interface MetaWithMultiThemeColor extends ILibMetaBase {
	themeColorLight?: string
	themeColorDark?: string
	themeColor?: never
}

interface MetaWithSingleThemeColor extends ILibMetaBase {
	themeColorLight?: never
	themeColorDark?: never
	themeColor?: string
}

export type ILibMeta = MetaWithMultiThemeColor | MetaWithSingleThemeColor
