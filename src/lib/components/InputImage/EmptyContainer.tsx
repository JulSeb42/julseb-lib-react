import type { FC } from "react"
import { BiImage } from "react-icons/bi"
import { clsx } from "../../utils"
import type { ILibEmptyContainer } from "./subtypes"

const EmptyContainer: FC<ILibEmptyContainer> = ({ icons }) => {
	return (
		<div
			className={clsx(
				"flex justify-center items-center w-full h-full",
				"empty-container",
			)}
		>
			{icons?.empty ?? <BiImage size={48} />}
		</div>
	)
}

export default EmptyContainer
