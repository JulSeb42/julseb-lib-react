import type { CssJustifyContent, CssJustifyItems } from "../types"

export const genJustifyContent: Record<CssJustifyContent, string> = {
	start: "justify-start",
	end: "justify-end",
	"end-safe": "justify-end-safe",
	center: "justify-center",
	"center-safe": "justify-center-safe",
	"space-between": "justify-between",
	"space-around": "justify-around",
	"space-evenly": "justify-evenly",
	stretch: "justify-stretch",
	baseline: "justify-baseline",
	normal: "justify-normal",
}

export const genJustifyItems: Record<CssJustifyItems, string> = {
	start: "justify-items-start",
	end: "justify-items-end",
	"end-safe": "justify-items-end-safe",
	center: "justify-items-center",
	"center-safe": "justify-items-center-safe",
	stretch: "justify-items-stretch",
	normal: "justify-items-normal",
}
