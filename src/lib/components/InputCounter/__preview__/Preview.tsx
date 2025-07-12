import { useState, type FC } from "react"
import { InputCounter } from "../InputCounter"
import type { ILibInputCounter } from "../types"

export const Preview: FC<
	Omit<ILibInputCounter, "value" | "setValue">
> = props => {
	const [value, setValue] = useState(1)

	return (
		<InputCounter value={value} setValue={setValue} {...(props as any)} />
	)
}
