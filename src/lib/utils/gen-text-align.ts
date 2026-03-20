import type { CssTextAlign } from "../types"

/**
 * Maps CSS `text-align` values to their corresponding Tailwind CSS text alignment utility classes.
 *
 * @type {Record<CssTextAlign, string>}
 * @example
 * genTextAlign.center // "text-center"
 */
export const genTextAlign: Record<CssTextAlign, string> = {
	left: "text-left",
	center: "text-center",
	right: "text-right",
	justify: "text-justify",
	start: "text-start",
	end: "text-end",
}
