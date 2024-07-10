/*=============================================== Slider component ===============================================*/

import { forwardRef, type InputHTMLAttributes } from "react"
import type { LibInputBackground, LibValidationStatus } from "../../types"
import { StyledInputSlider } from "./styles"

export interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
    "data-testid": string | undefined
    className: string | undefined
    id: string | undefined
    min: number | undefined
    max: number | undefined
    validationStatus: LibValidationStatus
    hasContainer: boolean
    hasWrapper: boolean
    inputBackground: undefined | LibInputBackground
    value: number | undefined
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
    (
        {
            "data-testid": testid,
            className,
            id,
            min = 0,
            max = 100,
            validationStatus,
            hasContainer,
            hasWrapper,
            inputBackground,
            value,
            ...rest
        }: SliderProps,
        ref
    ) => {
        return (
            <StyledInputSlider
                data-testid={
                    (hasContainer || hasWrapper) && testid
                        ? `${testid}.Input`
                        : testid
                }
                ref={ref}
                className={
                    (hasContainer || hasWrapper) && className
                        ? "Input"
                        : className
                }
                id={id}
                min={min}
                max={max}
                type="range"
                $validation={validationStatus}
                $inputBackground={inputBackground}
                $value={value || 0}
                $max={max}
                {...rest}
            />
        )
    }
)
