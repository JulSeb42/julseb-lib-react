/*=============================================== Badge component ===============================================*/

import { forwardRef } from "react"
import { roundIconSize } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import { StyledBadge } from "./styles"
import type { ILibBadge } from "./types"

/**
 * @description Returns a Badge component
 * @link https://documentation-components-react.vercel.app/components/badge
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 */

export const Badge = forwardRef<HTMLSpanElement, ILibBadge>(
    (
        {
            "data-testid": testid,
            className,
            as,
            size = 16,
            icon,
            iconSize = roundIconSize(size),
            number,
            backgroundColor = "primary",
            contentColor = backgroundColor === "white"
                ? "primary"
                : backgroundColor === "black"
                ? "white"
                : "background",
            borderRadius = "round",
            padding = {
                leftRight: "xs",
            },
            ...rest
        },
        ref
    ) => {
        return (
            <StyledBadge
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $size={size}
                $backgroundColor={backgroundColor}
                $contentColor={contentColor}
                $borderRadius={borderRadius}
                $padding={padding}
                $hasChildren={!!(icon || number)}
                $childrenLength={number?.toString().length}
                {...rest}
            >
                {icon && (
                    <LibIcon
                        data-testid={testid && `${testid}.Icon`}
                        className={className && "Icon"}
                        icon={icon}
                        color={contentColor}
                        size={iconSize}
                    />
                )}

                {number}
            </StyledBadge>
        )
    }
)
