import type { LibShadows } from "../types"

/**
 * Maps each LibShadows key to its corresponding Tailwind CSS box-shadow utility class.
 *
 * @type {Record<LibShadows, string>}
 * @example
 * genBoxShadow.md // "shadow-md"
 */
export const genBoxShadow: Record<LibShadows, string> = {
	"2xs": "shadow-2xs",
	xs: "shadow-xs",
	sm: "shadow-sm",
	md: "shadow-md",
	lg: "shadow-lg",
	xl: "shadow-xl",
	"2xl": "shadow-2xl",
	none: "shadow-none",
}
