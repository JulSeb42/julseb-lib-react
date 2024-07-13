/*=============================================== ButtonGroup component ===============================================*/

import { forwardRef, Fragment } from "react"
import { uuid, capitalize, filterObject } from "ts-utils-julseb"
import { Button, ButtonIcon } from "../../"
import type { ILibButton } from "../Button/types"
import type { ILibButtonIcon } from "../ButtonIcon/types"
import { StyledButtonGroup, Separator } from "./styles"
import type { ILibButtonGroup } from "./types"

/**
 * @description Returns a ButtonGroup component
 * @link https://documentation-components-react.vercel.app/components/button-group
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
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
            ...rest
        },
        ref
    ) => {
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
                {buttons.map((button, i) => {
                    const commonProps: Partial<ILibButton | ILibButtonIcon> = {
                        "data-testid":
                            button["data-testid"] ||
                            (testid && `${testid}.Button.${i}`),
                        className:
                            button.className ||
                            (className && `Button Button__${i}`),
                        color,
                        variant: variant as any,
                    }

                    const filteredButtonRest = filterObject(
                        button,
                        // @ts-expect-error
                        ([n]) => n !== "iconOnly"
                    )

                    return (
                        <Fragment key={uuid()}>
                            {button.iconOnly ? (
                                <ButtonIcon
                                    {...(commonProps as any)}
                                    icon={button.iconOnly}
                                    borderRadius={0}
                                    size={size === "small" ? 24 : (34 as any)}
                                    aria-label={
                                        button["aria-label"] ||
                                        capitalize(
                                            typeof button.iconOnly === "string"
                                                ? button.iconOnly
                                                : "button"
                                        )
                                    }
                                    iconSize={button?.iconSizes?.only}
                                    {...(filteredButtonRest as any)}
                                />
                            ) : (
                                <Button
                                    {...(commonProps as any)}
                                    borderRadius={0}
                                    size={size as any}
                                    icons={{
                                        left: button.iconLeft,
                                        right: button.iconRight,
                                    }}
                                    iconSizes={{
                                        left: button?.iconSizes?.left,
                                        right: button?.iconSizes?.right,
                                    }}
                                    aria-label={
                                        button["aria-label"] || button.text
                                    }
                                    {...(filteredButtonRest as any)}
                                >
                                    {button.text}
                                </Button>
                            )}

                            {variant === "transparent" &&
                                i !== buttons.length - 1 && (
                                    <Separator
                                        data-testid={
                                            testid && `${testid}.Separator.${i}`
                                        }
                                        className={`Separator__${i}`}
                                        $color={color}
                                    />
                                )}
                        </Fragment>
                    )
                })}
            </StyledButtonGroup>
        )
    }
)
