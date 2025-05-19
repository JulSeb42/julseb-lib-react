import { useState, useRef, type FC } from "react"
import classNames from "classnames"
import { Burger, useClickOutside, useMergeRefs } from "../../"
import { IconMenuItem } from "./IconMenuItem"
import {
    StyledIconMenu,
    OpenButton,
    OpenIcon,
    DEFAULT_BUTTON_SIZE,
} from "./styles"
import type { ILibIconMenu } from "./types"

/**
 * IconMenu component for displaying a menu of icon buttons with flexible direction, positioning, and tooltips.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - IconMenu props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {Array<LibIconMenuItem>} [props.items] - Array of menu items (used if children is not provided).
 * @param {ReactNode} [props.children] - Custom menu content (used if items is not provided).
 * @param {"left" | "up" | "right" | "down"} [props.direction="right"] - Direction in which the menu appears.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.color="primary"] - Color for the menu and icons.
 * @param {"relative" | "absolute" | "fixed" | Object} [props.position] - Positioning for the menu container.
 * @param {boolean} [props.hideTooltips] - Hide tooltips for menu items.
 * @param {"plain" | "transparent" | "ghost"} [props.buttonsVariant] - Button variant for menu items.
 * @param {string} [props.iconBaseUrl] - Base URL for icon files.
 * @param {"plus" | "burger" | { open: string | JSX.Element; close: string | JSX.Element; openSize?: number; closeSize?: number }} [props.icon="plus"] - Icon for the open/close button.
 * @returns {JSX.Element} The rendered IconMenu component.
 *
 * @see https://documentation-components-react.vercel.app/components/icon-menu
 * @example
 * <IconMenu
 *   items={[
 *     { label: "Edit", icon: "edit", onClick: handleEdit },
 *     { label: "Delete", icon: "delete", onClick: handleDelete }
 *   ]}
 *   direction="down"
 *   color="secondary"
 * />
 */
export const IconMenu: FC<ILibIconMenu> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    className,
    icon = "plus",
    position,
    direction = "right",
    color = "primary",
    items,
    hideTooltips,
    buttonsVariant,
    iconBaseUrl,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const el = useRef<HTMLDivElement>(null as any)

    useClickOutside(el, () => {
        if (isOpen) setIsOpen(false)
    })

    return (
        <StyledIconMenu
            data-testid={testid}
            ref={useMergeRefs([ref, el])}
            className={className}
            $position={position?.position || "relative"}
            $left={position?.left}
            $top={position?.top}
            $right={position?.right}
            $bottom={position?.bottom}
            $zIndex={position?.zIndex || 999}
            as={as}
            {...rest}
        >
            <OpenButton
                data-testid={testid && `${testid}.OpenButton`}
                className={className && "OpenButton"}
                icon={
                    typeof icon === "object" ? (
                        isOpen ? (
                            icon.open
                        ) : (
                            icon.close
                        )
                    ) : icon === "burger" ? (
                        <Burger
                            data-testid={
                                testid && `${testid}.OpenButton.Burger`
                            }
                            className={className && "OpenBurger"}
                            isOpen={isOpen}
                            color={color === "white" ? "primary" : "white"}
                            as="span"
                            width={DEFAULT_BUTTON_SIZE * 0.5}
                            height={DEFAULT_BUTTON_SIZE * 0.4}
                            noHover
                        />
                    ) : (
                        <OpenIcon
                            data-testid={testid && `${testid}.OpenButton.Icon`}
                            className={classNames(
                                { OpenIcon: className },
                                { Open: isOpen }
                            )}
                        />
                    )
                }
                color={color}
                onClick={() => setIsOpen(!isOpen)}
            />

            {items
                ? items?.map((item, i) => (
                      <IconMenuItem
                          key={i}
                          data-testid={
                              item["data-testid"] ||
                              (testid && `${testid}.Item`)
                          }
                          className={classNames(
                              item.className,
                              { IconMenuItem: className },
                              { Open: isOpen }
                          )}
                          id={item.id}
                          ref={item.ref}
                          {...(item as any)}
                          direction={direction}
                          indexPosition={i + 1}
                          isOpen={isOpen}
                          size={DEFAULT_BUTTON_SIZE}
                          tooltip={item?.label}
                          showTooltip={!hideTooltips && { offset: -12 }}
                          variant={buttonsVariant}
                          iconBaseUrl={iconBaseUrl}
                      />
                  ))
                : children}
        </StyledIconMenu>
    )
}
