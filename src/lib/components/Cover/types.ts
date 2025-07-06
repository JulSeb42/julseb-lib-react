import type { LibComponentBase, LibOverlays } from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

export interface ILibCover
	extends LibComponentBase<HTMLDivElement>,
		ILibFlexbox {
	img: string
	alt?: string
	overlay?: LibOverlays
}
