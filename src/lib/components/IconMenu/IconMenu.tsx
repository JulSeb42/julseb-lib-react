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
            showTooltips = true,
            buttonsVariant,
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
                                className={className && "OpenIcon"}
                                $isOpen={isOpen}
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
                                  {
                                      IconMenuItem: className,
                                  },
                                  { Open: isOpen }
                              )}
                              id={item.id}
                              ref={item.ref}
                              {...item}
                              direction={direction}
                              indexPosition={i + 1}
                              isOpen={isOpen}
                              size={DEFAULT_BUTTON_SIZE}
                              tooltip={item?.label}
                              showTooltip={showTooltips && { offset: -12 }}
                              variant={buttonsVariant}
                          />
                      ))
                    : children}
            </StyledIconMenu>
        )
    }
)
