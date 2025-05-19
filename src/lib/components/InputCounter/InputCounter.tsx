import { useCallback, type ChangeEvent, type FC } from "react"
import classNames from "classnames"
import { ButtonIcon } from "../../"
import { InputContainer } from "../InputComponents"
import { Plus, Minus } from "../../icons"
import { roundIconSize } from "../../lib-utils"
import type { ILibButtonIcon } from "../ButtonIcon/types"
import {
    InputCounterWrapper,
    Input,
    NumberValue,
    StyledInputWrapper,
} from "./styles"
import type { ILibInputCounter } from "./types"

const BUTTON_SIZE = 32 as const

/**
 * InputCounter component for rendering a numeric input with increment and decrement buttons, supporting validation, tooltips, and flexible styling.
 *
 * @component
 * @extends HTMLInputElement
 * @param {Object} props - InputCounter props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {Ref<HTMLInputElement>} [props.ref] - Ref forwarded to the input element.
 * @param {number} props.value - Current value of the counter.
 *  * @param {Dispatch<React.SetStateAction<number>>} props.setValue - Setter for the counter value.
 * @param {number} [props.min] - Minimum value.
 * @param {number} [props.max] - Maximum value.
 * @param {number} [props.step=1] - Step increment/decrement.
 * @param {"plain" | "transparent" | "ghost"} [props.buttonVariant] - Button variant for plus/minus buttons.
 * @param {{ plus?: string | JSX.Element; minus?: string | JSX.Element }} [props.icons] - Custom icons for plus and minus buttons.
 * @param {{ plus?: number; minus?: number }} [props.iconSizes] - Icon sizes for plus and minus buttons.
 * @param {{ plus?: string; minus?: string }} [props.labelButtons] - Aria-labels/tooltips for plus and minus buttons.
 * @param {boolean} [props.showButtonTooltip] - Show tooltips for plus/minus buttons.
 * @param {boolean} [props.inputNoEdit] - If true, disables direct input editing.
 * @param {"light" | "dark"} [props.inputBackground] - Input background style (only if inputNoEdit is false or undefined).
 * @param {"rounded" | "pill"} [props.inputVariant="rounded"] - Input variant style (only if inputNoEdit is false or undefined).
 * @param {string} [props.id] - Input id.
 * @param {string} [props.label] - Label for the input.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the input.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the input.
 * @param {Object} [props.validation] - Validation status and message.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 *  * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 * @param {boolean} [props.disabled] - Disable the input and buttons.
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the input.
 * @returns {JSX.Element} The rendered InputCounter component.
 *
 * @see https://documentation-components-react.vercel.app/components/input-counter
 * @example
 * <InputCounter
 *   value={1}
 *   setValue={setValue}
 *   min={0}
 *   max={10}
 *   step={1}
 *   label="Quantity"
 *   showButtonTooltip
 * />
 */
export const InputCounter: FC<ILibInputCounter> = ({
    "data-testid": testid,
    ref,
    className,
    label,
    labelComment,
    helper,
    helperBottom,
    id,
    validation,
    inputBackground,
    inputVariant = "rounded",
    value = 0,
    setValue,
    min,
    max,
    step = 1,
    buttonVariant,
    iconSizes = {
        plus: roundIconSize(BUTTON_SIZE),
        minus: roundIconSize(BUTTON_SIZE),
    },
    icons,
    iconBaseUrl,
    labelButtons = {
        plus: "Plus",
        minus: "Minus",
    },
    showButtonTooltip,
    inputNoEdit,
    disabled,
    containerStyle,
    ...rest
}) => {
    const hasContainer: boolean = !!(
        label ||
        labelComment ||
        helper ||
        helperBottom ||
        validation
    )

    const buttonProps: Partial<
        Pick<
            ILibButtonIcon,
            | "size"
            | "showTooltip"
            | "disabled"
            | "aria-disabled"
            | "variant"
            | "color"
            | "iconBaseUrl"
        >
    > = {
        size: 32,
        showTooltip: showButtonTooltip && {
            position: "top",
            offset: 2,
        },
        variant: buttonVariant,
        color: validation?.status === false ? "danger" : "primary",
        iconBaseUrl,
    }

    const isMinDisabled = disabled || !!(min && value <= min)
    const isMaxDisabled = disabled || !!(max && value >= max)

    const handleMinus = useCallback(() => {
        const newValue = value - step

        if (min && newValue < min) {
            setValue(min)
            return
        }

        setValue(newValue)
    }, [min, setValue, step, value])

    const handlePlus = useCallback(() => {
        const newValue = value + step

        if (max && newValue > max) {
            setValue(max)
            return
        }

        setValue(newValue)
    }, [max, setValue, step, value])

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const numberValue = Number(e.target.value)

            if (min && numberValue < min) {
                setValue(min)
                return
            }
            if (max && numberValue > max) {
                setValue(max)
                return
            }

            setValue(numberValue)
        },
        [max, min, setValue]
    )

    return (
        <InputContainer
            data-testid={testid}
            className={className}
            label={label}
            labelComment={labelComment}
            helper={helper}
            helperBottom={helperBottom}
            id={id}
            validation={validation}
            value={value}
            counter={undefined}
            maxLength={undefined}
            iconBaseUrl={iconBaseUrl}
            style={containerStyle}
            hasListOpen={undefined}
        >
            <InputCounterWrapper
                data-testid={
                    hasContainer && testid
                        ? `${testid}.InputCounterWrapper`
                        : testid
                }
                className={
                    hasContainer && className
                        ? "InputCounterWrapper"
                        : className
                }
                $isInputEditable={!inputNoEdit}
            >
                <ButtonIcon
                    data-testid={testid && `${testid}.Button.Minus`}
                    className={className && "ButtonMinus"}
                    icon={
                        icons?.minus || (
                            <Minus
                                data-testid={
                                    testid && `${testid}.Button.Minus.Icon`
                                }
                                className={className && "IconMinus"}
                                size={iconSizes.minus}
                            />
                        )
                    }
                    iconSize={iconSizes.minus}
                    aria-label={labelButtons.minus}
                    tooltip={labelButtons.minus}
                    onClick={handleMinus}
                    disabled={isMinDisabled}
                    aria-disabled={isMinDisabled}
                    {...(buttonProps as any)}
                />

                {!inputNoEdit ? (
                    <StyledInputWrapper
                        data-testid={testid}
                        className={className}
                        hasContainer={hasContainer}
                        isTextArea={false}
                        inputBackground={inputBackground}
                        inputVariant={inputVariant}
                        validationStatus={validation?.status}
                        hasListOpen={undefined}
                    >
                        <Input
                            data-testid={testid && `${testid}.Input`}
                            className={classNames(
                                { Input: className },
                                { WithListOpen: false }
                            )}
                            id={id}
                            ref={ref}
                            type="number"
                            value={value}
                            onChange={handleChange}
                            min={min}
                            max={max}
                            step={step}
                            disabled={disabled}
                            aria-disabled={disabled}
                            $inputBackground={inputBackground}
                            $inputVariant={inputVariant}
                            $disabled={disabled}
                            $validationStatus={validation?.status}
                            $length={value.toString().length}
                            {...rest}
                        />
                    </StyledInputWrapper>
                ) : (
                    <NumberValue
                        data-testid={testid && `${testid}.Number`}
                        className={className && "NumberValue"}
                        ref={ref}
                        $disabled={disabled}
                        {...rest}
                    >
                        {value}
                    </NumberValue>
                )}

                <ButtonIcon
                    data-testid={testid && `${testid}.Button.Plus`}
                    className={className && "ButtonPlus"}
                    icon={
                        icons?.plus || (
                            <Plus
                                data-testid={
                                    testid && `${testid}.Button.Plus.Icon`
                                }
                                className={className && "IconPlus"}
                                size={iconSizes.plus}
                            />
                        )
                    }
                    iconSize={iconSizes.plus}
                    aria-label={labelButtons.plus}
                    tooltip={labelButtons.plus}
                    onClick={handlePlus}
                    disabled={isMaxDisabled}
                    aria-disabled={isMaxDisabled}
                    {...(buttonProps as any)}
                />
            </InputCounterWrapper>
        </InputContainer>
    )
}
