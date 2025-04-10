import { forwardRef, useState } from "react"
import classNames from "classnames"
import { capitalize } from "@julseb-lib/utils"
import { AccordionButton } from "./AccordionButton"
import { AccordionContent } from "./AccordionContent"
import { StyledAccordionItem } from "./styles"
import type { ILibAccordionItem } from "./types"

/**
 * @description Returns an item for Accordion component
 * @link https://documentation-components-react.vercel.app/components/accordion
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop title: string
 * @prop icon?: "plus" | "chevron" | JSX.Element
 * @prop variant?: "basic" | "rounded"
 * @prop defaultOpen?: boolean
 */
export const AccordionItem = forwardRef<HTMLDivElement, ILibAccordionItem>(
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
                className={classNames(className, capitalize(variant))}
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
