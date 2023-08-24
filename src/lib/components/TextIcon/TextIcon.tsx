/*=============================================== TextIcon component ===============================================*/

import { forwardRef, type ForwardedRef } from "react"

import { Text, Icon } from "../../"
import { getIconHeight } from "./utils"

import { StyledTextIcon, IconContainer } from "./styles"
import type { TextIconProps } from "./types"

export const TextIcon = forwardRef(
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
        }: TextIconProps,
        ref?: ForwardedRef<HTMLDivElement>,
    ) => {
        const textProps: Partial<Omit<TextIconProps, "tag" | "display">> = {
            "data-testid": testid && `${testid}.Text`,
            as: textAs,
            className: className && `${className}__Text`,
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
                    className={className && `${className}__IconContainer`}
                    $tag={tag}
                    $display={display}
                    $iconSize={iconSize}
                >
                    <Icon
                        data-testid={testid && `${testid}.IconContainer.Icon`}
                        src={icon}
                        size={iconSize || getIconHeight(tag, display)}
                        color={iconColor}
                        className={className && `${className}__Icon`}
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
    },
)
