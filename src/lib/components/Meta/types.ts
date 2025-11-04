import type { ReactChildren } from "../../types"

export interface ILibMeta {
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
	themeColor?: string
	children?: ReactChildren
}
