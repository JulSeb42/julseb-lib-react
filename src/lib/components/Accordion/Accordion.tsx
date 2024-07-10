/*=============================================== Accordion component ===============================================*/

import { forwardRef } from "react"
import { uuid } from "ts-utils-julseb"
import { Text } from "../../"
import { AccordionItem } from "./AccordionItem"
import { StyledAccordion } from "./styles"
import type { AccordionProps } from "./types"

/**
 * @description Returns a Accordion component
 * @link https://documentation-components-react.vercel.app/components/accordion
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop items: Array<AccordionItemProps> => only if `children` is not defined
 * @prop children: ReactChildren => only if `items` is not defined
 * @prop variant?: "basic" | "rounded"
 * @prop icon?: "plus" | "chevron" | JSX.Element
 */

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    (
        {
            "data-testid": testid,
            as,
            className,
            children,
            variant = "basic",
            icon = "plus",
            items,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledAccordion
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $variant={variant}
                {...rest}
            >
                {items
                    ? items.map(item => (
                          <AccordionItem
                              data-testid={
                                  item["data-testid"] ||
                                  (testid && `${testid}.AccordionItem`)
                              }
                              ref={item.ref}
                              className={item.className || className && "AccordionItem"}
                              title={item.title}
                              icon={icon}
                              variant={variant}
                              defaultOpen={item.defaultOpen}
                              key={uuid()}
                          >
                              <Text>{item.content}</Text>
                          </AccordionItem>
                      ))
                    : children}
            </StyledAccordion>
        )
    }
)
