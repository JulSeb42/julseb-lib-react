import type { LibButtonVariant } from "../types"

export const genButtonDisabled: Record<LibButtonVariant, string> = {
	plain: "disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:text-gray-500",
	ghost: "disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:text-gray-500",
	outline:
		"disabled:border-gray-500 disabled:text-gray-500 disabled:hover:border-gray-500 disabled:hover:text-gray-500",
	transparent: "disabled:text-gray-500 disabled:hover:text-gray-500",
}
