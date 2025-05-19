import type { FC } from "react"
import { Link } from "react-router-dom"
import { Text, Badge } from "../../"
import type { ILibBadge } from "../Badge/types"
import {
    StyledListItem,
    LeftContainer,
    RightContainer,
    ListItemContent,
} from "./styles"
import type { ILibListGroupItem } from "./types"

/**
 * ListGroupItem component for rendering a single item in a ListGroup, supporting text, body, badge, date, click, link, and flexible rendering.
 *
 * @component
 * @extends HTMLDivElement & LibButtonLinkBlank
 * @param {Object} props - ListGroupItem props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {ElementType} [props.as] - Custom element type to render as.
 *  * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} props.text - Main text content for the item.
 * @param {string} [props.body] - Secondary body text.
 * @param {boolean} [props.isInArray] - Whether the item is part of an array (for styling).
 * @param {boolean} [props.noSeparator] - Hide separator below the item.
 * @param {number} [props.number] - Number to display (for numbered lists).
 * @param {boolean|Object} [props.badge] - Badge to display. Object: { icon, iconSize, number, backgroundColor, contentColor }.
 * @param {string|Date} [props.date] - Date to display (only if badge is not defined).
 * @param {() => void} [props.onClick] - Click handler (only if to or href are not defined).
 * @param {boolean} [props.disabled] - Disable the item (only if onClick is defined).
 * @param {string} [props.to] - React Router link target (only if onClick and href are not defined).
 * @param {string} [props.href] - Anchor link target (only if onClick and to are not defined).
 * @param {boolean} [props.blank] - Open link in new tab (only if to or href are defined).
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered ListGroupItem component.
 *
 * @see https://documentation-components-react.vercel.app/components/list-group
 * @example
 * <ListGroupItem
 *   text="Apple"
 *   badge={{ number: 2, backgroundColor: "primary" }}
 *   onClick={handleClick}
 * />
 */
export const ListGroupItem: FC<ILibListGroupItem> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    number,
    isInArray,
    noSeparator,
    text,
    body,
    badge,
    date,
    onClick,
    to,
    href,
    disabled,
    blank,
    ...rest
}) => {
    const badgeProps: ILibBadge = {
        "data-testid": testid && `${testid}.Content.RightContainer.Badge`,
        className: className && "Badge",
        backgroundColor:
            typeof badge === "object" ? badge?.backgroundColor : undefined,
        contentColor:
            typeof badge === "object" ? badge?.contentColor : undefined,
    }

    const asElement = as
        ? as
        : to
        ? Link
        : href
        ? "a"
        : onClick
        ? "button"
        : "div"

    return (
        <StyledListItem
            data-testid={testid && `${testid}.ListGroupItem`}
            ref={ref}
            className={className}
            as={asElement}
            onClick={onClick}
            to={to}
            href={href}
            disabled={disabled}
            target={blank ? "_blank" : undefined}
            rel={blank ? "noreferrer noopener" : undefined}
            $isHoverable={!!(to || href || onClick)}
            $noSeparator={noSeparator}
            {...rest}
        >
            <ListItemContent
                data-testid={testid && `${testid}.Content`}
                className={className && "Content"}
            >
                {number && (
                    <LeftContainer
                        data-testid={
                            testid && `${testid}.Content.LeftContainer`
                        }
                        className={className && "LeftContainer"}
                    >
                        {number}.
                    </LeftContainer>
                )}

                <Text
                    data-testid={testid && `${testid}.Content.Text`}
                    className={className && "Text"}
                    tag="h6"
                    as="p"
                >
                    {text}
                </Text>

                {(badge || date) && (
                    <RightContainer
                        data-testid={
                            testid && `${testid}.Content.RightContainer`
                        }
                        className={className && "RightContainer"}
                    >
                        {badge &&
                            (typeof badge === "object" ? (
                                <Badge
                                    icon={badge.icon}
                                    iconSize={badge.iconSize}
                                    number={badge.number}
                                    {...(badgeProps as any)}
                                />
                            ) : (
                                <Badge {...badgeProps} />
                            ))}

                        {date && (
                            <Text
                                data-testid={
                                    testid &&
                                    `${testid}.Content.RightContainer.Date`
                                }
                                className={className && "Date"}
                                tag="small"
                                color="gray"
                            >
                                {date.toString()}
                            </Text>
                        )}
                    </RightContainer>
                )}
            </ListItemContent>

            {body && (
                <Text
                    data-testid={testid && `${testid}.Body`}
                    className={className && "Body"}
                    tag="small"
                >
                    {body}
                </Text>
            )}
        </StyledListItem>
    )
}
