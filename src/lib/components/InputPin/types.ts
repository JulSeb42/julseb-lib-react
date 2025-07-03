import type {
	DispatchState,
	LibComponentBase,
	LibValueInputPin,
} from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
} from "../InputComponents"

export type ILibInputPin = Omit<LibComponentBase<HTMLDivElement>, "element"> &
	Omit<ILibInputCommon, "inputVariant"> &
	ILibInputWithValidation & {
		values: LibValueInputPin
		setValues: DispatchState<LibValueInputPin>
		placeholders?: Array<string>
		hideValues?: boolean
		disabled?: boolean
		children?: never
		placeholder?: never
		onChange?: never
	}
