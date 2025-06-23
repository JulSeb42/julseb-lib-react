import type { LibColorsHover } from "../types"

export const genLinkColor: Record<LibColorsHover, string> = {
	primary:
		"[&>a]:font-black [&>a]:text-primary-500 [&>a]:hover:text-primary-300 [&>a]:active:text-primary-600",
	secondary:
		"[&>a]:font-black [&>a]:text-secondary-500 [&>a]:hover:text-secondary-300 [&>a]:active:text-secondary-600",
	success:
		"[&>a]:font-black [&>a]:text-success-500 [&>a]:hover:text-success-300 [&>a]:active:text-success-600",
	danger: "[&>a]:font-black [&>a]:text-danger-500 [&>a]:hover:text-danger-300 [&>a]:active:text-danger-600",
	warning:
		"[&>a]:font-black [&>a]:text-warning-500 [&>a]:hover:text-warning-300 [&>a]:active:text-warning-600",
	gray: "[&>a]:font-black [&>a]:text-gray-500 [&>a]:hover:text-gray-300 [&>a]:active:text-gray-600",
	white: "[&>a]:font-black [&>a]:text-white [&>a]:hover:text-gray-300 [&>a]:active:text-gray-100",
}

export const genButtonColor: Record<LibColorsHover, string> = {
	primary:
		"[&>button]:font-black [&>button]:text-primary-500 [&>button]:hover:text-primary-300 [&>button]:active:text-primary-600",
	secondary:
		"[&>button]:font-black [&>button]:text-secondary-500 [&>button]:hover:text-secondary-300 [&>button]:active:text-secondary-600",
	success:
		"[&>button]:font-black [&>button]:text-success-500 [&>button]:hover:text-success-300 [&>button]:active:text-success-600",
	danger: "[&>button]:font-black [&>button]:text-danger-500 [&>button]:hover:text-danger-300 [&>button]:active:text-danger-600",
	warning:
		"[&>button]:font-black [&>button]:text-warning-500 [&>button]:hover:text-warning-300 [&>button]:active:text-warning-600",
	gray: "[&>button]:font-black [&>button]:text-gray-500 [&>button]:hover:text-gray-300 [&>button]:active:text-gray-600",
	white: "[&>button]:font-black [&>button]:text-white [&>button]:hover:text-gray-300 [&>button]:active:text-gray-100",
}
