import { type FC } from "react"
import {} from "@julseb-lib/utils"
import { Tooltip } from "../Tooltip"
import { ButtonIconFn } from "./ButtonFn"
import type { ILibButtonIcon } from "./types"

/*
	Generate JSDoc with:
	* <short description of the component>
	*
	* @component
	*
	* @example
	* <an example of the component>
	* 
	* @extends <type the component is extending (check in ./types.ts)>
	*
	for each prop, generate:
	* @prop {type} [props.<prop name>] <prop with the possible values, and default values> - <short description of the prop>
	* 
	* @returns <what the component returns>
	*
	* @see https://doc-julseb-lib-react.vercel.app/components/<name of the component>
*/
export const ButtonIcon: FC<ILibButtonIcon> = ({
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
	tooltip,
	showTooltip,
	containerStyle,
	containerClasses,
	"aria-label": ariaLabel = tooltip,
	...rest
}) => {
	const buttonProps = {
		element,
		className,
		ref,
		icon,
		color,
		borderRadius,
		variant,
		isLoading,
		loaderVariant,
		ariaLabel,
		...rest,
	}

	if (tooltip && showTooltip) {
		return (
			<Tooltip
				tooltip={tooltip}
				position={
					typeof showTooltip === "object"
						? showTooltip.position
						: "top"
				}
				offset={
					typeof showTooltip === "object" ? showTooltip.offset : "0px"
				}
				backgroundColor={
					typeof showTooltip === "object"
						? showTooltip.backgroundColor
						: "black-80"
				}
				textColor={
					typeof showTooltip === "object"
						? showTooltip.textColor
						: "white"
				}
				hideArrow={
					typeof showTooltip === "object"
						? showTooltip.hideArrow
						: false
				}
				className={
					typeof showTooltip === "object"
						? (showTooltip.className as any)
						: undefined
				}
				style={
					typeof showTooltip === "object"
						? showTooltip.style
						: undefined
				}
			>
				<ButtonIconFn {...buttonProps} />
			</Tooltip>
		)
	}

	return <ButtonIconFn {...buttonProps} />
}
