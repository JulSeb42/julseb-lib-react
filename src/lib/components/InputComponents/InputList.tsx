import type { Ref, FC } from "react"
import { clsx } from "../../utils"
import { INPUT_LIST_CLASSES } from "./classes"
import type {
	ClassNames,
	LibInputBackground,
	LibInputListDirection,
	LibInputValidation,
	LibInputVariant,
	ReactChildren,
} from "../../types"

export const InputList: FC<IInputList> = ({
	ref,
	className,
	listDirection,
	inputVariant,
	inputBackground,
	validation,
	children,
	isOpen,
}) => {
	return (
		<div
			className={clsx(
				INPUT_LIST_CLASSES({
					isOpen,
					listDirection,
					inputVariant,
					inputBackground,
					validation,
				}),
				"z-0 overflow-y-scroll",
				"input-list",
				className,
			)}
			ref={ref}
		>
			{children}
		</div>
	)
}

interface IInputList {
	ref?: Ref<HTMLDivElement>
	className?: ClassNames
	listDirection: LibInputListDirection | undefined
	inputVariant: LibInputVariant | undefined
	inputBackground: LibInputBackground | undefined
	validation: LibInputValidation | undefined
	children?: ReactChildren
	isOpen: boolean
}
