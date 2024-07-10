/*=============================================== AvatarFunction ===============================================*/

import { forwardRef, memo } from "react"
import { Image } from "../../"
import { LibIcon } from "../LibIcon"
import type {
    LibAllColors,
    LibBorderProps,
    LibComponentBase,
    LibIcon as LibIconType,
    LibRadiusProps,
} from "../../types"
import { StyledAvatar } from "./styles"

interface AvatarFunctionProps extends LibComponentBase<HTMLSpanElement> {
    hasBadge?: boolean
    backgroundColor?: LibAllColors
    border?: LibBorderProps
    borderRadius?: LibRadiusProps
    size?: number
    contentColor?: LibAllColors
    img?: string | { src: string; alt: string }
    letter?: string
    icon?: LibIconType
    iconSize?: number
}

const AvatarFn = forwardRef<HTMLSpanElement, AvatarFunctionProps>(
    (
        {
            "data-testid": testid,
            as,
            className,
            hasBadge,
            backgroundColor,
            border,
            borderRadius,
            size,
            contentColor,
            img,
            letter,
            icon,
            iconSize,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledAvatar
                data-testid={hasBadge && testid ? `${testid}.Avatar` : testid}
                ref={!hasBadge ? ref : undefined}
                as={!hasBadge ? as : "span"}
                className={hasBadge && className ? `Avatar` : className}
                $backgroundColor={backgroundColor}
                $border={border}
                $borderRadius={borderRadius}
                $size={size}
                $contentColor={contentColor}
                {...rest}
            >
                {img && (
                    <Image
                        data-testid={testid && `${testid}.Image`}
                        className={className && "Image"}
                        src={typeof img === "object" ? img.src : img}
                        alt={typeof img === "object" ? img.alt : "Avatar"}
                        width={size}
                        height={size}
                        fit="cover"
                    />
                )}

                {letter && letter}

                {icon && (
                    <LibIcon
                        data-testid={testid && `${testid}.Icon`}
                        className={className && "Icon"}
                        icon={icon}
                        size={iconSize}
                        color={contentColor}
                    />
                )}
            </StyledAvatar>
        )
    }
)

export const AvatarFunction = memo(AvatarFn)
