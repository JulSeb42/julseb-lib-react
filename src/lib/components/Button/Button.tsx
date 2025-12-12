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
	genRingColor,
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
 * @extends HTMLButtonElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the button.
 * @prop {keyof JSX.IntrinsicElements} [props.element="button"] - The HTML element to render as the button.
 * @prop {React.Ref<HTMLButtonElement>} [props.ref] - Ref to the button element.
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
const Button: FC<ILibButton> = ({
	className,
	element = "button",
	ref,
	children,
	variant = "plain",
	color = "primary",
	size = "default",
	isLoading,
	loaderVariant = 1,
	disabled,
	borderRadius = "md",
	type = "button",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-flex justify-center items-center self-start gap-2 px-4 py-2 outline-none font-bold text-base",
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
					"border",
					genBorderColorHover[color],
					genTextColorHover[color],
				],
				variant === "transparent" && [genTextColorHover[color]],
				size === "small" && "text-sm px-2 py-1",
				genRingColor[color],
				genButtonDisabled[variant],
				"button",
				className,
			)}
			type={type}
			disabled={disabled || isLoading}
			{...rest}
		>
			{children}

			{isLoading && (
				<Loader
					variant={loaderVariant}
					color="gray"
					className={clsx(
						loaderVariant === 1
							? "border-3 size-4"
							: loaderVariant === 2
								? "size-4 [&_span]:border-3"
								: loaderVariant === 3 && "[&_span]:size-2",
						"button-loader",
					)}
				/>
			)}
		</Element>
	)
}

export default Button
