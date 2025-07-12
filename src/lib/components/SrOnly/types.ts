import type { LibComponentBase } from "../../types"

export interface ILibSrOnly
	extends Pick<
		LibComponentBase<HTMLDivElement>,
		"ref" | "element" | "children"
	> {}
