/*=============================================== Tag component ===============================================*/

import { forwardRef } from "react"
import { getIconSizeFromFont } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import { StyledTag } from "./styles"
import type { ILibTag } from "./types"

/**
 * @description Returns a Tag component
 * @link https://documentation-components-react.vercel.app/components/tag
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLSpanElement>
 */
export const Tag = forwardRef<HTMLSpanElement, ILibTag>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            backgroundColor = "primary",
            textColor = backgroundColor === "white"
                ? "primary"
                : backgroundColor === "black"
                ? "white"
                : "background",
            border,
            padding = {
                topBottom: "xxs",
                leftRight: "s",
            },
            borderRadius = "round",
            fontSize = "small",
            icons,
            iconSizes = {
                left: getIconSizeFromFont(fontSize),
                right: getIconSizeFromFont(fontSize),
            },
            iconBaseUrl,
            gap = "xs",
            ...rest
        },
        ref
    ) => {
        return (
            <StyledTag
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $backgroundColor={backgroundColor}
                $textColor={textColor}
                $border={border}
                $padding={padding}
                $borderRadius={borderRadius}
                $gap={gap}
                $fontSize={fontSize}
                {...rest}
            >
                {icons?.left && (
                    <LibIcon
                        data-testid={testid && `${testid}.Icon.Left`}
                        className={className && "IconLeft"}
                        icon={icons.left}
                        size={iconSizes?.left}
                        baseUrl={iconBaseUrl}
                    />
                )}

                {children}

                {icons?.right && (
                    <LibIcon
                        data-testid={testid && `${testid}.Icon.Right`}
                        className={className && "IconRight"}
                        icon={icons.right}
                        size={iconSizes?.right}
                        baseUrl={iconBaseUrl}
                    />
                )}
            </StyledTag>
        )
    }
)
