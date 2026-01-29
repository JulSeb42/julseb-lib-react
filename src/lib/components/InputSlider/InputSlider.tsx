import { useState, type FC } from "react"
import { Text } from "../Text"
import { clsx } from "../../utils"
import { InputContainer } from "../InputContainer"
import type { ILibInputSlider } from "./types"

/**
 * InputSlider component for creating range input sliders with customizable appearance, tooltips, and min/max value display.
 *
 * @component
 *
 * @example
 * <InputSlider
 *   value={50}
 *   min={0}
 *   max={100}
 *   label="Volume"
 *   showValue="hover"
 *   showMinMax
 * />
 *
 * @extends HTMLInputElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the slider container.
 * @prop {React.Ref<HTMLInputElement>} [props.ref] - Ref to the input element.
 * @prop {string} [props.label] - Label text to display above the slider.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the slider.
 * @prop {string} [props.id] - Unique identifier for the input element.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object.
 * @prop {boolean} [props.showMinMax] - Whether to display min and max values on the sides of the slider.
 * @prop {"never" | "always" | "hover"} [props.showValue="never"] - When to show the current value tooltip.
 * @prop {number} [props.min=0] - Minimum value for the slider range.
 * @prop {number} [props.max=100] - Maximum value for the slider range.
 * @prop {number} [props.value] - Current value of the slider.
 * @prop {string} [containerClassName] - Additional CSS classes for the container.
 * @prop {any} [props.rest] - Additional props spread to the input element.
 *
 * @returns {JSX.Element} The rendered InputSlider component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/input-slider
 */
export const InputSlider: FC<ILibInputSlider> = ({
	className,
	ref,
	label,
	labelComment,
	helper,
	helperBottom,
	id,
	validation,
	showMinMax,
	showValue = "never",
	min = 0,
	max = 100,
	value,
	containerClassName,
	...rest
}) => {
	const percentage = ((Number(value) - min) / (max - min)) * 100

	const [isTooltipVisible, setIsTooltipVisible] = useState(
		!!(showValue === "always"),
	)

	const inputProps = {
		ref,
		id,
		type: "range",
		className: clsx(
			"bg-transparent border-none outline-none w-full appearance-none",
			"w-full h-2 rounded-full relative z-0",
			"before:absolute before:h-2 before:bg-primary-500 before:w-(--cursor-value) before:rounded-full",

			"[&::-webkit-slider-track]:appearance-none [&::-webkit-slider-track]:bg-transparent [&::-webkit-slider-track]:border-none [&::-webkit-slider-track]:outline-none",
			"[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-transparent [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:outline-none [&::-webkit-slider-thumb]:cursor-pointer",
			"[&::-webkit-slider-track]:bg-primary-500 [&::-webkit-slider-track]:h-full",
			"[&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:bg-primary-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-20 [&::-webkit-slider-thumb]:ring-background [&::-webkit-slider-thumb]:ring-2",

			"[&::-moz-range-track]:appearance-none [&::-moz-range-track]:bg-transparent [&::-moz-range-track]:border-none [&::-moz-range-track]:outline-none",
			"[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-transparent [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:outline-none [&::-moz-range-thumb]:cursor-pointer",
			"[&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:bg-primary-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:ring-2 [&::-moz-range-thumb]:ring-white",

			validation?.status === false
				? "before:bg-danger-500 [&::-webkit-slider-track]:bg-danger-500 [&::-webkit-slider-thumb]:bg-danger-500 [&::-moz-range-thumb]:bg-danger-500"
				: validation?.status === true &&
						"before:bg-success-500 [&::-webkit-slider-track]:bg-success-500 [&::-webkit-slider-thumb]:bg-success-500 [&::-moz-range-thumb]:bg-success-500",
			"input-slider",
		),
		min,
		max,
		value,
		...rest,
	}

	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			id={id}
			validation={validation}
			className={containerClassName}
		>
			<div
				className={clsx(
					"flex items-center gap-2 w-full input-slider-container",
					className,
				)}
			>
				{showMinMax && (
					<Text tag="small" color="gray" className="min-max">
						{min}
					</Text>
				)}

				<div className="relative w-full slider-wrapper">
					{showValue !== "never" && (
						<span
							className={clsx(
								"-top-8 z-10 absolute bg-overlay-black-80 px-2 py-1 rounded-md text-white",
								"after:absolute after:top-full after:border-4 after:border-transparent after:border-t-overlay-black-80",
								percentage <= 5
									? "after:left-1"
									: percentage >= 95
										? "after:right-1"
										: "after:left-1/2 after:-translate-x-1/2",
								showValue === "hover" &&
									(isTooltipVisible
										? "opacity-100"
										: "opacity-0"),
								showValue === "always" && "opacity-100",
								"slider-value",
							)}
							style={{
								left: `${percentage}%`,
								transform: `translateX(${
									percentage <= 5
										? "0%"
										: percentage >= 95
											? "-100%"
											: "-50%"
								})`,
							}}
						>
							{value}
						</span>
					)}
					<input
						style={{
							["--cursor-value" as any]: `${percentage}%`,
							background:
								validation?.status === false
									? `linear-gradient(to right, rgb(239 68 68) 0%, rgb(239 68 68) ${percentage}%, rgb(229 231 235) ${percentage}%, rgb(229 231 235) 100%)`
									: validation?.status === true
										? `linear-gradient(to right, rgb(34 197 94) 0%, rgb(34 197 94) ${percentage}%, rgb(229 231 235) ${percentage}%, rgb(229 231 235) 100%)`
										: `linear-gradient(to right, rgb(59 130 246) 0%, rgb(59 130 246) ${percentage}%, rgb(229 231 235) ${percentage}%, rgb(229 231 235) 100%)`,
						}}
						onMouseEnter={() => {
							if (showValue === "hover") setIsTooltipVisible(true)
						}}
						onMouseLeave={() => {
							if (showValue === "hover")
								setIsTooltipVisible(false)
						}}
						{...inputProps}
					/>
				</div>

				{showMinMax && (
					<Text tag="small" color="gray" className="min-max">
						{max}
					</Text>
				)}
			</div>
		</InputContainer>
	)
}
