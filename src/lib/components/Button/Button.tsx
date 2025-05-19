import type { FC } from "react"
import { Link } from "react-router-dom"
import { Loader } from "../../"
import { LibIcon } from "../LibIcon"
import type { ILibLoader } from "../Loader/types"
import { StyledButton } from "./styles"
import type { ILibButton } from "./types"

/**
 * Button component for actions, navigation, or links, supporting icons, loading state, and variants.
 *
 * @component
 * @param {Object} props - Button props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {string} [props.aria-label="Button"] - Accessible label for the button.
 * @param {boolean} [props.disabled] - Disables the button (only if `onClick` is defined).
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLButtonElement & HTMLAnchorElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Button content.
 * @param {string} [props.color="primary"] - Button color.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | object} [props.shadow] - Shadow style.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | object} [props.borderRadius] - Border radius.
 * @param {"default" | "small"} [props.size="default"] - Button size.
 * @param {Object} [props.icons] - Icons for left and right ({ left, right }).
 * @param {Object} [props.iconSizes] - Icon sizes for left and right ({ left, right }).
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {boolean} [props.isLoading] - Show loading indicator.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="xs"] - Gap between content and icons/loader.
 * @param {"plain" | "outline" | "ghost" | "transparent"} [props.variant="plain"] - Button visual variant.
 * @param {boolean} [props.noPadding] - Remove padding (only if variant is transparent).
 * @param {1 | 2 | 3 | 4} [props.loaderVariant] - Loader variant (only if isLoading is true).
 * @param {string} [props.to] - React Router link target (only if `onClick` and `href` are not defined).
 * @param {string} [props.href] - Anchor link target (only if `onClick` and `to` are not defined).
 * @param {boolean} [props.blank] - Open link in new tab (only if `to` or `href` are defined).
 * @returns {JSX.Element} The rendered Button component.
 *
 * @example
 * <Button color="success" size="small" icons={{ left: <CheckIcon /> }}>
 *   Confirm
 * </Button>
 */
export const Button: FC<ILibButton> = ({
    "data-testid": testid,
    "aria-label": ariaLabel = "Button",
    disabled,
    "aria-disabled": ariaDisabled = disabled,
    as,
    ref,
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
}) => {
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
                    <Loader variant={4 as any} {...loaderProps} />
                ) : (
                    <Loader
                        variant={loaderVariant as any}
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
