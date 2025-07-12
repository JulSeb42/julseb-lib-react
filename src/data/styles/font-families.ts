import { FONT_FAMILIES } from "../../lib"
import type { Variable } from "../types"

export const allFontFamilies: Array<Variable> = [
	{
		name: "Sans",
		variable: "FONT_FAMILIES.SANS",
		css: FONT_FAMILIES.SANS,
		value: "lato",
		twClass: "font-sans",
	},
	{
		name: "Mono",
		variable: "FONT_FAMILIES.MONO",
		css: FONT_FAMILIES.MONO,
		value: "monocode",
		twClass: "font-mono",
	},
]
