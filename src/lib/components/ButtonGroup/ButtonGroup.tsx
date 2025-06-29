import { Fragment, type FC } from "react"
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
 * @prop {React.Ref<any>} [props.ref] - Ref to the button group element.
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
 * @see https://doc-julseb-lib-react.vercel.app/components/buttongroup
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

	const elementProps = {
		ref,
		className: clsx(
			"w-fit overflow-hidden",
			genBorderRadius[borderRadius],
			variant === "transparent" && [
				"border-1 border-solid",
				genBorderColorShort[color],
			],
			className,
		),
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		...rest,
	}

	if (buttons)
		return (
			<Element {...elementProps}>
				{buttons.map((button, i) => (
					<Fragment key={button.id}>
						<button
							className={clsx(
								"px-2 py-1 h-full",
								size === "small" && "text-sm px-2 py-1",
								genButtonDisabled[variant],
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
								button.className,
							)}
							{...button}
						>
							{button.buttonContent}
						</button>

						{variant === "transparent" &&
							i !== buttons.length - 1 && (
								<span
									className={clsx(
										"inline-block w-[1px] h-full",
										genBgColorShort[color],
									)}
								/>
							)}
					</Fragment>
				))}
			</Element>
		)

	return <Element {...elementProps}>{children}</Element>
}
