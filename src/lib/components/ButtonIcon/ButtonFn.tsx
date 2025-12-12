import { type FC } from "react"
import {
	clsx,
	genBorderRadius,
	genBgColorHover,
	genBgColorGhostHover,
	genTextAllColor,
	genTextColorHover,
	genButtonDisabled,
	genRingColor,
} from "../../utils"
import type { ILibButtonIcon } from "./types"
import { Loader } from "../Loader"

const ButtonIconFn: FC<
	Omit<
		ILibButtonIcon,
		"tooltip" | "showTooltip" | "containerStyle" | "containerClasses"
	>
> = ({
	className,
	element = "button",
	ref,
	icon,
	color = "primary",
	borderRadius = "full",
	variant = "plain",
	isLoading,
	loaderVariant = 1,
	loaderClasses,
	disabled,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-flex justify-center items-center outline-none size-12",
				genButtonDisabled[variant],
				genRingColor[color],
				variant === "plain" && [
					genBgColorHover[color],
					"text-white",
					color === "white" && "text-primary-500",
				],
				variant === "ghost" && [
					genBgColorGhostHover[color],
					genTextAllColor[color],
					color === "white" && "text-primary-500",
				],
				variant === "transparent" && [genTextColorHover[color]],
				genBorderRadius[borderRadius],
				"button-icon",
				className,
			)}
			disabled={disabled || isLoading}
			{...rest}
		>
			{isLoading ? (
				<Loader
					variant={loaderVariant}
					className={clsx(
						"border-5 size-8",
						"button-icon-loader",
						loaderClasses,
					)}
					color="gray"
				/>
			) : (
				icon
			)}
		</Element>
	)
}

export default ButtonIconFn
