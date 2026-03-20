import type { LibRadiuses } from "../types"

/**
 * Maps each LibRadiuses key to its corresponding Tailwind CSS border-radius class.
 *
 * @type {Record<LibRadiuses, string>}
 * @example
 * genBorderRadius.sm // "rounded-sm"
 */
export const genBorderRadius: Record<LibRadiuses, string> = {
	xs: "rounded-xs",
	sm: "rounded-sm",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl",
	"2xl": "rounded-2xl",
	"3xl": "rounded-3xl",
	"4xl": "rounded-4xl",
	full: "rounded-full",
}
