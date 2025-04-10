import { forwardRef } from "react"
import { Link } from "react-router-dom"
import { LibIcon } from "../LibIcon"
import { StyledDropdownItem, IconContainer, TextContent } from "./styles"
import type { ILibDropdownItem } from "./types"

/**
 * @description Returns a DropdownItem component
 * @link https://documentation-components-react.vercel.app/components/dropdown
 * @extends HTMLButtonElement & HTMLAnchorElement & LibButtonLinkBlankRequired
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
 * @prop onClick: void => only if to or href are not defined
 * @prop disabled?: boolean => only if onClick is defined
 * @prop to: string => only if onClick and href are not defined
 * @prop href: string => only if onClick and to are not defined
 * @prop blank?: boolean => only if to or href are defined
 * @prop accentColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop icon?: string | JSX.Element
 * @prop iconSize?: number => only if icon is defined
 * @prop iconBaseUrl?: string => only if icon is defined
 */
export const DropdownItem = forwardRef<
    HTMLButtonElement & HTMLAnchorElement,
    ILibDropdownItem
>(
    (
        {
            "data-testid": testid,
            as,
            className,
            onClick,
            to,
            href,
            blank,
            accentColor = "primary",
            children,
            disabled,
            icon,
            iconSize = 16,
            iconBaseUrl,
            gap = "xxs",
            ...rest
        },
        ref
    ) => {
        return (
            <StyledDropdownItem
                data-testid={testid}
                className={className}
                ref={ref}
                as={as ? as : to ? Link : href ? "a" : "button"}
                onClick={onClick}
                to={to}
                href={href}
                disabled={!to && !href ? disabled : undefined}
                target={blank && "_blank"}
                rel={blank && "noreferrer noopener"}
                $accentColor={accentColor}
                $gap={gap}
                {...rest}
            >
                {icon ? (
                    <>
                        <IconContainer
                            data-testid={testid && `${testid}.IconContainer`}
                            className={className && "DropdownItemIconContainer"}
                        >
                            <LibIcon
                                data-testid={
                                    testid && `${testid}.IconContainer.Icon`
                                }
                                className={className && "DropdownItemIcon"}
                                icon={icon}
                                size={iconSize}
                                baseUrl={iconBaseUrl}
                            />
                        </IconContainer>

                        <TextContent
                            data-testid={testid && `${testid}.TextContent`}
                            className={className && "DropdownItemTextContent"}
                        >
                            {children}
                        </TextContent>
                    </>
                ) : (
                    children
                )}
            </StyledDropdownItem>
        )
    }
)
