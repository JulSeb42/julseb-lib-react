/*=============================================== InputCheck component ===============================================*/

import { forwardRef } from "react"
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
 */

export const InputCheck = forwardRef<HTMLInputElement, ILibInputCheck>(
    (
        {
            "data-testid": testid,
            children,
            type = "checkbox",
            className,
            validation,
            id,
            variant,
            iconCheckSize = 14,
            iconCheck = (
                <Check
                    size={iconCheckSize}
                    data-testid={
                        testid && `${testid}.CheckContainer.Checkbox.Icon`
                    }
                    className={className && "CheckContainer__Checkbox__Icon"}
                />
            ),
            disabled,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledInputCheck
                data-testid={testid}
                className={className}
                htmlFor={id}
                $variant={variant}
                $disabled={disabled}
                $validation={validation}
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
                        $validation={validation}
                        $disabled={disabled}
                    >
                        {variant === "toggle" ? (
                            <Toggle
                                data-testid={
                                    testid && `${testid}.CheckContainer.Toggle`
                                }
                                className={
                                    className && "CheckContainer__Toggle"
                                }
                            />
                        ) : type === "radio" ? (
                            <Radio
                                data-testid={
                                    testid && `${testid}.CheckContainer.Radio`
                                }
                                className={className && "CheckContainer__Radio"}
                            />
                        ) : (
                            <Checkbox
                                data-testid={
                                    testid &&
                                    `${testid}.CheckContainer.Checkbox`
                                }
                                className={
                                    className && "CheckContainer__Checkbox"
                                }
                            >
                                <LibIcon
                                    data-testid={
                                        testid &&
                                        `${testid}.CheckContainer.Checkbox.Icon`
                                    }
                                    className={
                                        className &&
                                        "CheckContainer__Checkbox__Icon"
                                    }
                                    icon={iconCheck}
                                    size={iconCheckSize}
                                />
                            </Checkbox>
                        )}
                    </CheckContainer>
                )}

                <StyledText
                    data-testid={testid && `${testid}.Text`}
                    className={className && "Text"}
                >
                    {children}
                </StyledText>
            </StyledInputCheck>
        )
    }
)
