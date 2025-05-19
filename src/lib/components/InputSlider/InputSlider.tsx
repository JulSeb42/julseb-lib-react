import { useState, useCallback, type FC } from "react"
import classNames from "classnames"
import { Flexbox, Text } from "../../"
import type { ILibText } from "../../types/components-props"
import { Slider } from "./Slider"
import { InputContainer } from "../InputComponents"
import { SliderContainer, Tooltip } from "./styles"
import type { ILibInputSlider } from "./types"

/**
 * InputSlider component for rendering a slider input with optional min/max labels, value tooltip, and flexible styling.
 *
 * @component
 * @extends HTMLInputElement
 * @param {Object} props - InputSlider props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {Ref<HTMLInputElement>} [props.ref] - Ref forwarded to the input element.
 * @param {boolean} [props.showMinMax] - Show min and max values beside the slider.
 * @param {"hover" | "always" | "never"} [props.showValue] - When to show the slider value tooltip.
 * @param {number} [props.min=0] - Minimum slider value.
 * @param {number} [props.max=100] - Maximum slider value.
 * @param {number} [props.value=50] - Current slider value.
 * @param {string} [props.label] - Label for the slider.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the slider.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the slider.
 * @param {Object} [props.validation] - Validation status and message.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {"light" | "dark"} [props.inputBackground] - Input background style.
 *  * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the slider.
 * @returns {JSX.Element} The rendered InputSlider component.
 *
 * @see https://documentation-components-react.vercel.app/components/input-slider
 * @example
 * <InputSlider
 *   label="Volume"
 *   min={0}
 *   max={100}
 *   value={50}
 *   showMinMax
 *   showValue="hover"
 * />
 */
export const InputSlider: FC<ILibInputSlider> = ({
    "data-testid": testid,
    ref,
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
}) => {
    const hasContainer: boolean = !!(
        label ||
        labelComment ||
        helper ||
        helperBottom ||
        validation
    )
    const hasWrapper: boolean = !!(showValue !== "never" || showMinMax)

    const sliderProps: ILibInputSlider & {
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
            hasListOpen={undefined}
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
