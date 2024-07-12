/*=============================================== InputContainer component ===============================================*/

import { Text } from "../../.."
import { getIconSizeFromFont } from "../../../lib-utils"
import { LibIcon } from "../../LibIcon"
import { InputValidationHelper } from "./InputValidationHelper"
import {
    StyledInputContainer,
    Label,
    HelperBottomContainer,
    HelperBottomIconContainer,
    HelperBottom,
} from "../styles"
import type { ILibInputContainer } from "../types"

/**
 * @description Returns a input container, with label, helper, helper bottom, counter and validation
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop id: string | undefined
 * @prop label: string | JSX.Element | undefined
 * @prop helper: string | undefined
 * @prop helperBottom: string | { text: string; textColor?: LibAllColors; fontStyle?: FontStyle; icon?: string | JSX.Element; iconColor?: LibAllColors; iconSize?: number } | undefined
 * @prop validation: ValidationHelper | undefined
 * @prop value: any | undefined
 * @prop counter: boolean | undefined
 * @prop maxLength: number | undefined
 */

export function InputContainer({
    "data-testid": testid,
    id,
    label,
    helper,
    helperBottom,
    validation,
    counter,
    maxLength,
    children,
    value,
    className,
    hasListOpen,
}: ILibInputContainer) {
    if (!label && !helper && !helperBottom && !validation && !counter)
        return children

    return (
        <StyledInputContainer
            data-testid={testid}
            className={className}
            $hasListOpen={hasListOpen}
        >
            {label && (
                <Label
                    data-testid={testid && `${testid}.Label`}
                    className={className && "Label"}
                    htmlFor={id}
                >
                    {label}
                </Label>
            )}

            {helper && (
                <Text
                    data-testid={testid && `${testid}.Helper`}
                    className={className && "Helper"}
                >
                    {helper}
                </Text>
            )}

            {children}

            {helperBottom &&
                (typeof helperBottom === "string" || !helperBottom.icon ? (
                    <HelperBottom
                        data-testid={testid && `${testid}.HelperBottom`}
                        className={className && "HelperBottom"}
                        color={
                            typeof helperBottom === "object" &&
                            helperBottom.textColor
                                ? helperBottom.textColor
                                : undefined
                        }
                        $fontStyle={
                            typeof helperBottom === "object" &&
                            helperBottom.fontStyle
                                ? helperBottom.fontStyle
                                : undefined
                        }
                    >
                        {typeof helperBottom === "string"
                            ? helperBottom
                            : helperBottom.text}
                    </HelperBottom>
                ) : (
                    <HelperBottomContainer
                        data-testid={
                            testid && `${testid}.HelperBottomContainer`
                        }
                        className={className && "HelperBottomContainer"}
                    >
                        <HelperBottomIconContainer
                            data-testid={
                                testid && `${testid}.HelperBottom.IconContainer`
                            }
                            className={
                                className && "HelperBottom__IconContainer"
                            }
                        >
                            <LibIcon
                                data-testid={
                                    testid &&
                                    `${testid}.HelperBottom.IconContainer.Icon`
                                }
                                className={
                                    className &&
                                    "HelperBottom__IconContainer__Icon"
                                }
                                icon={helperBottom.icon}
                                color={helperBottom.iconColor || "primary"}
                                size={
                                    helperBottom.iconSize ||
                                    getIconSizeFromFont("small")
                                }
                            />
                        </HelperBottomIconContainer>

                        <HelperBottom
                            data-testid={
                                testid && `${testid}.HelperBottom.Text`
                            }
                            className={className && "HelperBottom__Text"}
                            color={
                                helperBottom.textColor
                                    ? helperBottom.textColor
                                    : undefined
                            }
                            $fontStyle={
                                helperBottom.fontStyle
                                    ? helperBottom.fontStyle
                                    : undefined
                            }
                        >
                            {helperBottom.text}
                        </HelperBottom>
                    </HelperBottomContainer>
                ))}

            {counter && (
                <HelperBottom
                    data-testid={testid && `${testid}.Counter`}
                    className={className && "Counter"}
                    color="gray"
                    $fontStyle="italic"
                >
                    {value.toString().length}
                    {maxLength && `/${maxLength}`}
                </HelperBottom>
            )}

            {validation && (
                <InputValidationHelper
                    data-testid={testid}
                    className={className}
                    validation={validation}
                />
            )}
        </StyledInputContainer>
    )
}
