import type { FC } from "react"
import { clsx } from "../../utils"
import { PREFIX_CLASSES } from "./classes"

export const InputPrefix: FC<IInputPrefix> = ({ prefix }) => {
	if (!prefix) return null

	return <span className={clsx(PREFIX_CLASSES)}>{prefix}</span>
}

interface IInputPrefix {
	prefix: string | undefined
}
