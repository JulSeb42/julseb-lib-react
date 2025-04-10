import { forwardRef } from "react"
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
 * @description Returns a ListGroupItem component
 * @link https://documentation-components-react.vercel.app/components/list-group
 * @extends HTMLDivElement & LibButtonLinkBlank
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop text: string
 * @prop body?: string
 * @prop isInArray?: boolean
 * @prop noSeparator?: boolean
 * @prop number?: number
 * @prop badge?: boolean | { icon?: string | JSX.Element => only if `number` is not defined; number?: number => only if `icon` is not defined; backgroundColor?: Any color from the library; contentColor?: Any color from the library } => only if `date` is not defined
 * @prop date?: string | Date => only if badge is not defined
 * @prop onClick?: void => only if to or href are not defined
 * @prop disabled?: boolean => only if onClick is defined
 * @prop to?: string => only if onClick and href are not defined
 * @prop href?: string => only if onClick and to are not defined
 * @prop blank?: boolean => only if to or href are defined
 */
export const ListGroupItem = forwardRef<HTMLDivElement, ILibListGroupItem>(
    (
        {
            "data-testid": testid,
            className,
            as,
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
        },
        ref
    ) => {
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
)
