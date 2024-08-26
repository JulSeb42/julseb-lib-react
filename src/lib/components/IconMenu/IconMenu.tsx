/*=============================================== IconMenu component ===============================================*/

import { forwardRef, useState, useRef } from "react"
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
 * @description Returns a IconMenu component
 * @link https://documentation-components-react.vercel.app/components/icon-menu
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop items: Array<LibIconMenuItem> => only if children is not defined
 * @prop children?: ReactChildren => only if items is not defined
 * @prop direction?: "left" | "up" | "right" | "down"
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop position?: "relative" | "absolute" | "fixed"
 * @prop hideTooltips?: boolean
 * @prop buttonsVariant?: "plain" | "transparent" | "ghost"
 * @prop iconBaseUrl?: string
 * @prop icon?: "plus" | "burger" | { open: string | JSX.Element; close: string | JSX.Element; openSize?: number; closeSize?: number }
 *
 * @type LibIconMenuItem
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>
 * @prop label: string
 * @prop icon: string | JSX.Element
 * @prop iconSize?: number
 * @prop onClick: void => only if to or href are not defined
 * @prop disabled?: boolean => only if onClick is defined
 * @prop to: string => only if onClick and href are not defined
 * @prop href: string => only if onClick and to are not defined
 * @prop blank?: boolean => only if to or href are defined
 */
export const IconMenu = forwardRef<HTMLDivElement, ILibIconMenu>(
    (
        {
            "data-testid": testid,
            as,
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
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(false)

        const el = useRef<HTMLDivElement>(null)

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
                {/* @ts-ignore */}
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
                                data-testid={
                                    testid && `${testid}.OpenButton.Icon`
                                }
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
)
