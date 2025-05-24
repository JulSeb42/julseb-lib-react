import type { FC } from "react"
import classNames from "classnames"
import { StyledBurger } from "./styles"
import type { ILibBurger } from "./types"

/**
 * Burger component for toggling menus, typically used in navigation headers.
 *
 * @component
 * @param {Object} props - Burger props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLButtonElement>} [props.ref] - Ref forwarded to the button element.
 * @param {string} [props.className] - Additional class names.
 * @param {boolean} props.isOpen - Whether the burger is open (active) or closed.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background" | "currentColor"} [props.color="primary"] - Color of the burger lines.
 * @param {number} [props.width=32] - Width of the burger icon.
 * @param {number} [props.height=24] - Height of the burger icon.
 * @param {boolean} [props.noHover] - If true, disables hover effect.
 * @param {number} [props.borderWidth=2] - Width of the burger lines.
 * @param {string} [props.aria-label] - Accessible label for the button.
 * @returns {JSX.Element} The rendered Burger component.
 *
 * @example
 * <Burger isOpen={menuOpen} onClick={toggleMenu} />
 */
export const Burger: FC<ILibBurger> = ({
	"data-testid": testid,
	as,
	ref,
	className,
	isOpen,
	color = "primary",
	width = 32,
	height = 24,
	noHover,
	borderWidth = 2,
	"aria-label": ariaLabel = `${isOpen ? "Close" : "Open"} burger`,
	role = "button",
	...rest
}) => {
	return (
		<StyledBurger
			data-testid={testid}
			ref={ref}
			as={as ? as : noHover ? "span" : "button"}
			className={classNames(className, { Open: isOpen })}
			aria-label={ariaLabel}
			role={role}
			$noHover={noHover}
			$borderWidth={borderWidth}
			$color={color}
			$height={height}
			$width={width}
			{...rest}
		>
			<span />
			<span />
			<span />
		</StyledBurger>
	)
}
