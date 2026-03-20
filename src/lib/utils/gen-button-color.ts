import type { LibButtonVariantExtended } from "../types"

/**
 * Maps button variant names to their corresponding Tailwind CSS classes for the disabled state.
 *
 * @type {Record<LibButtonVariantExtended, string>}
 * @example
 * genButtonDisabled.plain // "disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:text-gray-500!"
 */
export const genButtonDisabled: Record<LibButtonVariantExtended, string> = {
	plain: "disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:text-gray-500!",
	ghost: "disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:text-gray-500",
	outline:
		"disabled:border-gray-500 disabled:text-gray-500 disabled:hover:border-gray-500 disabled:hover:text-gray-500",
	transparent: "disabled:text-gray-500 disabled:hover:text-gray-500",
}
