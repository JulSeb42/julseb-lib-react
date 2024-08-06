/*=============================================== Accordion component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { uuid, capitalize } from "ts-utils-julseb"
import { Text } from "../../"
import { AccordionItem } from "./AccordionItem"
import { StyledAccordion } from "./styles"
import type { ILibAccordion } from "./types"

/**
 * @description Returns a Accordion component
 * @link https://documentation-components-react.vercel.app/components/accordion
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop items: Array<{ "data-testid"?: string; className?: string; title: string; content?: string | ReactChildren; defaultOpen?: boolean; ref?: ForwardedRef<HTMLDivElement> }> => only if children is not defined
 * @prop children?: ReactChildren => only if items is not defined
 * @prop variant?: "basic" | "rounded"
 * @prop icon?: "plus" | "chevron" | JSX.Element
 */
export const Accordion = forwardRef<HTMLDivElement, ILibAccordion>(
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
        const variantClass = capitalize(variant)

        return (
            <StyledAccordion
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, variantClass)}
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
                              className={
                                  item.className ||
                                  (className && "AccordionItem")
                              }
                              id={item.id}
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
