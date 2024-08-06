/*=============================================== DropdownItem component ===============================================*/

import { forwardRef, Fragment } from "react"
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
 * @prop accentColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop icon?: string | JSX.Element
 * @prop iconSize?: number
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
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
                    <Fragment>
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
                    </Fragment>
                ) : (
                    children
                )}
            </StyledDropdownItem>
        )
    }
)
