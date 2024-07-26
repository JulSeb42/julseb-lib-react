/*=============================================== ListGroup component ===============================================*/

import { forwardRef } from "react"
import { uuid } from "ts-utils-julseb"
import { ListGroupItem } from "./ListGroupItem"
import { StyledListGroup } from "./styles"
import type { ILibListGroup } from "./types"

/**
 * @description Returns a ListGroup component
 * @link https://documentation-components-react.vercel.app/components/list-group
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop items: Array<LibListGroupItem> => only if children is not defined
 * @prop children?: ReactChildren => only if items is not defined
 * @prop showNumbers?: boolean
 * @prop maxHeight?: number | string
 *
 * @type LibListGroupItem
 * @prop text: string
 * @prop subtext?: string
 * @prop ref?: ForwardedRef<HTMLLIElement>
 * @prop badge?: boolean | { icon?: string | JSX.Element => only if `number` is not defined; number?: number => only if `icon` is not defined; backgroundColor?: LibAllColors; contentColor?: LibAllColors } => only if `date` is not defined
 * @prop date?: string | Date => only if `badge` is not defined
 */

export const ListGroup = forwardRef<HTMLDivElement, ILibListGroup>(
    (
        {
            "data-testid": testid,
            className,
            as,
            children,
            showNumbers,
            items,
            maxHeight,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledListGroup
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $maxHeight={maxHeight}
                {...rest}
            >
                {items
                    ? items.map((item, i) => (
                          <ListGroupItem
                              data-testid={item["data-testid"] || testid}
                              className={
                                  item.className ||
                                  (className && "ListGroupItem")
                              }
                              id={item.id}
                              ref={item.ref}
                              item={item}
                              number={showNumbers ? i + 1 : undefined}
                              isInArray
                              key={uuid()}
                              {...(item as any)}
                          />
                      ))
                    : children}
            </StyledListGroup>
        )
    }
)
