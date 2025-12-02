import type {
	Components,
	AllowElement,
	ExtraProps,
	HooksOptions,
	Options,
	UrlTransform,
} from "react-markdown"

export type ILibMarkdownContainer = ExtraProps &
	HooksOptions &
	Options & {
		components?: Components
		allowElement?: AllowElement
		urlTransform?: UrlTransform
	}
