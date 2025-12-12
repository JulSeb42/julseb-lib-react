import { useEffect, useRef, type FC } from "react"
import { BiX } from "react-icons/bi"
import { stringifyPx } from "@julseb-lib/utils"
import { useClickOutside, useKeyPress } from "../../hooks"
import { ButtonIcon } from "../ButtonIcon"
import {
	clsx,
	genBgAllColors,
	genBgAllColorsAndOverlays,
	genButtonColor,
	genGap,
	genLinkColor,
	genTextAllColor,
	disableScroll,
	enableScroll,
} from "../../utils"
import type { ILibDrawer } from "./types"

/**
 * Drawer component for creating slide-out panels with customizable positioning, styling, and overlay functionality.
 *
 * @component
 *
 * @example
 * <Drawer
 *   isOpen={isDrawerOpen}
 *   setIsOpen={setIsDrawerOpen}
 *   position="right"
 *   backgroundColor="primary"
 *   contentColor="white"
 * >
 *   <h2>Drawer Content</h2>
 *   <p>This is the drawer content.</p>
 * </Drawer>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the drawer container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the drawer element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the drawer.
 * @prop {boolean} [props.isOpen] - Whether the drawer is currently open.
 * @prop {function} [props.setIsOpen] - Function to control the drawer's open/closed state.
 * @prop {"left" | "right"} [props.position="right"] - Position of the drawer relative to the viewport.
 * @prop {boolean} [props.enableScrollingOpen] - Whether to allow page scrolling when drawer is open.
 * @prop {boolean} [props.disableEsc] - Whether to disable closing the drawer with the Escape key.
 * @prop {LibAllColors} [props.backgroundColor="primary"] - Background color for the drawer content area.
 * @prop {LibAllColors} [props.contentColor="white"] - Text color for the drawer content.
 * @prop {LibAllColors} [props.linksColor="white"] - Color for links and buttons within the drawer.
 * @prop {LibSpacers} [props.gap="md"] - Gap between child elements in the drawer.
 * @prop {number} [props.maxWidth=400] - Maximum width of the drawer in pixels.
 * @prop {LibAllColorsAndOverlays} [props.overlayColor="black-80"] - Background color for the overlay behind the drawer.
 * @prop {boolean} [props.hideCloseButton] - Whether to hide the close button in the drawer.
 *
 * @returns {JSX.Element} The rendered Drawer component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/drawer
 */
const Drawer: FC<ILibDrawer> = ({
	className,
	element = "div",
	ref,
	children,
	isOpen,
	setIsOpen,
	position = "right",
	enableScrollingOpen,
	disableEsc,
	backgroundColor = "primary",
	contentColor = "white",
	linksColor = "white",
	gap = "md",
	maxWidth = 400,
	overlayColor = "black-80",
	hideCloseButton,
	...rest
}) => {
	const Element = element

	const el = useRef<HTMLDivElement>(null)

	useClickOutside(el as any, () => isOpen && setIsOpen(false))

	useKeyPress("Escape", () => {
		if (!disableEsc && isOpen) setIsOpen(false)
	})

	useEffect(() => {
		if (!enableScrollingOpen && isOpen) disableScroll()
		else enableScroll()
	}, [enableScrollingOpen, isOpen])

	return (
		<Element
			ref={ref}
			className={clsx(
				"invisible top-0 left-0 z-999 fixed opacity-0 w-full h-svh transition-all duration-200 ease-in-out",
				isOpen && "open",
				"[&.open]:opacity-100 [&.open]:visible [&.open]:transition-none",
				"drawer",
				className,
			)}
			{...rest}
		>
			<div
				className={clsx(
					genBgAllColorsAndOverlays[overlayColor],
					"absolute top-0 left-0 z-0 w-full h-full transition-all duration-200 ease-in-out invisible opacity-0",
					isOpen && "open",
					"[&.open]:opacity-100 [&.open]:visible",
					"overlay",
				)}
				onClick={() => setIsOpen(false)}
			/>

			<div
				className={clsx(
					"top-0 z-10 absolute flex flex-col items-stretch gap-2 p-4 w-full max-w-(--drawer-max-width) h-full [&>*]:text-left transition-all duration-200 ease-in-out",
					genGap[gap],
					genBgAllColors[backgroundColor],
					genTextAllColor[contentColor],
					genLinkColor[linksColor],
					genButtonColor[linksColor],
					isOpen && "open",
					position === "left"
						? "left-[calc(var(--drawer-max-width)*-1)] [&.open]:left-0"
						: "right-[calc(var(--drawer-max-width)*-1)] [&.open]:right-0",
					"drawer-content",
				)}
				style={{ ["--drawer-max-width" as any]: stringifyPx(maxWidth) }}
				ref={el}
			>
				{children}

				{!hideCloseButton && (
					<ButtonIcon
						icon={<BiX size={24} />}
						color="white"
						variant="transparent"
						className="top-2 right-2 absolute size-12"
						onClick={() => setIsOpen(false)}
					/>
				)}
			</div>
		</Element>
	)
}
export default Drawer
