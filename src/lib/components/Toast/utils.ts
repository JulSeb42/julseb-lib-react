import type { LibThemeNames, LibToastStatus } from "../../types"

export const genToastColors = (theme: LibThemeNames) => {
	const colors: Record<LibToastStatus, string> = {
		success:
			theme === "dark"
				? "border-success-500 bg-success-950"
				: "border-success-500 bg-success-50",
		error:
			theme === "dark"
				? "border-danger-500 bg-danger-950"
				: "border-danger-500 bg-danger-50",
		warning:
			theme === "dark"
				? "border-warning-500 bg-warning-950"
				: "border-warning-500 bg-warning-50",
		info:
			theme === "dark"
				? "border-primary-500 bg-primary-950"
				: "border-primary-500 bg-primary-50",
		loading:
			theme === "dark"
				? "border-gray-500 bg-gray-950"
				: "border-gray-500 bg-gray-50",
	}

	return colors
}
