import type { ReactNode } from "react"
import type { LibComponentBase, LibSpacers } from "../../types"

export interface ILibMasonry extends LibComponentBase<HTMLDivElement> {
	children?: Array<ReactNode>
	col?: number
	gap?: LibSpacers
}
