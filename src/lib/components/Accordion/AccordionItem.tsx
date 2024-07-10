/*=============================================== AccordionItem component ===============================================*/

import { forwardRef, useState } from "react"
import type { LibComponentBase } from "../../types"
import { AccordionButton } from "./AccordionButton"
import { AccordionContent } from "./AccordionContent"
import { StyledAccordionItem } from "./styles"
import type { AccordionIcon, AccordionVariant } from "./types"

interface AccordionItemProps extends LibComponentBase<HTMLDivElement> {
    title: string
    icon?: AccordionIcon
    variant?: AccordionVariant
    defaultOpen?: boolean
}

/**
 * @description Returns an item for Accordion component
 * @link https://documentation-components-react.vercel.app/components/accordion
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop title: string
 * @prop defaultOpen?: boolean
 * @prop variant?: "basic" | "rounded"
 * @prop icon?: "plus" | "chevron" | JSX.Element
 */

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
    (
        {
            "data-testid": testid,
            className,
            as,
            children,
            title,
            icon = "plus",
            defaultOpen = false,
            variant = "basic",
            ...rest
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(defaultOpen)

        return (
            <StyledAccordionItem
                data-testid={testid}
                as={as}
                ref={ref}
                className={className}
                $variant={variant}
                {...rest}
            >
                <AccordionButton
                    data-testid={testid}
                    className={className}
                    icon={icon}
                    title={title}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    variant={variant}
                />

                <AccordionContent
                    data-testid={testid}
                    className={className}
                    isOpen={isOpen}
                    variant={variant}
                >
                    {children}
                </AccordionContent>
            </StyledAccordionItem>
        )
    }
)
