/*=============================================== Accordion types ===============================================*/

import type {
    LibComponentBase,
    LibAccordionItem,
    ReactChildren,
} from "../../types"

const variants = { basic: "basic", rounded: "rounded" } as const
export type AccordionVariant = keyof typeof variants

const icons = { plus: "plus", chevron: "chevron" } as const
export type AccordionIcon = keyof typeof icons | JSX.Element

interface AccordionPropsBase extends LibComponentBase<HTMLDivElement> {
    variant?: AccordionVariant
    icon?: AccordionIcon
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
