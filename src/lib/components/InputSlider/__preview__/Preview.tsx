import { useState, type FC, type ChangeEvent } from "react"
import { InputSlider } from "../"
import type { ILibInputSlider } from "../types"

export const Preview: FC<ILibInputSlider> = props => {
	const [value, setValue] = useState(50)

	return (
		<InputSlider
			{...props}
			value={value}
			onChange={(e: ChangeEvent<HTMLInputElement>) =>
				setValue(Number(e.target.value))
			}
		/>
	)
}
