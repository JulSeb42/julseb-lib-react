import type { CssAlignContent, CssAlignItems } from "../types"

export const genAlignContent: Record<CssAlignContent, string> = {
	normal: "content-normal",
	center: "content-center",
	start: "content-start",
	end: "content-end",
	"space-between": "content-between",
	"space-around": "content-around",
	"space-evenly": "content-evenly",
	baseline: "content-baseline",
	stretch: "content-stretch",
}

export const genAlignItems: Record<CssAlignItems, string> = {
	start: "items-start",
	end: "items-end",
	"end-safe": "items-end-safe",
	center: "items-center",
	"center-safe": "items-center-safe",
	baseline: "items-baseline",
	"baseline-start": "items-baseline-last",
	stretch: "items-stretch",
}
