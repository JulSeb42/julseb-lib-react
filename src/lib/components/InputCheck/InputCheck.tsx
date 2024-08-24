/*=============================================== InputCheck component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { capitalize } from "ts-utils-julseb"
import { LibIcon } from "../LibIcon"
import { Check } from "../../icons"
import {
    StyledInputCheck,
    CheckContainer,
    Radio,
    Checkbox,
    Toggle,
    StyledText,
    StyledInput,
} from "./styles"
import type { ILibInputCheck } from "./types"

/**
 * @description Returns a InputCheck component
 * @link https://documentation-components-react.vercel.app/components/input-check
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLInputElement>
 */
export const InputCheck = forwardRef<HTMLInputElement, ILibInputCheck>(
    (
        {
            "data-testid": testid,
            type = "checkbox",
            className,
            validation,
            id,
            variant,
            label,
            iconCheckSize = 14,
            iconCheck = (
                <Check
                    size={iconCheckSize}
                    data-testid={
                        testid && `${testid}.CheckContainer.Checkbox.Icon`
                    }
                    className={className && "Icon"}
                />
            ),
            iconBaseUrl,
            disabled,
            containerStyle,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledInputCheck
                data-testid={testid}
                className={
                    className &&
                    classNames(className, variant && capitalize(variant))
                }
                htmlFor={id}
                style={containerStyle}
                $variant={variant}
                $disabled={disabled}
                $validationStatus={validation}
            >
                <StyledInput
                    data-testid={testid && `${testid}.Input`}
                    className={className && "Input"}
                    ref={ref}
                    type={type}
                    id={id}
                    disabled={disabled}
                    {...rest}
                />

                {variant !== "selector" && (
                    <CheckContainer
                        data-testid={testid && `${testid}.CheckContainer`}
                        className={className && "CheckContainer"}
                        $validationStatus={validation}
                        $disabled={disabled}
                    >
                        {variant === "toggle" ? (
                            <Toggle
                                data-testid={
                                    testid && `${testid}.CheckContainer.Toggle`
                                }
                                className={className && "Toggle"}
                            />
                        ) : type === "radio" ? (
                            <Radio
                                data-testid={
                                    testid && `${testid}.CheckContainer.Radio`
                                }
                                className={className && "Radio"}
                            />
                        ) : (
                            <Checkbox
                                data-testid={
                                    testid &&
                                    `${testid}.CheckContainer.Checkbox`
                                }
                                className={className && "Checkbox"}
                            >
                                <LibIcon
                                    data-testid={
                                        testid &&
                                        `${testid}.CheckContainer.Checkbox.Icon`
                                    }
                                    className={className && "CheckIcon"}
                                    icon={iconCheck}
                                    size={iconCheckSize}
                                    baseUrl={iconBaseUrl}
                                />
                            </Checkbox>
                        )}
                    </CheckContainer>
                )}

                <StyledText
                    data-testid={testid && `${testid}.Text`}
                    className={className && "Text"}
                >
                    {label}
                </StyledText>
            </StyledInputCheck>
        )
    }
)
