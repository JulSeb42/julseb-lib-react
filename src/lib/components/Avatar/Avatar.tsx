/*=============================================== Avatar component ===============================================*/

import { forwardRef } from "react"
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
                        className={className && "Badge"}
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
                        $position={
                            isBadgeObject && badge.position
                                ? badge.position
                                : "top"
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
