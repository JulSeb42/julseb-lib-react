/*=============================================== AccordionContent component ===============================================*/

import classNames from "classnames"
import { StyledAccordionContent } from "./styles"
import type { ReactChildren, LibAccordionVariant } from "../../types"

interface ILibAccordionContent {
    "data-testid": string | undefined
    className: string | undefined
    isOpen: boolean
    variant: LibAccordionVariant | undefined
    children?: ReactChildren
}

export function AccordionContent({
    "data-testid": testid,
    className,
    children,
    isOpen,
    variant = "basic",
}: ILibAccordionContent) {
    return (
        <StyledAccordionContent
            data-testid={testid && `${testid}.AccordionContent`}
            className={classNames(
                { AccordionContent: className },
                { Open: isOpen }
            )}
            $variant={variant}
        >
            {children}
        </StyledAccordionContent>
    )
}
