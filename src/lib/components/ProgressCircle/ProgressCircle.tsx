import { useEffect, useState, type FC } from "react"
import { Text } from "../Text"
import { COLORS } from "../../Variables"
import { clsx, designTokens } from "../../utils"
import type { ILibProgressCircle } from "./types"
import type { LibColorsShort } from "../../types"

/**
 * ProgressCircle component for displaying circular progress with customizable colors and smooth animations using SVG.
 *
 * @component
 *
 * @example
 * <ProgressCircle
 *   value={75}
 *   color="primary"
 *   size={120}
 *   showValue
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the progress circle.
 * @prop {React.Ref<any>} [props.ref] - Ref to the progress circle element.
 * @prop {number} [props.value] - Current progress value (0-100).
 * @prop {number} [props.size=48] - Size of the progress circle in pixels.
 * @prop {number} [props.strokeWidth=4] - Width of the progress stroke.
 * @prop {boolean} [props.noAnimation] - Whether to disable the progress animation.
 * @prop {"primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "white"} [props.color="primary"] - Color theme for the progress circle stroke.
 * @prop {boolean} [props.showValue] - Whether to display the percentage value in the center.
 * @prop {React.ReactNode} [props.icon] - Custom icon to display in the center instead of value.
 *
 * @returns {JSX.Element} The rendered ProgressCircle component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/progress-circle
 */
export const ProgressCircle: FC<ILibProgressCircle> = ({
	className,
	ref,
	value,
	size = 48,
	strokeWidth = 4,
	noAnimation,
	color = "primary",
	showValue,
	icon,
	...rest
}) => {
	const [animatedValue, setAnimatedValue] = useState(noAnimation ? value : 0)
	const radius = (size - strokeWidth) / 2
	const circumference = 2 * Math.PI * radius
	const strokeDashoffset =
		circumference - (animatedValue / 100) * circumference
	const backgroundColor = designTokens.libColors["gray-200"]
	const strokeColor = genStrokeColor[color]

	useEffect(() => {
		if (!noAnimation) {
			// Small delay to ensure the initial state is rendered
			const timer = setTimeout(() => {
				setAnimatedValue(value)
			}, 50)
			return () => clearTimeout(timer)
		} else {
			setAnimatedValue(value)
		}
	}, [value, noAnimation])

	return (
		<div
			ref={ref}
			className={clsx(
				"inline-flex relative justify-center items-center",
				"progress-circle-wrapper",
				className,
			)}
			{...rest}
		>
			<svg
				width={size}
				height={size}
				className="-rotate-90 transform progress-circle"
			>
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke={backgroundColor}
					strokeWidth={strokeWidth}
					fill="transparent"
					className="progress-circle-background"
				/>

				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke={strokeColor}
					strokeWidth={strokeWidth}
					fill="transparent"
					strokeDasharray={circumference}
					strokeLinecap="round"
					style={{
						strokeDashoffset: strokeDashoffset,
						transition: noAnimation
							? "none"
							: `stroke-dashoffset ${value * 20}ms cubic-bezier(0.4, 0, 0.2, 1)`,
					}}
					className="progress-circle-value"
				/>
			</svg>

			{(showValue || icon) && (
				<div className="absolute inset-0 flex justify-center items-center progress-circle-center">
					{icon && icon}

					{showValue && (
						<Text
							tag="small"
							color="gray"
							className="progress-circle-value"
						>
							{value}%
						</Text>
					)}
				</div>
			)}
		</div>
	)
}

const genStrokeColor: Record<
	Exclude<LibColorsShort, "transparent" | "current" | "black" | "background">,
	string
> = {
	primary: COLORS.PRIMARY_500,
	secondary: COLORS.SECONDARY_500,
	success: COLORS.SUCCESS_500,
	danger: COLORS.DANGER_500,
	warning: COLORS.WARNING_500,
	gray: COLORS.GRAY_500,
	white: COLORS.WHITE,
}
