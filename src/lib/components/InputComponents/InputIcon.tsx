import type { FC } from "react"
import { INPUT_ICON_CONTAINER_CLASSES } from "./classes"
import { clsx } from "../../utils"
import type { ReactChildren, LibInputVariant } from "../../types"

export const InputIcon: FC<IInputIcon> = ({ icon, inputVariant, disabled }) => {
	if (!icon) return null

	return (
		<span
			className={clsx(
				"text-primary-500",
				INPUT_ICON_CONTAINER_CLASSES,
				inputVariant === "pill" && "ml-1",
				disabled && "text-gray-500",
			)}
		>
			{icon}
		</span>
	)
}

interface IInputIcon {
	icon: ReactChildren | undefined
	inputVariant: LibInputVariant | undefined
	disabled: boolean | undefined
}
