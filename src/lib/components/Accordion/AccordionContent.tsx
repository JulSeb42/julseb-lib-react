/*=============================================== AccordionContent component ===============================================*/

import { StyledAccordionContent } from "./styles"
import type { AccordionVariant } from "./types"
import type { ReactChildren } from "../../types"

interface AccordionContentProps {
    "data-testid": string | undefined
    className: string | undefined
    isOpen: boolean
    variant: AccordionVariant | undefined
    children?: ReactChildren
}

export function AccordionContent({
    "data-testid": testid,
    className,
    children,
    isOpen,
    variant = "basic",
}: AccordionContentProps) {
    return (
        <StyledAccordionContent
            data-testid={testid && `${testid}.AccordionContent`}
            className={className && "AccordionContent"}
            $isOpen={isOpen}
            $variant={variant}
        >
            {children}
        </StyledAccordionContent>
    )
}
