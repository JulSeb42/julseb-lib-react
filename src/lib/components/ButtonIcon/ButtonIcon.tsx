/*=============================================== ButtonIcon component ===============================================*/

import { forwardRef } from "react"
import { capitalize } from "ts-utils-julseb"
import { Tooltip } from "../../"
import { roundIconSize } from "../../lib-utils"
import { ButtonIconFunction } from "./ButtonFunction"
import type { ILibButtonIcon } from "./types"

/**
 * @description Returns a ButtonIcon component
 * @link https://documentation-components-react.vercel.app/components/button-icon
 * @extends HTMLButtonElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
 */
export const ButtonIcon = forwardRef<
    HTMLButtonElement & HTMLAnchorElement,
    ILibButtonIcon
>(
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
            containerStyle,
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
                    hideArrow={
                        typeof showTooltip === "object" && showTooltip.hideArrow
                            ? showTooltip.hideArrow
                            : false
                    }
                    backgroundColor={
                        typeof showTooltip === "object" &&
                        showTooltip.backgroundColor
                            ? showTooltip.backgroundColor
                            : "black-80"
                    }
                    textColor={
                        typeof showTooltip === "object" && showTooltip.textColor
                            ? showTooltip.textColor
                            : "white"
                    }
                    style={containerStyle}
                >
                    <ButtonIconFunction {...(props as any)} />
                </Tooltip>
            )

        return <ButtonIconFunction {...(props as any)} />
    }
)
