/*=============================================== Accordion sub components types ===============================================*/

import type { DispatchState, ReactChildren } from "../../types"
import type { ILibAccordion } from "./types"

// ! DO NOT EXPORT THOSE TYPES, ONLY USE THEM IN ACCORDION COMPONENTS

export interface ILibAccordionButton
    extends Pick<
        ILibAccordion,
        "data-testid" | "className" | "variant" | "icon"
    > {
    isOpen: boolean
    setIsOpen: DispatchState<boolean>
    title: string
}

export interface ILibAccordionContent
    extends Pick<ILibAccordion, "data-testid" | "className" | "variant"> {
    isOpen: boolean
    children?: ReactChildren
}
