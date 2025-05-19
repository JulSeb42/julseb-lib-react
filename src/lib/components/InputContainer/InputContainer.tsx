import type { FC } from "react"
import classNames from "classnames"
import { Text } from "../../"
import { InputValidationHelper } from "../InputComponents"
import { HelperBottom } from "./HelperBottom"
import {
    StyledInputContainer,
    Label,
    LabelComment,
    StyledHelperBottom,
} from "./styles"
import type { ILibInputContainer } from "./types"

/**
 * InputContainer component for wrapping input fields with label, helper, validation, counter, and additional UI elements.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - InputContainer props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {ElementType} [props.as] - Custom element type to render as.
 *  * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.label] - Label for the input.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the input.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the input. Object: { text, element, textColor, fontStyle, icon, iconColor, iconSize }.
 * @param {any} [props.value] - Value of the input (used for counter).
 * @param {boolean} [props.counter] - Show character counter.
 * @param {number} [props.maxLength] - Maximum length for the input value.
 * @param {boolean} [props.hasListOpen] - Whether a dropdown/list is open (for styling).
 *  * @param {CSSProperties} [props.style] - Custom style for the container.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {Object} [props.validation] - Validation status and message. { status, message, iconNotPassed, iconNotPassedSize, iconPassed, iconPassedSize, iconBaseUrl }
 * @param {string} [props.className] - Additional class names.
 *  * @param {ReactNode} [props.children] - Input field and other children.
 * @returns {JSX.Element} The rendered InputContainer component.
 *
 * @see https://documentation-components-react.vercel.app/components/input-container
 * @example
 * <InputContainer
 *   label="Username"
 *   helper="Enter your username"
 *   counter
 *   maxLength={20}
 *   validation={{ status: "success", message: "Looks good!" }}
 * >
 *   <input type="text" />
 * </InputContainer>
 */
export const InputContainer: FC<ILibInputContainer> = ({
    "data-testid": testid,
    as,
    ref,
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
    style,
    iconBaseUrl,
    ...rest
}) => {
    return (
        <StyledInputContainer
            data-testid={testid}
            ref={ref}
            as={as}
            className={classNames(className, { Open: hasListOpen })}
            style={style}
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

            {helperBottom && (
                <HelperBottom
                    data-testid={testid}
                    className={className}
                    helperBottom={helperBottom}
                />
            )}

            {counter && (
                <StyledHelperBottom
                    data-testid={testid && `${testid}.Counter`}
                    className={className && "Counter"}
                    color="gray"
                    $fontStyle="italic"
                >
                    {value.toString().length}
                    {maxLength && `/${maxLength}`}
                </StyledHelperBottom>
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
