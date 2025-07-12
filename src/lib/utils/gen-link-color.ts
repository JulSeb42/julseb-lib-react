import type { LibColorsHover } from "../types"

export const genLinkColor: Record<LibColorsHover, string> = {
	primary:
		"[&_a]:font-black [&_a]:text-primary-500 [&_a]:hover:text-primary-300 [&_a]:active:text-primary-600",
	secondary:
		"[&_a]:font-black [&_a]:text-secondary-500 [&_a]:hover:text-secondary-300 [&_a]:active:text-secondary-600",
	success:
		"[&_a]:font-black [&_a]:text-success-500 [&_a]:hover:text-success-300 [&_a]:active:text-success-600",
	danger: "[&_a]:font-black [&_a]:text-danger-500 [&_a]:hover:text-danger-300 [&_a]:active:text-danger-600",
	warning:
		"[&_a]:font-black [&_a]:text-warning-500 [&_a]:hover:text-warning-300 [&_a]:active:text-warning-600",
	gray: "[&_a]:font-black [&_a]:text-gray-500 [&_a]:hover:text-gray-300 [&_a]:active:text-gray-600",
	white: "[&_a]:font-black [&_a]:text-white [&_a]:hover:text-gray-300 [&_a]:active:text-gray-100",
}

export const genButtonColor: Record<LibColorsHover, string> = {
	primary:
		"[&_button]:font-black [&_button]:text-primary-500 [&_button]:hover:text-primary-300 [&_button]:active:text-primary-600",
	secondary:
		"[&_button]:font-black [&_button]:text-secondary-500 [&_button]:hover:text-secondary-300 [&_button]:active:text-secondary-600",
	success:
		"[&_button]:font-black [&_button]:text-success-500 [&_button]:hover:text-success-300 [&_button]:active:text-success-600",
	danger: "[&_button]:font-black [&_button]:text-danger-500 [&_button]:hover:text-danger-300 [&_button]:active:text-danger-600",
	warning:
		"[&_button]:font-black [&_button]:text-warning-500 [&_button]:hover:text-warning-300 [&_button]:active:text-warning-600",
	gray: "[&_button]:font-black [&_button]:text-gray-500 [&_button]:hover:text-gray-300 [&_button]:active:text-gray-600",
	white: "[&_button]:font-black [&_button]:text-white [&_button]:hover:text-gray-300 [&_button]:active:text-gray-100",
}
