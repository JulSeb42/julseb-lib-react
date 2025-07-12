import type { Variable } from "../types"
import { RADIUS } from "../../lib"

export const allRadiuses: Array<Variable> = [
	{
		name: "Radius None",
		variable: "RADIUS.NONE",
		css: RADIUS.NONE,
		value: "0px",
		twClass: "rounded-none",
	},
	{
		name: "Radius XS",
		variable: "RADIUS.XS",
		css: RADIUS.XS,
		value: "2px",
		twClass: "rounded-xs",
	},
	{
		name: "Radius SM",
		variable: "RADIUS.SM",
		css: RADIUS.SM,
		value: "4px",
		twClass: "rounded-sm",
	},
	{
		name: "Radius Default",
		variable: "RADIUS.DEFAULT",
		css: RADIUS.DEFAULT,
		value: "6px",
		twClass: "rounded",
	},
	{
		name: "Radius MD",
		variable: "RADIUS.MD",
		css: RADIUS.MD,
		value: "8px",
		twClass: "rounded-md",
	},
	{
		name: "Radius LG",
		variable: "RADIUS.LG",
		css: RADIUS.LG,
		value: "12px",
		twClass: "rounded-lg",
	},
	{
		name: "Radius XL",
		variable: "RADIUS.XL",
		css: RADIUS.XL,
		value: "16px",
		twClass: "rounded-xl",
	},
	{
		name: "Radius 2XL",
		variable: "RADIUS.2XL",
		css: RADIUS["2XL"],
		value: "24px",
		twClass: "rounded-2xl",
	},
	{
		name: "Radius 3XL",
		variable: "RADIUS.3XL",
		css: RADIUS["3XL"],
		value: "32px",
		twClass: "rounded-3xl",
	},
	{
		name: "Radius 4XL",
		variable: "RADIUS.4XL",
		css: RADIUS["4XL"],
		value: "48px",
		twClass: "rounded-4xl",
	},
	{
		name: "Radius Full",
		variable: "RADIUS.FULL",
		css: RADIUS.FULL,
		value: "9999px",
		twClass: "rounded-full",
	},
]
