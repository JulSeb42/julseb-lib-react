import { type FC } from "react"
import {
	clsx,
	genBgColorHover,
	genTextAllColor,
	genBorderColorHover,
	genTextColorHover,
	genBgColorGhostHover,
	genBorderRadius,
	genButtonDisabled,
} from "../../utils"
import { Loader } from "../Loader"
import type { ILibButton } from "./types"

/**
 * Button component for user interactions with multiple variants, colors, and loading states.
 *
 * @component
 *
 * @example
 * <Button variant="plain" color="primary" size="default">Click me</Button>
 *
 * @extends ILibButton
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the button.
 * @prop {keyof JSX.IntrinsicElements} [props.element="button"] - The HTML element to render as the button.
 * @prop {React.Ref<any>} [props.ref] - Ref to the button element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the button.
 * @prop {"plain" | "ghost" | "outline" | "transparent"} [props.variant="plain"] - Button variant style.
 * @prop {"primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "white"} [props.color="primary"] - Button color theme.
 * @prop {"default" | "small"} [props.size="default"] - Button size.
 * @prop {boolean} [props.isLoading] - Whether the button is in a loading state.
 * @prop {1 | 2 | 3} [props.loaderVariant] - Loader variant to display when loading.
 * @prop {boolean} [props.disabled] - Whether the button is disabled.
 * @prop {any} [props.rest] - Additional props spread to the button element.
 *
 * @returns {JSX.Element} The rendered Button component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/button
 */
export const Button: FC<ILibButton> = ({
	className,
	element = "button",
	ref,
	children,
	variant = "plain",
	color = "primary",
	size = "default",
	isLoading,
	loaderVariant,
	disabled,
	borderRadius = "md",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-flex items-center gap-2 px-4 py-2 font-bold text-base",
				genBorderRadius[borderRadius],
				variant === "plain" && [
					genBgColorHover[color],
					color !== "white" && "text-white",
					color === "white" && "text-primary",
				],
				variant === "ghost" && [
					genTextAllColor[color],
					color === "white" && "text-primary",
					genBgColorGhostHover[color],
				],
				variant === "outline" && [
					"border-1 border-solid",
					genBorderColorHover[color],
					genTextColorHover[color],
				],
				variant === "transparent" && [genTextColorHover[color]],
				size === "small" && "text-sm px-2 py-1",
				genButtonDisabled[variant],
				className,
			)}
			disabled={disabled || isLoading}
			{...rest}
		>
			{children}

			{isLoading && (
				<Loader
					variant={loaderVariant}
					color="gray"
					className="border-3 size-4"
				/>
			)}
		</Element>
	)
}
