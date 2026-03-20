import type { LibFontWeights } from "../types"

/**
 * Maps font weight tokens to their corresponding Tailwind CSS font-weight utility classes.
 *
 * @type {Record<LibFontWeights, string>}
 * @example
 * genFontWeight.bold // "font-bold"
 */
export const genFontWeight: Record<LibFontWeights, string> = {
	thin: "font-thin",
	light: "font-light",
	normal: "font-normal",
	bold: "font-bold",
	black: "font-black",
}
