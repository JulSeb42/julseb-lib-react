import type { LibToastStatus } from "../../types"

// export const genToastColors = () => {
// 	const colors: Record<LibToastStatus, string> = {

// 	}

// 	return colors
// }

export const genToastColors: Record<LibToastStatus, string> = {
	success: "border-success-500 bg-success-50",
	error: "border-danger-500 bg-danger-50",
	warning: "border-warning-500 bg-warning-50",
	info: "border-primary-500 bg-primary-50",
	loading: "border-gray-500 bg-gray-50",
}
