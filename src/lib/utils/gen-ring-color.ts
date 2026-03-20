import type { LibColorsHover } from "../types"

/**
 * Maps each color variant to its corresponding Tailwind CSS focus ring utility classes.
 *
 * @type {Record<LibColorsHover, string>}
 * @example
 * genRingColor.primary // "focus:ring-1 focus:ring-primary-800"
 */
export const genRingColor: Record<LibColorsHover, string> = {
	primary: "focus:ring-1 focus:ring-primary-800",
	secondary: "focus:ring-1 focus:ring-secondary-800",
	success: "focus:ring-1 focus:ring-success-800",
	danger: "focus:ring-1 focus:ring-danger-800",
	warning: "focus:ring-1 focus:ring-warning-800",
	gray: "focus:ring-1 focus:ring-gray-800",
	white: "focus:ring-1 focus:ring-gray-500",
}

/**
 * Maps each color variant to its corresponding Tailwind CSS focus ring utility classes, applied to child elements via the `[&>*]` selector.
 *
 * @type {Record<LibColorsHover, string>}
 * @example
 * genRingColorChildren.success // "[&>*]:focus:ring-1 [&>*]:focus:ring-success-800"
 */
export const genRingColorChildren: Record<LibColorsHover, string> = {
	primary: "[&>*]:focus:ring-1 [&>*]:focus:ring-primary-800",
	secondary: "[&>*]:focus:ring-1 [&>*]:focus:ring-secondary-800",
	success: "[&>*]:focus:ring-1 [&>*]:focus:ring-success-800",
	danger: "[&>*]:focus:ring-1 [&>*]:focus:ring-danger-800",
	warning: "[&>*]:focus:ring-1 [&>*]:focus:ring-warning-800",
	gray: "[&>*]:focus:ring-1 [&>*]:focus:ring-gray-800",
	white: "[&>*]:focus:ring-1 [&>*]:focus:ring-gray-500",
}
