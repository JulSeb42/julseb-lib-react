/*=============================================== InputCounter component ===============================================*/

import { forwardRef, type ChangeEvent, useCallback } from "react"
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

/**
 * @description Returns a InputCounter component
 * @link https://documentation-components-react.vercel.app/components/input-counter
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLInputElement>
 * @prop value: number
 * @prop setValue: Dispatch<SetStateAction<number>>
 * @prop min?: number
 * @prop max?: number
 * @prop step?: number
 * @prop buttonVariant?: "plain" | "transparent" | "ghost"
 * @prop icons?: { plus?: string | JSX.Element; minus?: string | JSX.Element }
 * @prop iconSizes?: { plus?: number; minus?: number }
 * @prop labelButtons?: { plus?: string; minus?: string }
 * @prop showButtonTooltip?: boolean
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }
 * @prop validation?: { status: boolean | undefined; message: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number }
 * @prop inputBackground?: "light" | "dark"
 * @prop inputVariant?: "rounded" | "pill"
 */

const BUTTON_SIZE = 32 as const

export const InputCounter = forwardRef<HTMLInputElement, ILibInputCounter>(
    (
        {
            "data-testid": testid,
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
            ...rest
        },
        ref
    ) => {
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
                        {...buttonProps}
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
                                $validation={validation?.status}
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
                        {...buttonProps}
                    />
                </InputCounterWrapper>
            </InputContainer>
        )
    }
)
