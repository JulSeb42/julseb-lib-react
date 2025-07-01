import type { FC } from "react"
import { clsx } from "../../utils"
import type { ReactChildren } from "../../types"

export const InputWithListWrapper: FC<IInputWithListWrapper> = ({
	isOpen,
	children,
}) => {
	return (
		<div className={clsx("z-10 relative", isOpen && "z-20")}>
			{children}
		</div>
	)
}

interface IInputWithListWrapper {
	isOpen: boolean
	children?: ReactChildren
}
