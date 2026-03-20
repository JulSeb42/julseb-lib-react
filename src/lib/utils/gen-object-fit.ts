import type { CssObjectFit } from "../types"

/**
 * Maps CSS `object-fit` values to their corresponding Tailwind CSS object-fit utility classes.
 *
 * @type {Record<CssObjectFit, string>}
 * @example
 * genObjectFit.cover // "object-cover"
 */
export const genObjectFit: Record<CssObjectFit, string> = {
	contain: "object-contain",
	cover: "object-cover",
	fill: "object-fill",
	none: "object-none",
	"scale-down": "object-scale-down",
}
