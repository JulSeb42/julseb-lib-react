/*=============================================== ButtonGroup component ===============================================*/

import { forwardRef, useState, Fragment } from "react"
import { uuid } from "ts-utils-julseb"
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
