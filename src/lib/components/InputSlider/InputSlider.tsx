/*=============================================== InputSlider component ===============================================*/

import { forwardRef, type ForwardedRef, useState, useCallback } from "react"
import { Flexbox, Text } from "../../"
import type { ILibText } from "../../types/components-props"
import { Slider, type ILibInputSlider as IInpuSlider } from "./Slider"
import { InputContainer } from "../InputComponents"
import { SliderContainer, Tooltip } from "./styles"
import type { ILibInputSlider } from "./types"

/**
 * @description Returns a InputSlider component
 * @link https://documentation-components-react.vercel.app/components/input-slider
 * @extends HTMLInputElement
 * @prop data-testid?: string
 */

export const InputSlider = forwardRef<HTMLInputElement, ILibInputSlider>(
    (
        {
            "data-testid": testid,
            className,
            label,
            helper,
            helperBottom,
            validation,
            id,
            value,
            min = 0,
            max = 100,
            showMinMax,
            showValue = value ? "hover" : "never",
            inputBackground,
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
        const hasWrapper: boolean = !!(showValue !== "never" || showMinMax)

        const sliderProps: IInpuSlider & {
            ref: ForwardedRef<HTMLInputElement>
        } = {
            "data-testid": testid,
            className,
            ref,
            id,
            min,
            max,
            validationStatus: validation?.status,
            hasContainer,
            hasWrapper,
            inputBackground,
            value,
            ...rest,
        }
        const textProps: Pick<ILibText, "color" | "tag"> = {
            tag: "small",
            color: "gray",
        }

        const [isTooltipVisible, setIsTooltipVisible] = useState(
            !!(showValue === "always")
        )

        const handleMouseEnter = useCallback(() => {
            if (showValue === "hover") setIsTooltipVisible(true)
        }, [showValue])
        const handleMouseLeave = useCallback(() => {
            if (showValue === "hover") setIsTooltipVisible(false)
        }, [showValue])

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
                counter={false}
                maxLength={undefined}
            >
                {showMinMax || showValue !== "never" ? (
                    <Flexbox
                        data-testid={
                            hasContainer ? `${testid}.SliderWrapper` : testid
                        }
                        className={hasContainer ? "SliderWrapper" : className}
                        alignItems="center"
                        gap="xs"
                    >
                        {showMinMax && (
                            <Text
                                data-testid={
                                    testid && `${testid}.SliderWrapper.Min`
                                }
                                className={className && "SliderWrapper__Min"}
                                {...textProps}
                            >
                                {min}
                            </Text>
                        )}

                        {showValue ? (
                            <SliderContainer
                                data-testid={
                                    testid &&
                                    `${testid}.SliderWrapper.SliderContainer`
                                }
                                className={
                                    className &&
                                    "SliderWrapper__SliderContainer"
                                }
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Slider {...sliderProps} />

                                <Tooltip
                                    data-testid={
                                        testid &&
                                        `${testid}.SliderWrapper.SliderContainer.Tooltip`
                                    }
                                    className={
                                        className &&
                                        "SliderWrapper__SliderContainer__Tooltip"
                                    }
                                    $isVisible={isTooltipVisible}
                                    $value={value || 0}
                                    $max={max}
                                >
                                    {value}
                                </Tooltip>
                            </SliderContainer>
                        ) : (
                            <Slider {...sliderProps} />
                        )}

                        {showMinMax && (
                            <Text
                                data-testid={
                                    testid && `${testid}.SliderWrapper.Max`
                                }
                                className={className && "SliderWrapper__Max"}
                                {...textProps}
                            >
                                {max}
                            </Text>
                        )}
                    </Flexbox>
                ) : (
                    <Slider {...sliderProps} />
                )}
            </InputContainer>
        )
    }
)
