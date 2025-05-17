import type { CssTextAlign } from "../types"

export const genTextAlign: Record<CssTextAlign, string> = {
	left: "text-left",
	center: "text-center",
	right: "text-right",
	justify: "text-justify",
	start: "text-start",
	end: "text-end",
}
