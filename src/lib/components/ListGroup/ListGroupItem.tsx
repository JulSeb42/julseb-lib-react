/*=============================================== ListGroupItem component ===============================================*/

import { forwardRef } from "react"
import { Link } from "react-router-dom"
import { convertDateShort } from "ts-utils-julseb"
import { Text, Badge } from "../../"
import type { ILibBadge } from "../Badge/types"
import {
    StyledListItem,
    LeftContainer,
    RightContainer,
    ListItemContent,
} from "./styles"
import type { LibComponentBase, LibListGroupItem } from "../../types"

interface ILibListGroupItemComponent extends LibComponentBase<HTMLDivElement> {
    item: Omit<LibListGroupItem, "ref">
    number?: number
    children?: never
    isInArray?: boolean
}

/**
 * @description Returns a ListGroupItem component
 * @link https://documentation-components-react.vercel.app/components/list-group
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop text: string
 * @prop subtext?: string
 * @prop badge?: boolean | { icon?: string | JSX.Element => only if `number` is not defined; number?: number => only if `icon` is not defined; backgroundColor?: LibAllColors; contentColor?: LibAllColors } => only if `date` is not defined
 * @prop date?: string | Date => only if `badge` is not defined
 * @prop number?: number
 * @prop isInArray?: boolean
 */

export const ListGroupItem = forwardRef<
    HTMLDivElement,
    ILibListGroupItemComponent
>(
    (
        {
            "data-testid": testid,
            className,
            as,
            item,
            number,
            isInArray,
            ...rest
        },
        ref
    ) => {
        const {
            text,
            subtext,
            badge,
            date,
            onClick,
            to,
            href,
            disabled,
            blank,
        } = item

        const badgeProps: ILibBadge = {
            "data-testid": testid && `${testid}.Content.RightContainer.Badge`,
            className: className && "Badge",
            backgroundColor:
                typeof badge === "object" ? badge?.backgroundColor : undefined,
            contentColor:
                typeof badge === "object" ? badge?.contentColor : undefined,
        }

        return (
            <StyledListItem
                data-testid={
                    isInArray && testid ? `${testid}.ListGroupItem` : testid
                }
                ref={ref}
                className={isInArray && className ? `${className}` : className}
                as={
                    as
                        ? as
                        : to
                        ? Link
                        : href
                        ? "a"
                        : onClick
                        ? "button"
                        : "div"
                }
                onClick={onClick}
                to={to}
                href={href}
                disabled={disabled}
                target={blank && "_blank"}
                rel={blank && "noreferrer noopener"}
                $isHoverable={!!(to || href || onClick)}
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
                                    {convertDateShort(new Date(date))}
                                </Text>
                            )}
                        </RightContainer>
                    )}
                </ListItemContent>

                {subtext && (
                    <Text
                        data-testid={testid && `${testid}.Subtext`}
                        className={className && "Subtext"}
                        tag="small"
                    >
                        {subtext}
                    </Text>
                )}
            </StyledListItem>
        )
    }
)
