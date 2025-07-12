import type { Variable } from "../types"
import { OVERLAYS } from "../../lib"

export const allOverlays: Array<Variable> = [
	{
		name: "Overlay Black 50",
		variable: "OVERLAYS.BLACK_50",
		css: OVERLAYS.BLACK_50,
		value: "rgba(0, 0, 0, 0.5)",
		twClass: "bg-overlay-black-50",
	},
	{
		name: "Overlay Black 80",
		variable: "OVERLAYS.BLACK_80",
		css: OVERLAYS.BLACK_80,
		value: "rgba(0, 0, 0, 0.8)",
		twClass: "bg-overlay-black-80",
	},
	{
		name: "Overlay White 50",
		variable: "OVERLAYS.WHITE_50",
		css: OVERLAYS.WHITE_50,
		value: "rgba(255, 255, 255, 0.5)",
		twClass: "bg-overlay-white-50",
	},
	{
		name: "Overlay White 80",
		variable: "OVERLAYS.WHITE_80",
		css: OVERLAYS.WHITE_80,
		value: "rgba(255, 255, 255, 0.8)",
		twClass: "bg-overlay-white-80",
	},
	{
		name: "Overlay Gradient black",
		variable: "OVERLAYS.GRADIENT_BLACK",
		css: OVERLAYS.GRADIENT_BLACK,
		value: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.56) 100%)",
		twClass: "bg-overlay-gradient-black",
	},
	{
		name: "Overlay Gradient white",
		variable: "OVERLAYS.GRADIENT_WHITE",
		css: OVERLAYS.GRADIENT_WHITE,
		value: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.35) 100%)",
		twClass: "bg-overlay-gradient-white",
	},
]
