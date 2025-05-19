import type { FC } from "react"
import type { ILibInputSlider } from "./types"
import { StyledInputSlider } from "./styles"

export const Slider: FC<
    ILibInputSlider & { hasContainer: boolean; hasWrapper: boolean }
> = ({
    "data-testid": testid,
    ref,
    className,
    id,
    min = 0,
    max = 100,
    validation,
    hasContainer,
    hasWrapper,
    inputBackground,
    value,
    ...rest
}) => {
    return (
        <StyledInputSlider
            data-testid={
                (hasContainer || hasWrapper) && testid
                    ? `${testid}.Input`
                    : testid
            }
            ref={ref}
            className={
                (hasContainer || hasWrapper) && className ? "Input" : className
            }
            id={id}
            min={min}
            max={max}
            type="range"
            $validationStatus={validation?.status}
            $inputBackground={inputBackground}
            $value={value ?? 0}
            $max={max}
            {...rest}
        />
    )
}
