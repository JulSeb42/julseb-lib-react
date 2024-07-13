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
            tag = "p",
            display,
            gap,
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
                        className={className && "IconContainer__Icon"}
                        icon={icon}
                        size={iconSize || getIconHeight(tag, display)}
                        color={iconColor}
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
