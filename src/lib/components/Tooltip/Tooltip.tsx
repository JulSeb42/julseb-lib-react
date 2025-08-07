import { useCallback, useRef, useState, type FC, type RefObject } from "react"
import { clsx, genBgAllColorsAndOverlays, genTextAllColor } from "../../utils"
import type { ILibTooltip } from "./types"
import { useClickOutside, useTouchScreen, useMergeRefs } from "../../hooks"
import type {
	LibSpacers,
	LibTooltipPosition,
	LibTooltipTrigger,
} from "../../types"

/**
 * Tooltip component for displaying contextual information on hover or click interactions.
 *
 * @component
 *
 * @example
 * <Tooltip
 *   tooltip="This is a helpful tooltip"
 *   position="top"
 *   trigger="hover"
 *   backgroundColor="black-80"
 *   textColor="white"
 * >
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the tooltip container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the tooltip container element.
 * @prop {React.ReactNode} [props.children] - The element that triggers the tooltip on interaction.
 * @prop {string} [props.tooltip] - The tooltip text content to display.
 * @prop {"top" | "bottom" | "left" | "right"} [props.position="top"] - Position of the tooltip relative to the trigger element.
 * @prop {boolean} [props.hideArrow] - Whether to hide the tooltip arrow pointer.
 * @prop {"hover" | "click"} [props.trigger="hover"] - Event that triggers the tooltip display.
 * @prop {LibAllColorsAndOverlays} [props.backgroundColor="black-80"] - Background color for the tooltip.
 * @prop {LibAllColors} [props.textColor="white"] - Text color for the tooltip content.
 * @prop {LibSpacers} [props.offset="xs"] - Distance offset between tooltip and trigger element.
 * @prop {string} [props.tooltipClasses] - Additional CSS classes for the tooltip element.
 * @prop {React.CSSProperties} [props.tooltipStyle] - Additional inline styles for the tooltip element.
 * @prop {function} [props.onClick] - Click event handler for the trigger element.
 * @prop {function} [props.onMouseEnter] - Mouse enter event handler for the trigger element.
 * @prop {function} [props.onMouseLeave] - Mouse leave event handler for the trigger element.
 *
 * @returns {JSX.Element} The rendered Tooltip component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/tooltip
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
	tooltipStyle,
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
			ref={useMergeRefs([el, ref])}
			className={clsx(
				"inline-block relative w-fit",
				isVisible && "visible",
				"[&.visible]:z-20",
				"tooltip-wrapper",
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

			<span
				className={clsx(
					"absolute px-2 py-1 rounded-md max-w-[unset] text-sm whitespace-nowrap transition-all duration-200 ease-in-out",
					genBgAllColorsAndOverlays[backgroundColor],
					genTextAllColor[textColor],
					isVisible ? "opacity-100 visible" : "opacity-0 invisible",
					!hideArrow && "with-arrow",
					genPosition[offset][position],
					tooltipClasses,
					"tooltip",
				)}
				style={tooltipStyle}
			>
				{tooltip}
			</span>
		</Element>
	)
}

const genPosition: Record<LibSpacers, Record<LibTooltipPosition, string>> = {
	"0px": {
		left: "top-0 -left-[86%] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[-70%] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[80%] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-0px))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	"2xs": {
		left: "top-0 -left-[calc(86%+var(--spacer-2xs))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-2xs)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-2xs))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-2xs)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	xs: {
		left: "top-0 -left-[calc(86%+var(--spacer-xs))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-xs)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-xs))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-xs)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	sm: {
		left: "top-0 -left-[calc(86%+var(--spacer-sm))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-sm)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-sm))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-sm)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	md: {
		left: "top-0 -left-[calc(86%+var(--spacer-md))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-md)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-md))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-md)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	lg: {
		left: "top-0 -left-[calc(86%+var(--spacer-lg))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-lg)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-lg))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-lg)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	xl: {
		left: "top-0 -left-[calc(86%+var(--spacer-xl))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-xl)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-xl))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-xl)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
	"2xl": {
		left: "top-0 -left-[calc(86%+var(--spacer-2xl))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:left-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-l-(--color-overlay-black-80)",
		top: "left-[50%] -translate-x-[50%] top-[calc(-100%-var(--spacer-2xl)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-t-(--color-overlay-black-80)",
		right: "top-0 -right-[calc(80%+var(--spacer-2xl))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:top-[50%] [&.with-arrow]:after:right-[100%] [&.with-arrow]:after:translate-y-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-r-(--color-overlay-black-80)",
		bottom: "left-[50%] -translate-x-[50%] bottom-[calc(-100%-var(--spacer-2xl)))] [&.with-arrow]:after:absolute [&.with-arrow]:after:border-4 [&.with-arrow]:after:bottom-[100%] [&.with-arrow]:after:left-[50%] [&.with-arrow]:after:translate-x-[-50%] [&.with-arrow]:after:border-transparent [&.with-arrow]:after:border-b-(--color-overlay-black-80)",
	},
}
