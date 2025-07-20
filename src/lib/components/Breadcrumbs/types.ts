import type {
	LibAllColors,
	LibColorsHover,
	LibComponentBase,
	ReactChildren,
} from "../../types"

export interface ILibBreadcrumbs extends LibComponentBase<HTMLDivElement> {
	separator?: ReactChildren
	accentColor?: LibColorsHover
	textColor?: LibAllColors
}
