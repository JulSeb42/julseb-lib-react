import type {
	LibAllColors,
	LibAllColorsAndOverlays,
	LibColors,
	LibColorsHover,
	LibColorsShort,
	LibOverlays,
	LibThemeNames,
} from "../types"

export const genBgColor: Record<LibColors, string> = {
	black: "bg-black",
	white: "bg-white",
	"primary-50": "bg-primary-50",
	"primary-100": "bg-primary-100",
	"primary-200": "bg-primary-200",
	"primary-300": "bg-primary-300",
	"primary-400": "bg-primary-400",
	"primary-500": "bg-primary-500",
	"primary-600": "bg-primary-600",
	"primary-700": "bg-primary-700",
	"primary-800": "bg-primary-800",
	"primary-900": "bg-primary-900",
	"primary-950": "bg-primary-950",

	"secondary-50": "bg-secondary-50",
	"secondary-100": "bg-secondary-100",
	"secondary-200": "bg-secondary-200",
	"secondary-300": "bg-secondary-300",
	"secondary-400": "bg-secondary-400",
	"secondary-500": "bg-secondary-500",
	"secondary-600": "bg-secondary-600",
	"secondary-700": "bg-secondary-700",
	"secondary-800": "bg-secondary-800",
	"secondary-900": "bg-secondary-900",
	"secondary-950": "bg-secondary-950",

	"success-50": "bg-success-50",
	"success-100": "bg-success-100",
	"success-200": "bg-success-200",
	"success-300": "bg-success-300",
	"success-400": "bg-success-400",
	"success-500": "bg-success-500",
	"success-600": "bg-success-600",
	"success-700": "bg-success-700",
	"success-800": "bg-success-800",
	"success-900": "bg-success-900",
	"success-950": "bg-success-950",

	"danger-50": "bg-danger-50",
	"danger-100": "bg-danger-100",
	"danger-200": "bg-danger-200",
	"danger-300": "bg-danger-300",
	"danger-400": "bg-danger-400",
	"danger-500": "bg-danger-500",
	"danger-600": "bg-danger-600",
	"danger-700": "bg-danger-700",
	"danger-800": "bg-danger-800",
	"danger-900": "bg-danger-900",
	"danger-950": "bg-danger-950",

	"warning-50": "bg-warning-50",
	"warning-100": "bg-warning-100",
	"warning-200": "bg-warning-200",
	"warning-300": "bg-warning-300",
	"warning-400": "bg-warning-400",
	"warning-500": "bg-warning-500",
	"warning-600": "bg-warning-600",
	"warning-700": "bg-warning-700",
	"warning-800": "bg-warning-800",
	"warning-900": "bg-warning-900",
	"warning-950": "bg-warning-950",

	"gray-50": "bg-gray-50",
	"gray-100": "bg-gray-100",
	"gray-200": "bg-gray-200",
	"gray-300": "bg-gray-300",
	"gray-400": "bg-gray-400",
	"gray-500": "bg-gray-500",
	"gray-600": "bg-gray-600",
	"gray-700": "bg-gray-700",
	"gray-800": "bg-gray-800",
	"gray-900": "bg-gray-900",
	"gray-950": "bg-gray-950",
	current: "bg-current",
	transparent: "bg-transparent",
	background: "bg-background",
	font: "bg-font",
}

export const genBgColorShort: Record<LibColorsShort, string> = {
	primary: "bg-primary-500",
	secondary: "bg-secondary-500",
	success: "bg-success-500",
	danger: "bg-danger-500",
	warning: "bg-warning-500",
	gray: "bg-gray-500",
	black: "bg-black",
	white: "bg-white",
	current: "bg-current",
	transparent: "bg-transparent",
	background: "bg-background",
}

export const genBgColor50 = (theme: LibThemeNames) => {
	const colors: Record<
		Exclude<
			LibColorsShort,
			"black" | "transparent" | "background" | "current"
		>,
		string
	> = {
		primary: theme === "dark" ? "bg-primary-950" : "bg-primary-50",
		secondary: theme === "dark" ? "bg-secondary-950" : "bg-secondary-50",
		success: theme === "dark" ? "bg-success-950" : "bg-success-50",
		danger: theme === "dark" ? "bg-danger-950" : "bg-danger-50",
		warning: theme === "dark" ? "bg-warning-950" : "bg-warning-50",
		gray: theme === "dark" ? "bg-gray-950" : "bg-gray-50",
		white: theme === "dark" ? "bg-gray-950" : "bg-white",
	}
	return colors
}

export const genBgColorHover: Record<LibColorsHover, string> = {
	primary: "bg-primary-500 hover:bg-primary-300 active:bg-primary-600",
	secondary:
		"bg-secondary-500 hover:bg-secondary-300 active:bg-secondary-600",
	success: "bg-success-500 hover:bg-success-300 active:bg-success-600",
	danger: "bg-danger-500 hover:bg-danger-300 active:bg-danger-600",
	warning: "bg-warning-500 hover:bg-warning-300 active:bg-warning-600",
	gray: "bg-gray-500 hover:bg-gray-300 active:bg-gray-600",
	white: "bg-white hover:bg-gray-300! active:bg-gray-100!",
}

export const genBgColorGhostHover: Record<LibColorsHover, string> = {
	primary: "bg-primary-50 hover:bg-primary-300 active:bg-primary-100",
	secondary: "bg-secondary-50 hover:bg-secondary-300 active:bg-secondary-100",
	success: "bg-success-50 hover:bg-success-300 active:bg-success-100",
	danger: "bg-danger-50 hover:bg-danger-300 active:bg-danger-100",
	warning: "bg-warning-50 hover:bg-warning-300 active:bg-warning-100",
	gray: "bg-gray-50 hover:bg-gray-300 active:bg-gray-100",
	white: "bg-white hover:bg-gray-300! active:bg-gray-100!",
}

export const genBgOverlay: Record<LibOverlays, string> = {
	"black-50": "bg-overlay-black-50",
	"black-80": "bg-overlay-black-80",
	"white-50": "bg-overlay-white-50",
	"white-80": "bg-overlay-white-80",
	"gradient-black": "overlay-gradient-black",
	"gradient-white": "overlay-gradient-white",
}

export const genBgAllColors: Record<LibAllColors, string> = {
	...genBgColor,
	...genBgColorShort,
}

export const genBgAllColorsAndOverlays: Record<
	LibAllColorsAndOverlays,
	string
> = {
	...genBgAllColors,
	...genBgOverlay,
}
