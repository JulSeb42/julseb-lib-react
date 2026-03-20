import type { CssVerticalAlign } from "../types"

/**
 * Maps CSS `vertical-align` values to their corresponding Tailwind CSS vertical alignment utility classes.
 *
 * @type {Record<CssVerticalAlign, string>}
 * @example
 * genVAlign["align-middle"] // "align-middle"
 */
export const genVAlign: Record<CssVerticalAlign, string> = {
	"align-baseline": "align-baseline",
	"align-top": "align-top",
	"align-middle": "align-middle",
	"align-bottom": "align-bottom",
	"align-text-top": "align-text-top",
	"align-text-bottom": "align-text-bottom",
	"align-sub": "align-sub",
	"align-super": "align-super",
}
