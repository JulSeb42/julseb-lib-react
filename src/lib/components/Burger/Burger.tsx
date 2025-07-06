import { type FC } from "react"
import { clsx, genBgAllColors } from "../../utils"
import type { ILibBurger } from "./types"
import type { LibColorsHover } from "../../types"

const SPAN_COMMON =
	"left-0 absolute w-full h-0.5 transition-all duration-200 ease-in-out"

/**
 * Burger component for displaying a hamburger menu icon with open/closed states and hover effects.
 *
 * @component
 *
 * @example
 * <Burger isOpen={true} color="primary" />
 *
 * @extends HTMLButtonElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the burger.
 * @prop {keyof JSX.IntrinsicElements} [props.element="button"] - The HTML element to render as the burger.
 * @prop {React.Ref<any>} [props.ref] - Ref to the burger element.
 * @prop {string} [props.role="button"] - ARIA role for accessibility.
 * @prop {string} [props.aria-label="Burger"] - ARIA label for accessibility.
 * @prop {boolean} [props.isOpen] - Whether the burger menu is open or closed.
 * @prop {"primary" | "secondary" | "success" | "danger" | "warning" | "white"} [props.color="primary"] - Color of the burger lines.
 * @prop {any} [props.rest] - Additional props spread to the burger element.
 *
 * @returns {JSX.Element} The rendered Burger component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/burger
 */
export const Burger: FC<ILibBurger> = ({
	className,
	element = "button",
	ref,
	role = "button",
	"aria-label": ariaLabel = "Burger",
	isOpen,
	color = "primary",
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"relative w-8 h-6",
				genHover[color],
				"burger",
				className,
			)}
			role={role}
			aria-label={ariaLabel}
			{...rest}
		>
			<span
				className={clsx(
					SPAN_COMMON,
					"top-0",
					genBgAllColors[color],
					isOpen && "rotate-45 top-[45%]",
					"burger-span",
				)}
			/>
			<span
				className={clsx(
					SPAN_COMMON,
					"top-[50%] -translate-y-[50%]",
					genBgAllColors[color],
					isOpen && "w-0",
					"burger-span",
				)}
			/>
			<span
				className={clsx(
					SPAN_COMMON,
					"bottom-0 ",
					genBgAllColors[color],
					isOpen && "-rotate-45 bottom-[45%]",
					"burger-span",
				)}
			/>
		</Element>
	)
}

const genHover: Record<LibColorsHover, string> = {
	primary: "hover:[&>span]:bg-primary-300 active:[&>span]:bg-primary-600",
	secondary:
		"hover:[&>span]:bg-secondary-300 active:[&>span]:bg-secondary-600",
	success: "hover:[&>span]:bg-success-300 active:[&>span]:bg-success-600",
	danger: "hover:[&>span]:bg-danger-300 active:[&>span]:bg-danger-600",
	warning: "hover:[&>span]:bg-warning-300 active:[&>span]:bg-warning-600",
	gray: "hover:[&>span]:bg-gray-300 active:[&>span]:bg-gray-600",
	white: "hover:[&>span]:bg-gray-300 active:[&>span]:bg-gray-100",
}
