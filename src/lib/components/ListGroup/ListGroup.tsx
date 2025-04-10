import { forwardRef, useRef } from "react"
import classNames from "classnames"
import { uuid } from "@julseb-lib/utils"
import { useMergeRefs } from "../../hooks"
import { ListGroupTitle } from "./ListGroupTitle"
import { ListGroupItem } from "./ListGroupItem"
import { StyledListGroup } from "./styles"
import type { ILibListGroup } from "./types"

/**
 * @description Returns a ListGroup component
 * @link https://documentation-components-react.vercel.app/components/list-group
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop items: Array<LibListGroupItem> => only if children is not defined
 * @prop children?: ReactChildren => only if items is not defined
 * @prop title?: string | { text: string; backgroundColor?: Any color from the library; contentColor?: Any color from the library; isFixed?: boolean; id?: string; className?: string; ref?: ForwardedRef<HTMLDivElement>; shadowOnScroll?: "xxl" | "xl" | "l" | "m" | "s" | "xs" }
 * @prop noSeparator?: boolean
 * @prop showNumbers?: boolean
 * @prop maxHeight?: number | string
 *
 * @type LibListGroupItem
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLLIElement>
 * @prop text: string
 * @prop subtext?: string
 * @prop badge?: boolean | { icon?: string | JSX.Element => only if `number` is not defined; number?: number => only if `icon` is not defined; backgroundColor?: LibAllColors; contentColor?: LibAllColors } => only if `date` is not defined
 * @prop date?: string | Date => only if `badge` is not defined
 * @prop onClick?: void => only if to or href are not defined
 * @prop disabled?: boolean => only if onClick is defined
 * @prop to?: string => only if onClick and href are not defined
 * @prop href?: string => only if onClick and to are not defined
 * @prop blank?: boolean => only if to or href are defined
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
            title,
            noSeparator,
            ...rest
        },
        ref
    ) => {
        const listRef = useRef<HTMLDivElement>(null)

        return (
            <StyledListGroup
                data-testid={testid}
                ref={useMergeRefs([ref, listRef])}
                as={as}
                className={className}
                $maxHeight={maxHeight}
                $hasTitleFixed={
                    !!(title && typeof title === "object" && title.isFixed)
                }
                {...rest}
            >
                {title && (
                    <ListGroupTitle
                        data-testid={testid && `${testid}.ListGroupTitle`}
                        className={className && "ListGroupTitle"}
                        backgroundColor={
                            typeof title === "object"
                                ? title.backgroundColor
                                : "primary"
                        }
                        contentColor={
                            typeof title === "object"
                                ? title.contentColor
                                : "background"
                        }
                        noSeparator={noSeparator}
                        isFixed={typeof title === "object" && title.isFixed}
                        listRef={listRef}
                        {...(title as any)}
                    >
                        {typeof title === "object" ? title.text : title}
                    </ListGroupTitle>
                )}

                {items?.map((item, i) => (
                    <ListGroupItem
                        data-testid={item["data-testid"] || testid}
                        className={classNames(item.className, {
                            ListGroupItem: !!className,
                        })}
                        id={item.id}
                        ref={item.ref}
                        item={item}
                        number={showNumbers ? i + 1 : undefined}
                        isInArray
                        noSeparator={noSeparator}
                        {...(item as any)}
                        key={uuid()}
                    />
                )) ?? children}
            </StyledListGroup>
        )
    }
)
