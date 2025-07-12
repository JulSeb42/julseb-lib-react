import type { InputHTMLAttributes } from "react"
import type {
	DispatchState,
	LibButtonVariant,
	LibColorsHover,
	LibComponentBase,
	LibInputBackground,
	LibInputVariant,
	ReactElement,
} from "../../types"
import type { ILibInputCommon } from "../InputComponents"

type ILibInputCounterBase = Omit<
	LibComponentBase<HTMLInputElement>,
	"element"
> &
	InputHTMLAttributes<HTMLInputElement> &
	ILibInputCommon & {
		value: number
		setValue: DispatchState<number>
		buttonVariant?: LibButtonVariant
		icons?: { minus?: ReactElement; plus?: ReactElement }
		labelButtons?: { minus?: string; plus?: string }
		buttonsColor?: LibColorsHover
		showButtonsTooltip?: boolean
		min?: number
		max?: number
		step?: number
		type?: never
		children?: never
	}

type CounterWithInput = ILibInputCounterBase & {
	noInput?: false | undefined
	inputVariant?: LibInputVariant
	inputBackground?: LibInputBackground
}

type CounterWithoutInput = ILibInputCounterBase & {
	noInput?: true
	inputVariant?: never
	inputBackground?: never
}

export type ILibInputCounter = CounterWithInput | CounterWithoutInput
