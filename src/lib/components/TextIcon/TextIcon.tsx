/*=============================================== TextIcon component ===============================================*/

import { forwardRef } from "react"
import { Text } from "../../"
import { LibIcon } from "../LibIcon"
import { getIconHeight } from "./utils"
import { StyledTextIcon, IconContainer } from "./styles"
import type { ILibTextIcon } from "./types"

/**
 * @description Returns a Text with Icon component
 * @link https://documentation-components-react.vercel.app/components/text-icon
 * @extends ILibText
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLHeadingElement & HTMLParagraphElement & HTMLQuoteElement & HTMLUListElement & HTMLOListElement & HTMLDListElement>
 * @prop icon: string | JSX.Element
 * @prop iconColor?: Any color from the library
 * @prop iconSize?: number
 * @prop textAs?: ElementType
 * @prop tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "blockquote"
 * @prop iconBaseUrl?: string
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop containerStyle?: CSSProperties
 * @prop color?: Any color from the library
 * @prop linkColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop textAlign?: CssTextAlign
 * @prop display?: boolean => only if tag is set to h1 to h5
 */
export const TextIcon = forwardRef<
    HTMLHeadingElement &
        HTMLParagraphElement &
        HTMLQuoteElement &
        HTMLUListElement &
        HTMLOListElement &
        HTMLDListElement,
    ILibTextIcon
>(
    (
        {
            "data-testid": testid,
            as,
            textAs,
            className,
            children,
            icon,
            iconColor,
            iconSize,
            iconBaseUrl,
            tag = "p",
            display,
            gap,
            containerStyle,
            ...rest
        },
        ref
    ) => {
        const textProps: Partial<Omit<ILibTextIcon, "tag" | "display">> = {
            "data-testid": testid && `${testid}.Text`,
            as: textAs,
            className: "Text",
            children,
            ...rest,
        }

        return (
            <StyledTextIcon
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                style={containerStyle}
                $gap={gap}
            >
                <IconContainer
                    data-testid={testid && `${testid}.IconContainer`}
                    className={className && "IconContainer"}
                    $tag={tag}
                    $display={display}
                    $iconSize={iconSize}
                >
                    <LibIcon
                        data-testid={testid && `${testid}.IconContainer.Icon`}
                        className={className && "Icon"}
                        icon={icon}
                        size={iconSize || getIconHeight(tag, display)}
                        color={iconColor}
                        baseUrl={iconBaseUrl}
                    />
                </IconContainer>

                {tag === "h1" ||
                tag === "h2" ||
                tag === "h3" ||
                tag === "h4" ||
                tag === "h5" ? (
                    <Text display={display} tag={tag} {...textProps} />
                ) : (
                    <Text tag={tag} {...textProps} />
                )}
            </StyledTextIcon>
        )
    }
)
