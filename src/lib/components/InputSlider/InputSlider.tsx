/*=============================================== InputSlider component ===============================================*/

import { forwardRef, type ForwardedRef, useState, useCallback } from "react"
import classNames from "classnames"
import { Flexbox, Text } from "../../"
import type { ILibText } from "../../types/components-props"
import { Slider } from "./Slider"
import { InputContainer } from "../InputComponents"
import { SliderContainer, Tooltip } from "./styles"
import type { ILibInputSlider } from "./types"

/**
 * @description Returns a InputSlider component
 * @link https://documentation-components-react.vercel.app/components/input-slider
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLInputElement>
 */
export const InputSlider = forwardRef<HTMLInputElement, ILibInputSlider>(
    (
        {
            "data-testid": testid,
            className,
            label,
            labelComment,
            helper,
            helperBottom,
            validation,
            id,
            value = 50,
            min = 0,
            max = 100,
            showMinMax,
            showValue = value ? "hover" : "never",
            inputBackground,
            containerStyle,
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
        const hasWrapper: boolean = !!(showValue !== "never" || showMinMax)

        const sliderProps: ILibInputSlider & {
            ref: ForwardedRef<HTMLInputElement>
            hasContainer: boolean
            hasWrapper: boolean
        } = {
            "data-testid": testid,
            className,
            ref,
            id,
            min,
            max,
            validation,
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
                labelComment={labelComment}
                helper={helper}
                helperBottom={helperBottom}
                id={id}
                validation={validation}
                value={value}
                counter={false}
                maxLength={undefined}
                iconBaseUrl={undefined}
                style={containerStyle}
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
                                className={className && "SliderMin"}
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
                                className={className && "SliderContainer"}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Slider {...sliderProps} />

                                <Tooltip
                                    data-testid={
                                        testid &&
                                        `${testid}.SliderWrapper.SliderContainer.Tooltip`
                                    }
                                    className={classNames(
                                        { SliderTooltip: className },
                                        { Visible: isTooltipVisible }
                                    )}
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
                                className={className && "SliderMax"}
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
