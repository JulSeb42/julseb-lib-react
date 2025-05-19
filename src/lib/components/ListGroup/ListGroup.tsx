import { useRef, type FC } from "react"
import classNames from "classnames"
import { uuid } from "@julseb-lib/utils"
import { useMergeRefs } from "../../hooks"
import { ListGroupTitle } from "./ListGroupTitle"
import { ListGroupItem } from "./ListGroupItem"
import { StyledListGroup } from "./styles"
import type { ILibListGroup } from "./types"

/**
 * ListGroup component for rendering a styled list with optional title, separators, numbering, and flexible items or custom children.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - ListGroup props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {ElementType} [props.as] - Custom element type to render as.
 *  * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {Array<LibListGroupItem>} [props.items] - Array of list group items (used if children is not provided).
 *  * @param {ReactNode} [props.children] - Custom list content (used if items is not provided).
 * @param {string | Object} [props.title] - Title for the list group, or an object with text, backgroundColor, contentColor, isFixed, id, className, ref, shadowOnScroll.
 * @param {boolean} [props.noSeparator] - Hide separators between items.
 * @param {boolean} [props.showNumbers] - Show item numbers.
 * @param {number|string} [props.maxHeight] - Maximum height for the list group.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered ListGroup component.
 *
 * @see https://documentation-components-react.vercel.app/components/list-group
 * @example
 * <ListGroup
 *   title="Fruits"
 *   items={[
 *     { text: "Apple" },
 *     { text: "Banana", badge: { number: 2 } },
 *     { text: "Orange", date: "2024-05-19" }
 *   ]}
 *   showNumbers
 *   maxHeight={300}
 * />
 */
export const ListGroup: FC<ILibListGroup> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    children,
    showNumbers,
    items,
    maxHeight,
    title,
    noSeparator,
    ...rest
}) => {
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
