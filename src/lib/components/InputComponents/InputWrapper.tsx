import { type FC } from "react"
import { clsx } from "../../utils"
import { INPUT_CONTAINER_CLASSES } from "./classes"
import type {
	ClassNames,
	LibInputBackground,
	LibInputValidation,
	LibInputVariant,
	ReactChildren,
} from "../../types"

export const InputWrapper: FC<IInputWrapper> = ({
	children,
	validation,
	inputBackground,
	inputVariant,
	className,
	hasListOpen,
}) => {
	return (
		<div
			className={clsx(
				INPUT_CONTAINER_CLASSES({
					validation,
					inputBackground,
					inputVariant,
					hasListOpen,
				}),
				className,
			)}
		>
			{children}
		</div>
	)
}

interface IInputWrapper {
	children?: ReactChildren
	validation: LibInputValidation | undefined
	inputBackground: LibInputBackground | undefined
	inputVariant: LibInputVariant | undefined
	className: ClassNames | undefined
	hasListOpen?: boolean
}
