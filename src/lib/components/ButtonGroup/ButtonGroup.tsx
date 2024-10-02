/*=============================================== ButtonGroup component ===============================================*/

import { forwardRef, useState, Fragment } from "react"
import { uuid } from "@julseb-lib/utils"
import { ButtonGroupButton } from "./ButtonGroupButton"
import { ButtonGroupToggle } from "./ButtonGroupToggle"
import { StyledButtonGroup, Separator } from "./styles"
import type { ILibButtonGroup } from "./types"

/**
 * @description Returns a ButtonGroup component
 * @link https://documentation-components-react.vercel.app/components/button-group
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop buttons: Array<LibButtonGroupButtonItem> => only if toggles is not defined
 * @prop name?: string => required when toggles is defined
 * @prop toggles: Array<LibButtonGroupToggle> => only if buttons is not defined
 * @prop toggleType?: "single" | "multi" => only if toogles is defined
 * @prop color?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop variant?: "plain" | "transparent" | "ghost"
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop size?: "default" | "small"
 * @prop iconBaseUrl?: string
 *
 * @type LibButtonGroupButtonItem
 * @prop onClick?: void => only if `to` or `href` are not defined
 * @prop disabled?: boolean => only if `onClick` is defined
 * @prop to?: string => only if `onClick` and `href` are not defined
 * @prop href?: string => only if `onClick` and `to` are not defined
 * @prop blank?: boolean => only if `to` or `href` are defined
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLButtonElement>
 * @prop text: string => only if `iconOnly` is not defined
 * @prop iconLeft?: string | JSX.Element
 * @prop iconRight?: string | JSX.Element
 * @prop iconOnly: string | JSX.Element => only if `text` is not defined
 * @prop iconSizes?: { left?: number; right?: number; only?: number }
 * @prop "aria-label"?: string
 *
 * @type LibButtonGroupToggle
 * @prop data-testid?: string
 * @prop className?: string
 * @prop id?: string
 * @prop ref?: ForwardedRef<HTMLInputElement>
 * @prop text: string => only if icon is not defined
 * @prop icon: string | JSX.Element => only if text is not defined
 * @prop iconSize?: number => only if text is not defined
 * @prop label?: string => only if text is not defined
 * @prop tooltip?: string => only if text is not defined
 * @prop showTooltip?: boolean => only if text is not defined
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ILibButtonGroup>(
    (
        {
            "data-testid": testid,
            as,
            className,
            buttons,
            color = "primary",
            variant = "plain",
            size = "default",
            borderRadius = size === "small" ? "s" : "m",
            toggles,
            toggleType = "single",
            name,
            iconBaseUrl,
            ...rest
        },
        ref
    ) => {
        const commonProps = {
            "data-testid": testid,
            className,
            color,
            variant,
            size,
        }

        const separatorProps = (i: number) => ({
            "data-testid": testid && `${testid}.Separator.${i}`,
            className: className && "Separator",
            $color: color,
        })

        const [allToggles, setAllToggles] = useState(
            toggles
                ? Object.assign(
                      {},
                      ...(toggles
                          ?.map(t => ({
                              [t.id]: t.value ?? false,
                          }))
                          ?.filter(v => v !== undefined) as any)
                  )
                : null
        )

        return (
            <StyledButtonGroup
                data-testid={testid}
                ref={ref}
                as={as}
                className={className}
                $size={size}
                $borderRadius={borderRadius}
                $variant={variant}
                $color={color}
                {...rest}
            >
                {buttons?.map((button, i) => (
                    <Fragment key={uuid()}>
                        <ButtonGroupButton
                            button={button}
                            index={i}
                            iconBaseUrl={iconBaseUrl}
                            {...(commonProps as any)}
                        />

                        {variant === "transparent" &&
                            i !== buttons.length - 1 && (
                                <Separator
                                    key={uuid()}
                                    {...separatorProps(i)}
                                />
                            )}
                    </Fragment>
                ))}

                {toggles?.map((toggle, i) => (
                    <Fragment key={uuid()}>
                        <ButtonGroupToggle
                            {...(commonProps as any)}
                            toggle={toggle}
                            toggleType={toggleType}
                            name={name}
                            index={i}
                            toggles={allToggles}
                            setToggles={setAllToggles}
                            iconBaseUrl={iconBaseUrl}
                        />

                        {variant === "transparent" &&
                            i !== toggles.length - 1 && (
                                <Separator
                                    key={uuid()}
                                    {...separatorProps(i)}
                                />
                            )}
                    </Fragment>
                ))}
            </StyledButtonGroup>
        )
    }
)
