/*=============================================== Avatar component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { capitalize } from "ts-utils-julseb"
import { roundIconSize } from "../../lib-utils"
import { AvatarFunction } from "./AvatarFunction"
import { StyledAvatarContainer, StyledBadge } from "./styles"
import type { ILibAvatar } from "./types"

/**
 * @description Returns a Avatar component
 * @link https://documentation-components-react.vercel.app/components/avatar
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLSpanElement>
 * @prop img: string | { src: string; alt: string } => only if letter or icon are not defined
 * @prop letter: string => only if img or icon are not defined
 * @prop icon: string | JSX.Element => only if letter or img are not defined
 * @prop size?: number,
 * @prop border?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: Any color from the library },
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses },
 * @prop badge?: boolean | number | { content?: number; contentColor?: Any color from the library; backgroundColor?: Any color from the library; position?: LibAvatarBadgePosition; size?: number; padding?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" | { left?: LibSpacers | "auto"; top?: LibSpacers | "auto"; right?: LibSpacers | "auto"; bottom?: LibSpacers | "auto"; leftRight?: LibSpacers | "auto"; topBottom?: LibSpacers | "auto" }; outline?: { style?: CssBorderStyle; width?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"; color?: Any color from the library } }
 * @prop iconSize?: number => only if icon is defined
 * @prop backgroundColor?: Any color from the library => only if letter or icon are defined
 * @prop contentColor?: Any color from the library => only if letter or icon are defined
 */
export const Avatar = forwardRef<HTMLSpanElement, ILibAvatar>(
    (
        {
            "data-testid": testid,
            as,
            size = 32,
            border,
            borderRadius = "circle",
            badge,
            img,
            letter,
            icon,
            iconSize = roundIconSize(size),
            backgroundColor = "primary",
            contentColor = backgroundColor === "white"
                ? "primary"
                : backgroundColor === "black"
                ? "white"
                : "background",
            className,
            ...rest
        },
        ref
    ) => {
        const isBadgeObject = typeof badge === "object"
        const badgeSize = isBadgeObject && badge.size ? badge.size : 8

        const avatarProps = {
            "data-testid": testid,
            as,
            className,
            hasBadge: !!badge,
            backgroundColor,
            border,
            borderRadius,
            size,
            contentColor,
            img,
            letter,
            icon,
            iconSize,
            ref,
            ...rest,
        }

        if (badge)
            return (
                <StyledAvatarContainer
                    data-testid={testid}
                    ref={ref}
                    as={as}
                    className={className}
                    $backgroundColor={backgroundColor}
                    $border={border}
                    $borderRadius={borderRadius}
                    $size={size}
                    $contentColor={contentColor}
                >
                    <AvatarFunction {...avatarProps} />

                    <StyledBadge
                        data-testid={testid && `${testid}.Badge`}
                        className={classNames(
                            { Badge: className },
                            `Position${capitalize(
                                isBadgeObject && badge.position
                                    ? badge.position
                                    : "top"
                            )}`
                        )}
                        size={badgeSize}
                        number={
                            isBadgeObject && badge.content
                                ? badge.content
                                : undefined
                        }
                        backgroundColor={
                            isBadgeObject && badge.backgroundColor
                                ? badge.backgroundColor
                                : undefined
                        }
                        contentColor={
                            isBadgeObject && badge.contentColor
                                ? badge.contentColor
                                : undefined
                        }
                        padding={
                            isBadgeObject && badge.padding
                                ? badge.padding
                                : undefined
                        }
                        $width={badgeSize}
                        $paddingLeftRight={
                            isBadgeObject &&
                            typeof badge.padding === "object" &&
                            badge.padding?.leftRight
                                ? badge.padding?.leftRight
                                : "0px"
                        }
                        $outline={
                            isBadgeObject && badge.outline
                                ? badge.outline
                                : undefined
                        }
                    />
                </StyledAvatarContainer>
            )

        return <AvatarFunction {...avatarProps} />
    }
)
