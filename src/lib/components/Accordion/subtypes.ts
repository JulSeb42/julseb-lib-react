import type {
	LibComponentBase,
	LibAccordionIcon,
	LibAccordionVariant,
	DispatchState,
} from "../../types"
import type { ILibText } from "../Text/types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN ACCORDION COMPONENTS

/*====================== AccordionTitle ======================*/

export interface ILibAccordionTitle
	extends LibComponentBase<HTMLButtonElement> {
	icon?: LibAccordionIcon
	variant?: LibAccordionVariant
	isOpen: boolean
	setIsOpen: DispatchState<boolean>
}

/*====================== AccordionContent ======================*/

export type ILibAccordionContent = ILibText & {
	variant?: LibAccordionVariant
	isOpen: boolean
}
