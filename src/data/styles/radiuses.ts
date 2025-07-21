import type { Variable } from "../types"
import { RADIUSES } from "../../lib"

export const allRadiuses: Array<Variable> = [
	{
		name: "Radius None",
		variable: "RADIUSES.NONE",
		css: RADIUSES.NONE,
		value: "0px",
		twClass: "rounded-none",
	},
	{
		name: "Radius XS",
		variable: "RADIUSES.XS",
		css: RADIUSES.XS,
		value: "2px",
		twClass: "rounded-xs",
	},
	{
		name: "Radius SM",
		variable: "RADIUSES.SM",
		css: RADIUSES.SM,
		value: "4px",
		twClass: "rounded-sm",
	},
	{
		name: "Radius Default",
		variable: "RADIUSES.DEFAULT",
		css: RADIUSES.DEFAULT,
		value: "6px",
		twClass: "rounded",
	},
	{
		name: "Radius MD",
		variable: "RADIUSES.MD",
		css: RADIUSES.MD,
		value: "8px",
		twClass: "rounded-md",
	},
	{
		name: "Radius LG",
		variable: "RADIUSES.LG",
		css: RADIUSES.LG,
		value: "12px",
		twClass: "rounded-lg",
	},
	{
		name: "Radius XL",
		variable: "RADIUSES.XL",
		css: RADIUSES.XL,
		value: "16px",
		twClass: "rounded-xl",
	},
	{
		name: "Radius 2XL",
		variable: "RADIUSES.2XL",
		css: RADIUSES["2XL"],
		value: "24px",
		twClass: "rounded-2xl",
	},
	{
		name: "Radius 3XL",
		variable: "RADIUSES.3XL",
		css: RADIUSES["3XL"],
		value: "32px",
		twClass: "rounded-3xl",
	},
	{
		name: "Radius 4XL",
		variable: "RADIUSES.4XL",
		css: RADIUSES["4XL"],
		value: "48px",
		twClass: "rounded-4xl",
	},
	{
		name: "Radius Full",
		variable: "RADIUSES.FULL",
		css: RADIUSES.FULL,
		value: "9999px",
		twClass: "rounded-full",
	},
]
