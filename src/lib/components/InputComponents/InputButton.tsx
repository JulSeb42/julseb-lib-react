import type { FC, MouseEventHandler } from "react"
import { clsx, genRingColor } from "../../utils"
import { INPUT_BUTTON_CLASSES } from "./classes"
import type { ClassNames, ReactChildren } from "../../types"

export const InputButton: FC<IInputButton> = ({
	onClick,
	children,
	className,
}) => {
	return (
		<button
			onClick={onClick}
			className={clsx(
				INPUT_BUTTON_CLASSES,
				genRingColor["primary"],
				"input-button",
				className,
			)}
			type="button"
		>
			{children}
		</button>
	)
}

interface IInputButton {
	onClick?: MouseEventHandler<HTMLButtonElement>
	children?: ReactChildren
	className?: ClassNames
}
