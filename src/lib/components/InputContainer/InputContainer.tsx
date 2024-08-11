/*=============================================== InputContainer component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import {} from "ts-utils-julseb"
import { Text } from "../../"
import { InputValidationHelper } from "../InputComponents"
import { LibIcon } from "../LibIcon"
import { getIconSizeFromFont } from "../../lib-utils"
import {
    StyledInputContainer,
    Label,
    LabelComment,
    HelperBottomContainer,
    HelperBottomIconContainer,
    HelperBottom,
} from "./styles"
import type { ILibInputContainer } from "./types"

/**
 * @description Returns a InputContainer component
 * @link https://documentation-components-react.vercel.app/components/input-container
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }
 * @prop children?: ReactChildren
 * @prop value?: any
 * @prop counter?: boolean
 * @prop maxLength?: number
 * @prop hasListOpen?: boolean
 * @prop validation?: { status: boolean | undefined; message: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number }
 * @prop iconBaseUrl?: string
 */
export const InputContainer = forwardRef<HTMLDivElement, ILibInputContainer>(
    (
        {
            "data-testid": testid,
            as,
            children,
            id,
            label,
            labelComment,
            helper,
            helperBottom,
            validation,
            counter,
            maxLength,
            value,
            className,
            hasListOpen,
            iconBaseUrl,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledInputContainer
                data-testid={testid}
                ref={ref}
                as={as}
                className={classNames(className, { Open: hasListOpen })}
                {...rest}
            >
                {(label || labelComment) && (
                    <Label
                        data-testid={testid && `${testid}.Label`}
                        className={className && "Label"}
                        htmlFor={id}
                    >
                        {label && label}

                        {labelComment && (
                            <>
                                {" "}
                                <LabelComment
                                    data-testid={
                                        testid && `${testid}.Label.Comment`
                                    }
                                    className={className && "Comment"}
                                >
                                    {labelComment}
                                </LabelComment>
                            </>
                        )}
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
                                    testid &&
                                    `${testid}.HelperBottom.IconContainer`
                                }
                                className={className && "BottomIconContainer"}
                            >
                                <LibIcon
                                    data-testid={
                                        testid &&
                                        `${testid}.HelperBottom.IconContainer.Icon`
                                    }
                                    className={className && "HelperBottomIcon"}
                                    icon={helperBottom.icon}
                                    color={helperBottom.iconColor || "primary"}
                                    size={
                                        helperBottom.iconSize ||
                                        getIconSizeFromFont("small")
                                    }
                                    baseUrl={iconBaseUrl}
                                />
                            </HelperBottomIconContainer>

                            <HelperBottom
                                data-testid={
                                    testid && `${testid}.HelperBottom.Text`
                                }
                                className={className && "HelperBottomText"}
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
                        iconBaseUrl={iconBaseUrl}
                    />
                )}
            </StyledInputContainer>
        )
    }
)
