import type { FC } from "react"
import { clsx } from "../../utils"
import { SUFFIX_CLASSES } from "./classes"

export const InputSuffix: FC<IInputSuffix> = ({ suffix }) => {
	if (!suffix) return null

	return (
		<span className={clsx(SUFFIX_CLASSES, "input-suffix")}>{suffix}</span>
	)
}

interface IInputSuffix {
	suffix: string | undefined
}
