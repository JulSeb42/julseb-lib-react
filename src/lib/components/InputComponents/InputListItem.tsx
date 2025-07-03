import type { FC, MouseEventHandler } from "react"
import { clsx } from "../../utils"
import type { LibValidationStatus, ReactChildren } from "../../types"

export const InputListItem: FC<IInputListItem> = ({
	onClick,
	content,
	cursor,
	index,
	validationStatus,
	value,
	"aria-label": ariaLabel,
	children,
	isActive,
}) => {
	return (
		<button
			role="button"
			onClick={onClick}
			className={clsx(
				"flex items-center gap-2 p-2 w-full text-left",
				validationStatus === false
					? "hover:bg-danger-300 active:bg-danger-600"
					: validationStatus === true
						? "hover:bg-success-300 active:bg-success-600"
						: "hover:bg-primary-300 active:bg-primary-600",
				(cursor === index || isActive) &&
					(validationStatus === false
						? "bg-danger-300"
						: validationStatus === true
							? "bg-success-300"
							: "bg-primary-300"),
				(content === value || isActive) && "text-white",
				(content === value || isActive) &&
					(validationStatus === false
						? "bg-danger-500"
						: validationStatus === true
							? "bg-success-500"
							: "bg-primary-500"),
			)}
			aria-label={ariaLabel}
			type="button"
		>
			{content}
			{children}
		</button>
	)
}

interface IInputListItem {
	onClick: MouseEventHandler<HTMLButtonElement>
	content: string | undefined
	value: string
	cursor: number | undefined
	index: number | undefined
	validationStatus: LibValidationStatus | undefined
	"aria-label": string
	isActive?: boolean
	children?: ReactChildren
}
