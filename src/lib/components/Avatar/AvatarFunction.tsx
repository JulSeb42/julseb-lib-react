/*=============================================== AvatarFunction ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { getRandomString } from "ts-utils-julseb"
import { Image } from "../../"
import { HelmetStyles } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import type { LibComponentBase } from "../../types"
import { StyledAvatar } from "./styles"
import type { ILibAvatar } from "./types"

export const AvatarFunction = forwardRef<
    HTMLSpanElement,
    Pick<
        ILibAvatar,
        | "data-testid"
        | "as"
        | "className"
        | "id"
        | "backgroundColor"
        | "border"
        | "borderRadius"
        | "size"
        | "contentColor"
        | "img"
        | "letter"
        | "icon"
        | "iconSize"
        | "iconBaseUrl"
    > &
        LibComponentBase<HTMLSpanElement> & {
            hasBadge?: boolean
        }
>(
    (
        {
            "data-testid": testid,
            as,
            className,
            id,
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
            iconBaseUrl,
            ...rest
        },
        ref
    ) => {
        const randomClass = getRandomString(10, true)
        const withClass = className?.split(" ")[0] || randomClass

        return (
            <>
                <HelmetStyles>
                    {`${id ? `#${id}` : `.${withClass}`} {
                        --avatar-size: ${size}px;
                    }`}
                </HelmetStyles>

                <StyledAvatar
                    data-testid={
                        hasBadge && testid ? `${testid}.Avatar` : testid
                    }
                    ref={!hasBadge ? ref : undefined}
                    as={!hasBadge ? as : "span"}
                    id={id}
                    className={classNames(
                        hasBadge && className ? `Avatar` : className,
                        randomClass
                    )}
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
                            width="100%"
                            height="100%"
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
                            baseUrl={iconBaseUrl}
                        />
                    )}
                </StyledAvatar>
            </>
        )
    }
)
