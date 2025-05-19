import { useState, type FC } from "react"
import classNames from "classnames"
import { capitalize } from "@julseb-lib/utils"
import { AccordionButton } from "./AccordionButton"
import { AccordionContent } from "./AccordionContent"
import { StyledAccordionItem } from "./styles"
import type { ILibAccordionItem } from "./types"

/**
 * AccordionItem represents a single collapsible section within an Accordion.
 *
 * @component
 * @param {Object} props - AccordionItem props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} props.title - Title for the accordion item.
 * @param {"plus" | "chevron" | JSX.Element} [props.icon="plus"] - Icon to display in the item header.
 * @param {"basic" | "rounded"} [props.variant="basic"] - Visual variant of the accordion item.
 * @param {boolean} [props.defaultOpen=false] - Whether the item is open by default.
 * @param {ReactNode} [props.children] - Content to display inside the item.
 * @returns {JSX.Element} The rendered AccordionItem component.
 *
 * @example
 * <AccordionItem title="Section 1" icon="chevron" variant="rounded">
 *   Content goes here
 * </AccordionItem>
 */
export const AccordionItem: FC<ILibAccordionItem> = ({
    "data-testid": testid,
    className,
    as,
    ref,
    children,
    title,
    icon = "plus",
    defaultOpen = false,
    variant = "basic",
    ...rest
}) => {
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
