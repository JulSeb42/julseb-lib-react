import { type FC } from "react"
import { Tooltip } from "../Tooltip"
import { ButtonIconFn } from "./ButtonFn"
import type { ILibButtonIcon } from "./types"

/**
 * ButtonIcon component for displaying an icon button with optional tooltip and loading states.
 *
 * @component
 *
 * @example
 * <ButtonIcon icon={<BiUser />} color="primary" variant="plain" tooltip="User profile" showTooltip />
 *
 * @extends HTMLButtonElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the button.
 * @prop {keyof JSX.IntrinsicElements} [props.element="button"] - The HTML element to render as the button.
 * @prop {React.Ref<any>} [props.ref] - Ref to the button element.
 * @prop {React.ReactNode} [props.icon] - Icon element to display inside the button.
 * @prop {"primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "white"} [props.color="primary"] - Button color theme.
 * @prop {string} [props.borderRadius="full"] - Border radius of the button.
 * @prop {"plain" | "ghost" | "outline" | "transparent"} [props.variant="plain"] - Button variant style.
 * @prop {boolean} [props.isLoading] - Whether the button is in a loading state.
 * @prop {1 | 2 | 3} [props.loaderVariant=1] - Loader variant to display when loading.
 * @prop {string} [props.loaderClasses] - Additional CSS classes for the loader.
 * @prop {string} [props.tooltip] - Tooltip text to display.
 * @prop {boolean | object} [props.showTooltip] - Whether to show tooltip or tooltip configuration object.
 * @prop {React.CSSProperties} [props.containerStyle] - Inline styles for the container.
 * @prop {string} [props.containerClasses] - Additional CSS classes for the container.
 * @prop {string} [props.aria-label] - ARIA label for accessibility, defaults to tooltip value.
 * @prop {any} [props.rest] - Additional props spread to the button element.
 *
 * @returns {JSX.Element} The rendered ButtonIcon component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/button-icon
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
		"aria-label": ariaLabel,
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
				<ButtonIconFn {...(buttonProps as any)} />
			</Tooltip>
		)
	}

	return <ButtonIconFn {...(buttonProps as any)} />
}
