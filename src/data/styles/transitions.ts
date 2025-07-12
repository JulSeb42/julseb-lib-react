import { TRANSITIONS } from "../../lib"
import type { Variable } from "../types"

export const allTransitions: Array<Variable> = [
	{
		name: "short",
		variable: "TRANSITIONS.SHORT",
		css: TRANSITIONS.SHORT,
		value: "all 200ms ease",
		twClass: "transition-(--transition-short)",
	},
	{
		name: "long",
		variable: "TRANSITIONS.LONG",
		css: TRANSITIONS.LONG,
		value: "all 500ms ease",
		twClass: "transition-(--transition-long)",
	},
	{
		name: "bezier",
		variable: "TRANSITIONS.BEZIER",
		css: TRANSITIONS.BEZIER,
		value: "all 500ms cubic-bezier(0.25, 0.75, 0, 0.66)",
		twClass: "transition-(--transition-bezier)",
	},
]
