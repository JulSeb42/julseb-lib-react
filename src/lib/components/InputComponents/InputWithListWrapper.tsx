import type { FC, Ref } from "react"
import { clsx } from "../../utils"
import type { ReactChildren } from "../../types"

export const InputWithListWrapper: FC<IInputWithListWrapper> = ({
	isOpen,
	children,
	ref,
}) => {
	return (
		<div
			ref={ref}
			className={clsx(
				"z-10 relative",
				isOpen && "open",
				"[&.open]:z-20",
				"input-with-list-wrapper",
			)}
		>
			{children}
		</div>
	)
}

interface IInputWithListWrapper {
	ref?: Ref<HTMLDivElement>
	isOpen: boolean
	children?: ReactChildren
}
