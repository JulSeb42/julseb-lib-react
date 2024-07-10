/*=============================================== InputCounter component ===============================================*/

import { forwardRef, type ChangeEvent, useCallback } from "react"
import { ButtonIcon } from "../../"
import { InputContainer } from "../InputComponents"
import { Plus, Minus } from "../../icons"
import { roundIconSize } from "../../lib-utils"
import type { ButtonIconProps } from "../ButtonIcon/types"
import { InputCounterWrapper, Input, NumberValue } from "./styles"
import type { InputCounterProps } from "./types"

/**
 * @description Returns a InputCounter component
 * @link https://documentation-components-react.vercel.app/components/input-counter
 * @extends HTMLElement
 * @prop data-testid?: string
 * @prop value: number
 * @prop setValue: Dispatch<SetStateAction<number>>
 * @prop min?: number
 * @prop max?: number
 * @prop step?: number
 * @prop type?: never
 * @prop buttonVariant?: ButtonIconVariant
 * @prop icons?: { plus?: string | JSX.Element; minus?: string | JSX.Element }
 * @prop iconSizes?: { plus?: number; minus?: number }
 * @prop labelButtons?: { plus?: string; minus?: string }
 * @prop showButtonTooltip?: boolean
 * @prop isInputEditable?: boolean => default true
 * @prop inputBackground?: LibInputBackground => only if `isInputEditable` is set to true
 * @prop inputVariant?: LibInputVariant => only if `isInputEditable` is set to true
 */

const BUTTON_SIZE = 32 as const

export const InputCounter = forwardRef<HTMLInputElement, InputCounterProps>(
    (
        {
            "data-testid": testid,
            className,
            label,
            helper,
            helperBottom,
            id,
            validation,
            inputBackground,
            inputVariant = "rounded",
            value,
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
            labelButtons = {
                plus: "Plus",
                minus: "Minus",
            },
            showButtonTooltip,
            isInputEditable = true,
            disabled,
            ...rest
        },
        ref
    ) => {
        const hasContainer: boolean = !!(
            label ||
            helper ||
            helperBottom ||
            validation
        )

        const buttonProps: Partial<
            Pick<
                ButtonIconProps,
                | "size"
                | "showTooltip"
                | "disabled"
                | "aria-disabled"
                | "variant"
                | "color"
            >
        > = {
            size: 32,
            showTooltip: showButtonTooltip && {
                position: "top",
                offset: 2,
            },
            variant: buttonVariant,
            color: validation?.status === "not-passed" ? "danger" : "primary",
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
                helper={helper}
                helperBottom={helperBottom}
                id={id}
                validation={validation}
                value={value}
                counter={undefined}
                maxLength={undefined}
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
                    $isInputEditable={isInputEditable}
                >
                    <ButtonIcon
                        data-testid={testid && `${testid}.Button.Minus`}
                        className={className && "Button__Minus"}
                        icon={
                            icons?.minus || (
                                <Minus
                                    data-testid={
                                        testid && `${testid}.Button.Minus.Icon`
                                    }
                                    className={
                                        className && "Button__Minus__Icon"
                                    }
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
                        {...buttonProps}
                    />

                    {isInputEditable ? (
                        <Input
                            data-testid={testid && `${testid}.Input`}
                            className={className && "Input"}
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
                            $validation={validation?.status}
                            $hasIcon={false}
                            $hasListOpen={false}
                            $length={value.toString().length}
                            {...rest}
                        />
                    ) : (
                        <NumberValue
                            data-testid={testid && `${testid}.Number`}
                            className={className && "Number"}
                            ref={ref}
                            $disabled={disabled}
                            {...rest}
                        >
                            {value}
                        </NumberValue>
                    )}

                    <ButtonIcon
                        data-testid={testid && `${testid}.Button.Plus`}
                        className={className && "Button__Plus"}
                        icon={
                            icons?.plus || (
                                <Plus
                                    data-testid={
                                        testid && `${testid}.Button.Plus.Icon`
                                    }
                                    className={
                                        className && "Button__Plus__Icon"
                                    }
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
                        {...buttonProps}
                    />
                </InputCounterWrapper>
            </InputContainer>
        )
    }
)
