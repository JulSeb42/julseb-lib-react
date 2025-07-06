import type { FC } from "react"
import { INPUT_ICON_CONTAINER_CLASSES } from "./classes"
import { clsx } from "../../utils"
import type { ReactElement, LibInputVariant } from "../../types"

export const InputIcon: FC<IInputIcon> = ({ icon, inputVariant, disabled }) => {
	if (!icon) return null

	return (
		<span
			className={clsx(
				"text-primary-500",
				INPUT_ICON_CONTAINER_CLASSES,
				inputVariant === "pill" && "ml-1",
				disabled && "text-gray-500",
				"input-icon-container",
			)}
		>
			{icon}
		</span>
	)
}

interface IInputIcon {
	icon: ReactElement | undefined
	inputVariant: LibInputVariant | undefined
	disabled: boolean | undefined
}
