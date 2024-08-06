/*=============================================== Accordion types ===============================================*/

import type {
    LibComponentBase,
    LibAccordionItem,
    ReactChildren,
    LibAccordionVariant,
    LibAccordionIcon,
} from "../../types"

interface ILibAccordionBase extends LibComponentBase<HTMLDivElement> {
    variant?: LibAccordionVariant
    icon?: LibAccordionIcon
}

interface AccordionWithItems extends ILibAccordionBase {
    items: Array<LibAccordionItem>
    children?: never
}

interface AccordionWithChildren extends ILibAccordionBase {
    items?: never
    children?: ReactChildren
}

export type ILibAccordion = AccordionWithItems | AccordionWithChildren

export interface ILibAccordionItem extends LibComponentBase<HTMLDivElement> {
    title: string
    icon?: LibAccordionIcon
    variant?: LibAccordionVariant
    defaultOpen?: boolean
}
