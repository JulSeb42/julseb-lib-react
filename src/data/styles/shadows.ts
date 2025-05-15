import type { Variable } from "../types"
import { SHADOWS, designTokens } from "../../lib"

export const allShadows: Array<Variable> = [
	{
		name: "Shadow 2XS",
		variable: "SHADOWS.2XS",
		css: SHADOWS["2XS"],
		value: designTokens.libShadows["xs"],
		twClass: "shadow-2xs",
	},
	{
		name: "Shadow XS",
		variable: "SHADOWS.XS",
		css: SHADOWS.XS,
		value: designTokens.libShadows["xs"],
		twClass: "shadow-xs",
	},
	{
		name: "Shadow SM",
		variable: "SHADOWS.SM",
		css: SHADOWS.SM,
		value: designTokens.libShadows["sm"],
		twClass: "shadow-sm",
	},
	{
		name: "Shadow MD",
		variable: "SHADOWS.MD",
		css: SHADOWS.MD,
		value: designTokens.libShadows["md"],
		twClass: "shadow-md",
	},
	{
		name: "Shadow LG",
		variable: "SHADOWS.LG",
		css: SHADOWS.LG,
		value: designTokens.libShadows["lg"],
		twClass: "shadow-lg",
	},
	{
		name: "Shadow XL",
		variable: "SHADOWS.XL",
		css: SHADOWS.XL,
		value: designTokens.libShadows["xl"],
		twClass: "shadow-xl",
	},
	{
		name: "Shadow 2XL",
		variable: "SHADOWS.2XL",
		css: SHADOWS["2XL"],
		value: designTokens.libShadows["2xl"],
		twClass: "shadow-2xl",
	},
	{
		name: "Shadow NONE",
		variable: "SHADOWS.NONE",
		css: SHADOWS.NONE,
		value: designTokens.libShadows["none"],
		twClass: "shadow-none",
	},
]
