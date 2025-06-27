import { useCallback, useRef, useState, type FC, type RefObject } from "react"
import { clsx, genBgAllColorsAndOverlays, genTextAllColor } from "../../utils"
import type { ILibTooltip } from "./types"
import { useClickOutside, useTouchScreen } from "../../hooks"
import type {
	LibSpacers,
	LibTooltipPosition,
	LibTooltipTrigger,
} from "../../types"

/**
 * Tooltip component for displaying contextual information on hover or click.
 *
 * @component
 * @example
 * <Tooltip tooltip="Hello world!" position="top" trigger="hover" backgroundColor="black" textColor="white" />
 *
 * @link https://doc-julseb-lib-react.vercel.app/components/tooltip
 *
 * @extends HTMLDivElement
 *
 * @prop {object} props - Component props.
 * @prop {string} [props.className] - Additional class names to apply.
 * @prop {ElementType} [props.element="div"] - The HTML element or React component to render as the tooltip container.
 * @prop {React.RefObject<HTMLDivElement>} [props.ref] - Ref for the tooltip container.
 * @prop {React.ReactNode} props.children - The element that triggers the tooltip.
 * @prop {string} props.tooltip - The tooltip text to display.
 * @prop {"top" | "bottom" | "left" | "right"} [props.position="top"] - Tooltip position.
 * @prop {boolean} [props.hideArrow] - If true, hides the tooltip arrow.
 * @prop {"hover" | "click"} [props.trigger="hover"] - Tooltip trigger event.
 * @prop {string} [props.backgroundColor="black-80"] - Tooltip background color.
 * @prop {string} [props.textColor="white"] - Tooltip text color.
 * @prop {"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "0px"} [props.offset="xs"] - Tooltip offset.
 * @prop {string} [props.tooltipClasses] - Additional class names for the tooltip.
 * @prop {function} [props.onClick] - Click event handler.
 * @prop {function} [props.onMouseEnter] - Mouse enter event handler.
 * @prop {function} [props.onMouseLeave] - Mouse leave event handler.
 * @prop {object} [props.rest] - Additional props spread to the tooltip container.
 *
 * @returns {JSX.Element} The rendered Tooltip component.
 */
export const Tooltip: FC<ILibTooltip> = ({
	className,
	element = "div",
	ref,
	children,
	tooltip,
	position = "top",
	hideArrow,
	trigger = "hover",
	backgroundColor = "black-80",
	textColor = "white",
	offset = "xs",
	tooltipClasses,
	onClick,
	onMouseEnter,
	onMouseLeave,
	...rest
}) => {
	const Element = element

	const isTouchScreen = useTouchScreen()
	const defaultTrigger: LibTooltipTrigger =
		trigger === "click" || isTouchScreen ? "click" : "hover"

	const [isVisible, setIsVisible] = useState(false)

	const el = useRef<HTMLDivElement>(null)
	useClickOutside(el as RefObject<HTMLElement>, () => {
		if (isVisible && defaultTrigger === "click") setIsVisible(false)
	})

	const handleClick = useCallback(() => {
		setIsVisible(!isVisible)
	}, [isVisible])

	const handleHover = useCallback(() => {
		setIsVisible(true)
	}, [])

	const handleLeave = useCallback(() => {
		setIsVisible(false)
	}, [])

	return (
		<Element
			ref={ref}
			className={clsx(
				"inline-block relative w-fit",
				isVisible && "z-20",
				className,
			)}
			onClick={
				onClick
					? onClick
					: defaultTrigger === "click"
						? handleClick
						: undefined
			}
			onMouseEnter={
				onMouseEnter
					? onMouseEnter
					: defaultTrigger === "hover"
						? handleHover
						: undefined
			}
			onMouseLeave={
				onMouseLeave
					? onMouseLeave
					: defaultTrigger === "hover"
						? handleLeave
						: undefined
			}
			{...rest}
		>
			{children}

			<div
				className={clsx(
					"absolute px-(--spacer-xs) py-(--spacer-2xs) rounded-md max-w-[unset] text-sm whitespace-nowrap transition-all duration-200 ease-in-out",
					genBgAllColorsAndOverlays[backgroundColor],
					genTextAllColor[textColor],
					isVisible ? "opacity-100 visible" : "opacity-0 hidden",
					!hideArrow && "with-arrow",
					genPosition[offset][position],
				)}
			>
				{tooltip}
			</div>
		</Element>
	)
}

const genPosition: Record<LibSpacers, Record<LibTooltipPosition, string>> = {
	"0px": {
		left: "top-0 -left-[86%] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[-70%] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[80%] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-0px))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	"2xs": {
		left: "top-0 -left-[calc(86%+var(--spacer-2xs))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-2xs)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-2xs))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-2xs)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	xs: {
		left: "top-0 -left-[calc(86%+var(--spacer-xs))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-xs)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-xs))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-xs)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	sm: {
		left: "top-0 -left-[calc(86%+var(--spacer-sm))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-sm)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-sm))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-sm)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	md: {
		left: "top-0 -left-[calc(86%+var(--spacer-md))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-md)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-md))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-md)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	lg: {
		left: "top-0 -left-[calc(86%+var(--spacer-lg))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-lg)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-lg))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-lg)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	xl: {
		left: "top-0 -left-[calc(86%+var(--spacer-xl))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-xl)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-xl))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-xl)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	"2xl": {
		left: "top-0 -left-[calc(86%+var(--spacer-2xl))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-2xl)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-2xl))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-2xl)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-solid [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
}
