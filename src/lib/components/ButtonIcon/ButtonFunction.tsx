import type { FC } from "react"
import { Link } from "react-router-dom"
import { Loader } from "../../"
import { LibIcon } from "../LibIcon"
import type { ILibLoader } from "../Loader/types"
import { StyledButtonIcon } from "./styles"
import type { ILibButtonIcon } from "./types"

export const ButtonIconFunction: FC<ILibButtonIcon> = ({
    "data-testid": testid,
    as,
    ref,
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
    iconBaseUrl,
    loaderBorderWidth,
    ...rest
}) => {
    const loaderProps: Omit<ILibLoader, "variant" | "borderWidth"> = {
        size: iconSize,
        color: "gray",
        "data-testid": testid && `${testid}.Loader`,
        className: className && "Loader",
    }

    return (
        <StyledButtonIcon
            data-testid={showTooltip && testid ? `${testid}.Button` : testid}
            ref={ref}
            as={as ? as : to ? Link : href ? "a" : "button"}
            className={showTooltip && className ? "Button" : className}
            aria-label={ariaLabel}
            disabled={isLoading || disabled}
            aria-disabled={ariaDisabled && ariaDisabled.toString()}
            to={to === "prev" ? -1 : to}
            href={href}
            target={blank && "_blank"}
            rel={blank && "noreferrer noopener"}
            $variant={variant}
            $showBackgroundHover={showBackgroundHover}
            $borderRadius={borderRadius}
            $color={color}
            $shadow={shadow}
            $size={size}
            {...rest}
        >
            {isLoading ? (
                loaderVariant === 4 ? (
                    <Loader variant={4} {...loaderProps} />
                ) : (
                    <Loader
                        variant={loaderVariant}
                        borderWidth={loaderBorderWidth}
                        {...loaderProps}
                    />
                )
            ) : (
                <LibIcon
                    data-testid={testid && `${testid}.Icon`}
                    className={className && "Icon"}
                    icon={icon}
                    size={iconSize}
                    baseUrl={iconBaseUrl}
                />
            )}
        </StyledButtonIcon>
    )
}
