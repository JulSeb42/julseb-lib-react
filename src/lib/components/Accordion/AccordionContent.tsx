/*=============================================== AccordionContent component ===============================================*/

import classNames from "classnames"
import { capitalize } from "ts-utils-julseb"
import { StyledAccordionContent } from "./styles"
import type { ILibAccordionContent } from "./subtypes"

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
                { Open: isOpen },
                capitalize(variant)
            )}
        >
            {children}
        </StyledAccordionContent>
    )
}
