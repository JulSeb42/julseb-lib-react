/*=============================================== ButtonIcon component ===============================================*/

import { forwardRef } from "react"
import { capitalize } from "ts-utils-julseb"
import { Tooltip } from "../../"
import { roundIconSize } from "../../lib-utils"
import { ButtonIconFunction } from "./ButtonFunction"
import type { ButtonIconProps } from "./types"

/**
 * @description Returns a ButtonIcon component
 * @link https://documentation-components-react.vercel.app/components/button-icon
 * @extends HTMLButtonElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop icon: string | JSX.Element
 * @prop iconSize?: number
 * @prop size?: number
 * @prop shadow?: LibBoxShadowProps
 * @prop borderRadius?: LibRadiusProps
 * @prop color?: LibColorsHover
 * @prop tooltip?: string
 * @prop showTooltip?: boolean | { position?: "top" | "bottom"; offset?: LibSpacers }
 * @prop variant?: "plain" | "transparent" | "ghost"
 * @prop showBackgroundHover?: boolean => only if variant is set to transparent
 * @prop isLoading?: boolean
 * @prop loaderVariant?: 1 | 2 | 3 | 4 => only if `isLoading` is defined
 * @prop loaderBorderWidth?: number => only if `loaderVariant` is defined
 */

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
    (
        {
            "data-testid": testid,
            as,
            size = 32,
            icon,
            iconSize = roundIconSize(size),
            shadow,
            borderRadius = "circle",
            tooltip,
            showTooltip,
            "aria-label": ariaLabel = capitalize(
                typeof icon === "string" ? icon : "button icon"
            ),
            to,
            href,
            blank,
            variant = "plain",
            showBackgroundHover,
            isLoading,
            loaderVariant,
            loaderBorderWidth = 2,
            disabled,
            "aria-disabled": ariaDisabled = isLoading || disabled,
            color = "primary",
            className,
            ...rest
        },
        ref
    ) => {
        const props = {
            "data-testid": testid,
            as,
            className,
            showTooltip,
            to,
            href,
            isLoading,
            disabled,
            "aria-disabled": ariaDisabled,
            "aria-label": ariaLabel,
            blank,
            variant,
            showBackgroundHover,
            borderRadius,
            color,
            shadow,
            size,
            loaderVariant,
            icon,
            iconSize,
            loaderBorderWidth,
            ref,
            ...rest,
        }

        if (tooltip && showTooltip)
            return (
                <Tooltip
                    data-testid={testid}
                    className={className}
                    tooltip={tooltip}
                    position={
                        typeof showTooltip === "object" && showTooltip?.position
                            ? showTooltip.position
                            : "top"
                    }
                    offset={
                        typeof showTooltip === "object" && showTooltip?.offset
                            ? showTooltip.offset
                            : undefined
                    }
                >
                    <ButtonIconFunction {...(props as any)} />
                </Tooltip>
            )

        return <ButtonIconFunction {...(props as any)} />
    }
)
