import type { FC } from "react"
import classNames from "classnames"
import { capitalize } from "@julseb-lib/utils"
import { StyledAccordionContent } from "./styles"
import type { ILibAccordionContent } from "./subtypes"

export const AccordionContent: FC<ILibAccordionContent> = ({
    "data-testid": testid,
    className,
    children,
    isOpen,
    variant = "basic",
}) => {
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
