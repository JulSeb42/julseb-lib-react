import type { FC } from "react"
import classNames from "classnames"
import { capitalize } from "@julseb-lib/utils"
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
 * InputCheck component for rendering a checkbox or radio input with flexible variants, icons, and validation.
 *
 * @component
 * @extends HTMLInputElement
 * @param {Object} props - InputCheck props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ForwardedRef<HTMLInputElement>} [props.ref] - Ref forwarded to the input element.
 * @param {string} props.id - Input id.
 * @param {ReactNode} props.label - Label for the input.
 * @param {boolean} [props.validation] - Validation status.
 * @param {"tile" | "toggle" | "selector"} [props.variant] - Visual variant of the input.
 * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 * @param {"checkbox" | "radio"} [props.type="checkbox"] - Input type.
 * @param {string | JSX.Element} [props.iconCheck] - Icon for the checkbox (only if type is checkbox).
 * @param {number} [props.iconCheckSize=14] - Size of the checkbox icon (only if type is checkbox).
 * @param {string} [props.iconBaseUrl] - Base URL for the icon (only if type is checkbox).
 * @param {boolean} [props.disabled] - Disable the input.
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the input.
 * @returns {JSX.Element} The rendered InputCheck component.
 *
 * @see https://documentation-components-react.vercel.app/components/input-check
 * @example
 * <InputCheck
 *   id="accept"
 *   label="Accept terms"
 *   type="checkbox"
 *   variant="tile"
 *   validation={true}
 * />
 */
export const InputCheck: FC<ILibInputCheck> = ({
    "data-testid": testid,
    ref,
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
            data-testid={testid && `${testid}.CheckContainer.Checkbox.Icon`}
            className={className && "Icon"}
        />
    ),
    iconBaseUrl,
    disabled,
    containerStyle,
    ...rest
}) => {
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
                                testid && `${testid}.CheckContainer.Checkbox`
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
