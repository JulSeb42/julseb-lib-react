/*=============================================== ListGroup component ===============================================*/

import { forwardRef } from "react"
import { uuid } from "ts-utils-julseb"
import { ListGroupItem } from "./ListGroupItem"
import { StyledListGroup } from "./styles"
import type { ListGroupProps } from "./types"

/**
 * @description Returns a ListGroup component
 * @link https://documentation-components-react.vercel.app/components/list-group
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop items: Array<ListGroupItemProps> => only if `children` is not defined
 * @prop children: ReactChildren => only if `items` is not defined
 * @prop showNumbers?: boolean
 * @prop maxHeight?: number | string
 */

export const ListGroup = forwardRef<HTMLDivElement, ListGroupProps>(
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
                              data-testid={
                                  item["data-testid"] ||
                                  (testid && `${testid}.ListGroupItem`)
                              }
                              className={
                                  item.className ||
                                  (className && "ListGroupItem")
                              }
                              item={item}
                              number={showNumbers ? i + 1 : undefined}
                              isInArray
                              key={uuid()}
                          />
                      ))
                    : children}
            </StyledListGroup>
        )
    }
)
