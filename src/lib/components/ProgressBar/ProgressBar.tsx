import { type FC } from "react"
import { getPercentage } from "@julseb-lib/utils"
import { clsx } from "../../utils"
import type { ILibProgressBar } from "./types"
import type { LibColorsShort } from "../../types"

/**
 * ProgressBar component for displaying progress with customizable colors and animations using a meter element.
 *
 * @component
 *
 * @example
 * <ProgressBar
 *   value={75}
 *   color="primary"
 *   max={100}
 * />
 *
 * @extends HTMLMeterElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the progress bar.
 * @prop {React.ElementType} [props.element="meter"] - HTML element type to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the progress bar element.
 * @prop {number} [props.value] - Current progress value.
 * @prop {"primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "white"} [props.color="primary"] - Color theme for the progress bar fill.
 * @prop {boolean} [props.noAnimation] - Whether to disable the progress animation.
 * @prop {number} [props.min=0] - Minimum value for the progress bar.
 * @prop {number} [props.max=100] - Maximum value for the progress bar.
 * @prop {string} [props.id] - Unique identifier for the progress bar element.
 *
 * @returns {JSX.Element} The rendered ProgressBar component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/progress-bar
 */
export const ProgressBar: FC<ILibProgressBar> = ({
	className,
	element = "meter",
	ref,
	value,
	color = "primary",
	noAnimation,
	min = 0,
	max = 100,
	id,
	...rest
}) => {
	const Element = element

	const percent = getPercentage(value, Number(max))

	return (
		<Element
			ref={ref}
			id={id}
			className={clsx(
				"block relative bg-gray-200 border-none rounded-full w-full h-4 overflow-hidden",
				"before:h-full before:absolute before:top-0 before:left-0 before:rounded-full before:transition-all before:ease-in-out before:duration-200",
				"appearance-none [&::-webkit-meter-bar]:bg-none [&::-webkit-meter-bar]:border-none",
				"[&::-webkit-meter-optimum-value]:bg-none [&::-webkit-meter-suboptimum-value]:bg-none [&::-webkit-meter-even-less-good-value]:bg-none",
				"[&::-moz-meter-bar]:bg-none [&::-moz-meter-bar]:border-none",
				!noAnimation && "progress-bar",
				noAnimation && "before:w-(--meter-value)",
				genProgressColor[color],
				"progress-bar",
				className,
			)}
			style={{
				["--meter-value" as any]: `${percent}%`,
				["--progress-speed" as any]: value,
			}}
			min={min}
			max={max}
			value={value}
			{...rest}
		/>
	)
}

const genProgressColor: Record<
	Exclude<LibColorsShort, "transparent" | "current" | "black" | "background">,
	string
> = {
	primary: "before:bg-primary-500",
	secondary: "before:bg-secondary-500",
	success: "before:bg-success-500",
	danger: "before:bg-danger-500",
	warning: "before:bg-warning-500",
	gray: "before:bg-gray-500",
	white: "before:bg-white",
}
