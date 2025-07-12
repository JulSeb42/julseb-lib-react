import { LAYOUTS } from "../../lib"
import type { Variable } from "../types"

export const allLayouts: Array<Variable> = [
	{
		name: "main-default",
		variable: "LAYOUTS.MAIN_DEFAULT",
		css: LAYOUTS.MAIN_DEFAULT,
		value: "600px",
		twClass: "w-(--main-default)",
	},
	{
		name: "main-large",
		variable: "LAYOUTS.MAIN_LARGE",
		css: LAYOUTS.MAIN_LARGE,
		value: "800px",
		twClass: "w-(--main-large)",
	},
	{
		name: "main-form",
		variable: "LAYOUTS.MAIN_FORM",
		css: LAYOUTS.MAIN_FORM,
		value: "400px",
		twClass: "w-(--main-form)",
	},
	{
		name: "main-full",
		variable: "LAYOUTS.MAIN_FULL",
		css: LAYOUTS.MAIN_FULL,
		value: "100%",
		twClass: "w-(--main-full)",
	},
	{
		name: "aside-default",
		variable: "LAYOUTS.ASIDE_DEFAULT",
		css: LAYOUTS.ASIDE_DEFAULT,
		value: "250px",
		twClass: "w-(--aside-default)",
	},
	{
		name: "aside-small",
		variable: "LAYOUTS.ASIDE_SMALL",
		css: LAYOUTS.ASIDE_SMALL,
		value: "200px",
		twClass: "w-(--aside-small)",
	},
]
