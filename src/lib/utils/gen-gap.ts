import type { LibSpacers } from "../types"

export const genGap: Record<LibSpacers, string> = {
	"2xl": "gap-12",
	xl: "gap-8",
	lg: "gap-6",
	md: "gap-4",
	sm: "gap-3",
	xs: "gap-2",
	"2xs": "gap-1",
	"0px": "0px",
}

export const genRowGap: Record<LibSpacers, string> = {
	"2xl": "gap-y-12",
	xl: "gap-y-8",
	lg: "gap-y-6",
	md: "gap-y-4",
	sm: "gap-y-3",
	xs: "gap-y-2",
	"2xs": "gap-y-1",
	"0px": "0px",
}

export const genColGap: Record<LibSpacers, string> = {
	"2xl": "gap-x-12",
	xl: "gap-x-8",
	lg: "gap-x-6",
	md: "gap-x-4",
	sm: "gap-x-3",
	xs: "gap-x-2",
	"2xs": "gap-x-1",
	"0px": "0px",
}
