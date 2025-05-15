import type { Variable } from "../types"
import { OVERLAYS, designTokens } from "../../lib"

export const allOverlays: Array<Variable> = [
	{
		name: "Overlay Black 50",
		variable: "OVERLAYS.BLACK_50",
		css: OVERLAYS.BLACK_50,
		value: designTokens.libOverlays["black-50"],
		twClass: "bg-black/50",
	},
	{
		name: "Overlay Black 80",
		variable: "OVERLAYS.BLACK_80",
		css: OVERLAYS.BLACK_80,
		value: designTokens.libOverlays["black-80"],
		twClass: "bg-black/80",
	},
	{
		name: "Overlay White 50",
		variable: "OVERLAYS.WHITE_50",
		css: OVERLAYS.WHITE_50,
		value: designTokens.libOverlays["white-50"],
		twClass: "bg-white/50",
	},
	{
		name: "Overlay White 80",
		variable: "OVERLAYS.WHITE_80",
		css: OVERLAYS.WHITE_80,
		value: designTokens.libOverlays["white-80"],
		twClass: "bg-white/80",
	},
	{
		name: "Overlay Gradient black",
		variable: "OVERLAYS.GRADIENT_BLACK",
		css: OVERLAYS.GRADIENT_BLACK,
		value: designTokens.libOverlays["gradient-black"],
		twClass: null
	},
	{
		name: "Overlay Gradient white",
		variable: "OVERLAYS.GRADIENT_WHITE",
		css: OVERLAYS.GRADIENT_WHITE,
		value: designTokens.libOverlays["gradient-white"],
		twClass: null
	},
]
