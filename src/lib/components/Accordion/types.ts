import type {
	LibComponentBase,
	LibAccordionIcon,
	LibAccordionVariant,
	LibAccordionItem,
	ReactChildren,
} from "../../types"

/*====================== Accordion ======================*/

interface ILibAccordionBase extends LibComponentBase<HTMLDivElement> {
	variant?: LibAccordionVariant
	icon?: LibAccordionIcon
}

interface AccordionWithItems extends ILibAccordionBase {
	items?: Array<LibAccordionItem>
	children?: never
}

interface AccordionWithChildren extends ILibAccordionBase {
	items?: never
	children?: ReactChildren
}

export type ILibAccordion = AccordionWithItems | AccordionWithChildren

/*====================== AccordionItem ======================*/

export interface ILibAccordionItem
	extends Omit<LibComponentBase<HTMLDivElement>, "title"> {
	title: ReactChildren
	children?: ReactChildren
	icon?: LibAccordionIcon
	variant?: LibAccordionVariant
	defaultOpen?: boolean
}
