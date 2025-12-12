import { useEffect, useState, type FC } from "react"
import { BiUpArrowAlt } from "react-icons/bi"
import { ButtonIcon } from "../ButtonIcon"
import { clsx, genRingColor, scrollToTop } from "../../utils"
import type { ILibBackToTop } from "./types"

/**
 * BackToTop component for providing a smooth scroll-to-top functionality with customizable styling and positioning.
 *
 * @component
 *
 * @example
 * <BackToTop
 *   color="primary"
 *   tooltip="Back to top"
 *   showTooltip={{ position: "left" }}
 * />
 *
 * @extends ILibButtonIcon
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the back-to-top button.
 * @prop {React.Ref<HTMLButtonElement>} [props.ref] - Ref to the button element.
 * @prop {React.ReactElement} [props.icon=<BiUpArrowAlt />] - Custom icon for the back-to-top button.
 * @prop {LibColorsShort} [props.color="primary"] - Color theme for the button styling.
 * @prop {string} [props.tooltip="Back to top"] - Tooltip text displayed on hover.
 * @prop {LibTooltipPositionOptions} [props.showTooltip] - Configuration for tooltip positioning and styling.
 *
 * @returns {JSX.Element} The rendered BackToTop component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/back-to-top
 */
const BackToTop: FC<ILibBackToTop> = ({
	className,
	ref,
	icon = <BiUpArrowAlt size={32} />,
	color = "primary",
	tooltip = "Back to top",
	showTooltip,
	...rest
}) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const scrollFn = () => {
			if (window.scrollY >= 200) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener("scroll", scrollFn)

		return () => window.removeEventListener("scroll", scrollFn)
	}, [])

	const smoothScroll = () => {
		document.body.classList.add("smooth")
		document.documentElement.classList.add("smooth")

		setTimeout(() => scrollToTop(), 100)

		setTimeout(() => {
			document.body.classList.remove("smooth")
			document.documentElement.classList.remove("smooth")
		}, 1000)
	}

	return (
		<ButtonIcon
			ref={ref}
			className={clsx(
				isVisible ? "opacity-100 visible z-50" : "opacity-0 invisible",
				genRingColor[color],
				!showTooltip && "fixed bottom-5 right-5",
				"back-to-top",
				className,
			)}
			icon={icon}
			color={color}
			tooltip={tooltip as any}
			showTooltip={
				showTooltip && {
					position: "left",
					className: [
						"fixed bottom-5 right-5 [&_.tooltip]:translate-y-[10px] [&_.tooltip]:translate-x-[-50%] transition-all duration-200 ease-in-out",
						isVisible ? "opacity-100" : "opacity-0",
					],
					...(showTooltip as any),
				}
			}
			onClick={smoothScroll}
			{...rest}
		/>
	)
}
export default BackToTop
