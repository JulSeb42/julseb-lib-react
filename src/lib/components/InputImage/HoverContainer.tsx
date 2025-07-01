import type { FC } from "react"
import { BiEdit } from "react-icons/bi"
import { clsx } from "../../utils"
import type { ILibHoverContainer } from "./subtypes"

export const HoverContainer: FC<ILibHoverContainer> = ({
	icons,
	isVisible,
}) => {
	return (
		<div
			className={clsx(
				"inline-flex top-0 left-0 absolute justify-center items-center bg-overlay-white-80 w-full h-full transition-all duration-200 ease",
				isVisible ? "opacity-100" : "opacity-0",
			)}
		>
			{icons?.hover ?? <BiEdit size={32} />}
		</div>
	)
}
