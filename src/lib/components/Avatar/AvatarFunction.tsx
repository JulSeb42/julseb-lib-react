/*=============================================== AvatarFunction ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { getRandomString } from "@julseb-lib/utils"
import { Image } from "../../"
import { appendStyles } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import type { LibComponentBase } from "../../types"
import { StyledAvatar, StyledFallback } from "./styles"
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
        | "fontSize"
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
            fontSize = "body",
            ...rest
        },
        ref
    ) => {
        const randomClass = getRandomString(10, true)
        const withClass = className?.split(" ")[0] || randomClass

        appendStyles(`
            ${id ? `#${id}` : `.${withClass}`} {
            --avatar-size: ${size}px;
            }
        `)

        return (
            <StyledAvatar
                data-testid={hasBadge && testid ? `${testid}.Avatar` : testid}
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
                $fontSize={fontSize}
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
                        imgFallback={
                            typeof img === "object"
                                ? { text: img.fallback || "", fontSize }
                                : undefined
                        }
                        fallback={
                            typeof img === "object" ? (
                                // @ts-ignore
                                <StyledFallback
                                    $backgroundColor={
                                        img.fallbackBackgroundColor ??
                                        backgroundColor
                                    }
                                    $fontColor={
                                        img.fallbackFontColor ?? contentColor
                                    }
                                    $size={size}
                                    $fontSize={img.fallbackFontSize ?? fontSize}
                                >
                                    {img.fallback}
                                </StyledFallback>
                            ) : undefined
                        }
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
        )
    }
)
