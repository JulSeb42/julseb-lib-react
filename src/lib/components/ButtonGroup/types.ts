import type {
	LibButtonGroupButtonItem,
	LibColorsHover,
	LibButtonVariant,
	LibRadiuses,
	LibButtonSize,
	ReactChildren,
} from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

interface ILibButtonGroupBase extends ILibFlexbox {
	color?: LibColorsHover
	variant?: LibButtonVariant
	borderRadius?: LibRadiuses
	size?: LibButtonSize
}

interface ButtonGroupWithChildren extends ILibButtonGroupBase {
	children?: ReactChildren
	buttons?: never
}

interface ButtonGroupWithButtons extends ILibButtonGroupBase {
	children?: never
	buttons: Array<LibButtonGroupButtonItem>
}

export type ILibButtonGroup = ButtonGroupWithChildren | ButtonGroupWithButtons
