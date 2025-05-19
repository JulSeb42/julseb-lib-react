import { type FC } from "react"
import classNames from "classnames"
import { uuid, capitalize } from "@julseb-lib/utils"
import { Text } from "../../"
import { AccordionItem } from "./AccordionItem"
import { StyledAccordion } from "./styles"
import type { ILibAccordion } from "./types"

/**
 * Accordion component for displaying collapsible content panels.
 *
 * @component
 * @param {Object} props - Accordion props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Accordion items as children (used if `items` is not provided).
 * @param {"basic" | "rounded"} [props.variant="basic"] - Visual variant of the accordion.
 * @param {"plus" | "chevron" | JSX.Element} [props.icon="plus"] - Icon to display in each item.
 * @param {Array<LibAccordionItem>} [props.items] - Array of item objects (used if `children` is not provided).
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @returns {JSX.Element} The rendered Accordion component.
 *
 * @example
 * <Accordion
 *   items={[
 *     { title: "Section 1", content: "Content 1" },
 *     { title: "Section 2", content: <CustomComponent /> }
 *   ]}
 *   variant="rounded"
 *   icon="chevron"
 * />
 */
export const Accordion: FC<ILibAccordion> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    children,
    variant = "basic",
    icon = "plus",
    items,
    ...rest
}) => {
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
                              item.className || (className && "AccordionItem")
                          }
                          id={item.id}
                          title={item.title}
                          icon={icon}
                          variant={variant}
                          defaultOpen={item.defaultOpen}
                          key={uuid()}
                      >
                          {typeof item.content === "string" ? (
                              <Text>{item.content}</Text>
                          ) : (
                              item.content
                          )}
                      </AccordionItem>
                  ))
                : children}
        </StyledAccordion>
    )
}
