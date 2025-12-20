import { Fragment, type FC } from "react"
import { useMaxWidth } from "../../hooks"
import { Flexbox } from "../Flexbox"
import {
	clsx,
	genBorderColorShort,
	genBorderRadius,
	genBgColorShort,
	genBgColorHover,
	genBgColorGhostHover,
	genButtonDisabled,
	genTextColorShort,
	genTextColorHover,
	genRingColor,
} from "../../utils"
import type { ILibButtonGroup } from "./types"

/**
 * ButtonGroup component for displaying a group of related buttons with consistent styling and optional separators.
 *
 * @component
 *
 * @example
 * <ButtonGroup
 *   buttons={[
 *     { id: "1", buttonContent: "Save" },
 *     { id: "2", buttonContent: "Cancel" }
 *   ]}
 *   variant="plain"
 *   color="primary"
 * />
 *
 * @extends ILibFlexbox
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the button group.
 * @prop {React.ComponentType} [props.element=Flexbox] - The component to render as the container element.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the button group element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the button group when not using buttons prop.
 * @prop {"primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "white"} [props.color="primary"] - Color theme for the button group.
 * @prop {"plain" | "ghost" | "outline" | "transparent"} [props.variant="plain"] - Visual variant style of the button group.
 * @prop {string} [props.borderRadius="md"] - Border radius of the button group container.
 * @prop {"default" | "small"} [props.size="default"] - Size of the buttons in the group.
 * @prop {Array<LibButtonGroupButtonItem>} [props.buttons] - Array of button items to render in the group.
 * @prop {any} [props.rest] - Additional props spread to the container element.
 *
 * @returns {JSX.Element} The rendered ButtonGroup component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/button-group
 */
export const ButtonGroup: FC<ILibButtonGroup> = ({
	className,
	element = Flexbox,
	ref,
	children,
	color = "primary",
	variant = "plain",
	borderRadius = "md",
	size = "default",
	buttons,
	...rest
}) => {
	const Element = element

	const isMobile = useMaxWidth(600)

	const elementProps = {
		ref,
		className: clsx(
			"w-fit overflow-hidden",
			genBorderRadius[borderRadius],
			variant === "transparent" && ["border", genBorderColorShort[color]],
			"button-group",
			className,
		),
		flexDirection: isMobile ? "col" : "row",
		flexWrap: "wrap",
		alignItems: isMobile ? "stretch" : "center",
		...rest,
	}

	if (buttons)
		return (
			<Element {...elementProps}>
				{buttons.map((button, i) => (
					<Fragment key={button.id}>
						<button
							className={clsx(
								"inline-flex justify-center items-center px-2 py-1 outline-none h-8",
								size === "small" && "text-sm px-2 py-1",
								genButtonDisabled[variant],
								genRingColor[color],
								variant === "plain" && [
									color === "white"
										? "text-primary-500"
										: "text-white",
									genBgColorHover[color],
								],
								variant === "ghost" && [
									genBgColorGhostHover[color],
									genTextColorShort[color],
								],
								variant === "transparent" && [
									genTextColorHover[color],
								],
								"button-group-button",
								button.className,
							)}
							{...(button as any)}
						>
							{button.content}
						</button>

						{variant === "transparent" &&
							i !== buttons.length - 1 && (
								<span
									className={clsx(
										"inline-block",
										genBgColorShort[color],
										isMobile
											? "w-full h-px"
											: "w-px h-full",
										"button-group-separator",
									)}
								/>
							)}
					</Fragment>
				))}
			</Element>
		)

	return <Element {...elementProps}>{children}</Element>
}
