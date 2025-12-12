import { type FC } from "react"
import { clsx, genBgAllColors, genRingColor } from "../../utils"
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
 * <Burger
 *   isOpen={isMenuOpen}
 *   color="primary"
 *   onClick={toggleMenu}
 * />
 *
 * @extends HTMLButtonElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the burger.
 * @prop {keyof JSX.IntrinsicElements} [props.element="button"] - The HTML element to render as the burger.
 * @prop {React.Ref<HTMLButtonElement>} [props.ref] - Ref to the burger element.
 * @prop {string} [props.role="button"] - ARIA role for accessibility.
 * @prop {string} [props.aria-label="Burger"] - ARIA label for accessibility.
 * @prop {boolean} [props.isOpen] - Whether the burger menu is open or closed.
 * @prop {"primary" | "secondary" | "success" | "danger" | "warning" | "gray" | "white"} [props.color="primary"] - Color of the burger lines.
 * @prop {string} [props.type="button"] - Button type attribute.
 * @prop {boolean} [props.noHover] - Whether to disable hover effects.
 * @prop {any} [props.rest] - Additional props spread to the burger element.
 *
 * @returns {JSX.Element} The rendered Burger component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/burger
 */
const Burger: FC<ILibBurger> = ({
	className,
	element = "button",
	ref,
	role = "button",
	"aria-label": ariaLabel = "Burger",
	isOpen,
	color = "primary",
	type = "button",
	noHover,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"relative w-8 h-6",
				!noHover && genHover[color],
				!noHover && genRingColor[color],
				"burger",
				className,
			)}
			role={role}
			aria-label={ariaLabel}
			type={type}
			{...rest}
		>
			<span
				className={clsx(
					SPAN_COMMON,
					"top-0",
					genBgAllColors[color],
					isOpen && "open",
					"[&.open]:rotate-45 [&.open]:top-[45%]",
					"burger-span",
				)}
			/>
			<span
				className={clsx(
					SPAN_COMMON,
					"top-[50%] -translate-y-[50%]",
					genBgAllColors[color],
					isOpen && "open",
					"[&.open]:w-0",
					"burger-span",
				)}
			/>
			<span
				className={clsx(
					SPAN_COMMON,
					"bottom-0 ",
					genBgAllColors[color],
					isOpen && "open",
					"[&.open]:-rotate-45 [&.open]:bottom-[45%]",
					"burger-span",
				)}
			/>
		</Element>
	)
}

export default Burger

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
