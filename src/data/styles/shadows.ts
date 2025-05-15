import type { Variable } from "../types"
import { SHADOWS, designTokens } from "../../lib"

export const allShadows: Array<Variable> = [
	{
		name: "Shadow XS",
		variable: "SHADOWS.XS",
		css: SHADOWS.XS,
		value: designTokens.libShadows["xs"],
	},
	{
		name: "Shadow SM",
		variable: "SHADOWS.SM",
		css: SHADOWS.SM,
		value: designTokens.libShadows["sm"],
	},
	{
		name: "Shadow MD",
		variable: "SHADOWS.MD",
		css: SHADOWS.MD,
		value: designTokens.libShadows["md"],
	},
	{
		name: "Shadow LG",
		variable: "SHADOWS.LG",
		css: SHADOWS.LG,
		value: designTokens.libShadows["lg"],
	},
	{
		name: "Shadow XL",
		variable: "SHADOWS.XL",
		css: SHADOWS.XL,
		value: designTokens.libShadows["xl"],
	},
	{
		name: "Shadow 2XL",
		variable: "SHADOWS.2XL",
		css: SHADOWS["2XL"],
		value: designTokens.libShadows["2xl"],
	},
	{
		name: "Shadow NONE",
		variable: "SHADOWS.NONE",
		css: SHADOWS.NONE,
		value: designTokens.libShadows["none"],
	},
]
