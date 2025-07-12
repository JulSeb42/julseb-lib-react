import type { Variable } from "../types"
import { SHADOWS, designTokens } from "../../lib"

export const allShadows: Array<Variable> = [
	{
		name: "Shadow 2XS",
		variable: "SHADOWS.2XS",
		css: SHADOWS["2XS"],
		value: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
		twClass: "shadow-2xs",
	},
	{
		name: "Shadow XS",
		variable: "SHADOWS.XS",
		css: SHADOWS.XS,
		value: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
		twClass: "shadow-xs",
	},
	{
		name: "Shadow SM",
		variable: "SHADOWS.SM",
		css: SHADOWS.SM,
		value: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
		twClass: "shadow-sm",
	},
	{
		name: "Shadow MD",
		variable: "SHADOWS.MD",
		css: SHADOWS.MD,
		value: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
		twClass: "shadow-md",
	},
	{
		name: "Shadow LG",
		variable: "SHADOWS.LG",
		css: SHADOWS.LG,
		value: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
		twClass: "shadow-lg",
	},
	{
		name: "Shadow XL",
		variable: "SHADOWS.XL",
		css: SHADOWS.XL,
		value: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
		twClass: "shadow-xl",
	},
	{
		name: "Shadow 2XL",
		variable: "SHADOWS.2XL",
		css: SHADOWS["2XL"],
		value: "0px 10px 14px 8px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.3)",
		twClass: "shadow-2xl",
	},
	{
		name: "Shadow Inner",
		variable: "SHADOWS.INNER",
		css: SHADOWS.INNER,
		value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.06)",
		twClass: "shadow-inner",
	},
	{
		name: "Shadow None",
		variable: "SHADOWS.NONE",
		css: SHADOWS.NONE,
		value: designTokens.libShadows["none"],
		twClass: "shadow-none",
	},
]
