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
 * @extends HTMLButtonElement
 * @prop data-testid?: string
 * @prop as?: ElementType
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
                    />
                )}
            </StyledButton>
        )
    }
)
