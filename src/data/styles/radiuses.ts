import type { Variable } from "../types"
import { RADIUS, designTokens } from "../../lib"

export const allRadiuses: Array<Variable> = [
	{
		name: "Radius XS",
		variable: "RADIUS.XS",
		css: RADIUS.XS,
		value: designTokens.libRadius["xs"],
		twClass: "rounded-xs",
	},
	{
		name: "Radius SM",
		variable: "RADIUS.SM",
		css: RADIUS.SM,
		value: designTokens.libRadius["sm"],
		twClass: "rounded-sm",
	},
	{
		name: "Radius MD",
		variable: "RADIUS.MD",
		css: RADIUS.MD,
		value: designTokens.libRadius["md"],
		twClass: "rounded-md",
	},
	{
		name: "Radius LG",
		variable: "RADIUS.LG",
		css: RADIUS.LG,
		value: designTokens.libRadius["lg"],
		twClass: "rounded-lg",
	},
	{
		name: "Radius XL",
		variable: "RADIUS.XL",
		css: RADIUS.XL,
		value: designTokens.libRadius["xl"],
		twClass: "rounded-xl",
	},
	{
		name: "Radius 2XL",
		variable: "RADIUS.2XL",
		css: RADIUS["2XL"],
		value: designTokens.libRadius["2xl"],
		twClass: "rounded-2xl",
	},
	{
		name: "Radius 3XL",
		variable: "RADIUS.3XL",
		css: RADIUS["3XL"],
		value: designTokens.libRadius["3xl"],
		twClass: "rounded-3xl",
	},
	{
		name: "Radius 4XL",
		variable: "RADIUS.4XL",
		css: RADIUS["4XL"],
		value: designTokens.libRadius["4xl"],
		twClass: "rounded-4xl",
	},
	{
		name: "Radius FULL",
		variable: "RADIUS.FULL",
		css: RADIUS.FULL,
		value: designTokens.libRadius["full"],
		twClass: "rounded-full",
	},
]
