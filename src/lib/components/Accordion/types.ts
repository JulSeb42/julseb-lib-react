/*=============================================== Accordion types ===============================================*/

import type {
    LibComponentBase,
    LibAccordionItem,
    ReactChildren,
    LibAccordionVariant,
    LibAccordionIcon,
} from "../../types"

interface AccordionPropsBase extends LibComponentBase<HTMLDivElement> {
    variant?: LibAccordionVariant
    icon?: LibAccordionIcon
}

interface AccordionWithItems extends AccordionPropsBase {
    items: Array<LibAccordionItem>
    children?: never
}

interface AccordionWithChildren extends AccordionPropsBase {
    items?: never
    children: ReactChildren
}

export type AccordionProps = AccordionWithItems | AccordionWithChildren
