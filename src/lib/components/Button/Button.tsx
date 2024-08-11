/*=============================================== Button component ===============================================*/

import { forwardRef } from "react"
import { Link } from "react-router-dom"
import { Loader } from "../../"
import { LibIcon } from "../LibIcon"
import type { ILibLoader } from "../Loader/types"
import { StyledButton } from "./styles"
import type { ILibButton } from "./types"

/**
 * @description Returns a Button component
 * @link https://documentation-components-react.vercel.app/components/button
 * @extends HTMLButtonElement & LibButtonLinkBlank
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
 * @prop variant?: "plain" | "outline" | "ghost" | "transparent"
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop shadow?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | { default: LibShadows; hover: LibShadows; active: LibShadows }
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop size?: "default" | "small"
 * @prop icons?: { left?: string | JSX.Element; right?: string | JSX.Element }
 * @prop iconSizes?: { left?: number; right?: number } => only if icons is defined
 * @prop isLoading?: boolean
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px" => only if icons or isLoading are defined
 * @prop noPadding?: boolean => only if variant is set to transparent
 * @prop loaderVariant?: 1 | 2 | 3 | 4 => only if isLoading is defined
 */
export const Button = forwardRef<
    HTMLButtonElement & HTMLAnchorElement,
    ILibButton
>(
    (
        {
            "data-testid": testid,
            "aria-label": ariaLabel = "Button",
            disabled,
            "aria-disabled": ariaDisabled = disabled,
            as,
            className,
            children,
            color = "primary",
            shadow,
            size = "default",
            borderRadius = size === "small" ? "s" : "m",
            icons,
            iconSizes,
            iconBaseUrl,
            gap = "xs",
            variant = "plain",
            noPadding,
            isLoading,
            loaderVariant,
            to,
            href,
            blank,
            ...rest
        },
        ref
    ) => {
        const loaderProps: Omit<ILibLoader, "variant" | "borderWidth"> = {
            size: size === "small" ? 14 : 16,
            color: "gray",
            "data-testid": testid && `${testid}.Loader`,
            className: "Loader",
        }

        const defaultIconSize = size === "small" ? 14 : 16

        return (
            <StyledButton
                data-testid={testid}
                ref={ref}
                as={as ? as : to ? Link : href ? "a" : "button"}
                to={to === "prev" ? -1 : to}
                href={href}
                className={className}
                aria-label={ariaLabel}
                aria-disabled={ariaDisabled}
                disabled={isLoading || disabled}
                target={blank && "_blank"}
                rel={blank && "noreferrer noopener"}
                $color={color}
                $shadow={shadow}
                $borderRadius={borderRadius}
                $size={size}
                $gap={gap}
                $variant={variant}
                $noPadding={noPadding}
                {...rest}
            >
                {icons?.left && !isLoading && (
                    <LibIcon
                        icon={icons.left}
                        data-testid={testid && `${testid}.IconLeft`}
                        className={className && "IconLeft"}
                        size={iconSizes?.left || defaultIconSize}
                        baseUrl={iconBaseUrl}
                    />
                )}

                {isLoading &&
                    (loaderVariant === 4 ? (
                        <Loader variant={4} {...loaderProps} />
                    ) : (
                        <Loader
                            variant={loaderVariant}
                            borderWidth={2}
                            {...loaderProps}
                        />
                    ))}

                {children}

                {icons?.right && (
                    <LibIcon
                        icon={icons.right}
                        data-testid={testid && `${testid}.IconRight`}
                        className={className && "IconRight"}
                        size={iconSizes?.right || defaultIconSize}
                        baseUrl={iconBaseUrl}
                    />
                )}
            </StyledButton>
        )
    }
)
