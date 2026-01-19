import { useState, useEffect, useRef, type FC } from "react"
import { useClickOutside, useMaxWidth, useKeyPress } from "../../hooks"
import { HeaderSearch } from "./HeaderSearch"
import { Burger } from "../Burger"
import {
	clsx,
	genBgAllColors,
	genLinkColor,
	genRingColorChildren,
	genTextAllColor,
	enableScroll,
	disableScroll,
} from "../../utils"
import type { ILibHeader } from "./types"

/**
 * Header component for creating responsive navigation headers with customizable positioning, mobile menu variants, and search functionality.
 *
 * @component
 *
 * @example
 * <Header
 *   logo={<img src="/logo.png" alt="Logo" />}
 *   burgerPosition="right"
 *   navDesktopPosition="right"
 *   navMobileVariant="drawer"
 *   backgroundColor="primary"
 *   textColor="white"
 * >
 *   <nav>
 *     <a href="/">Home</a>
 *     <a href="/about">About</a>
 *   </nav>
 * </Header>
 *
 * @extends ILibHeader
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the header container.
 * @prop {React.ElementType} [props.element="header"] - HTML element type to render as the container. Default: "header".
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the header element.
 * @prop {React.ReactNode} [props.children] - Content to display in the navigation area.
 * @prop {React.ReactNode} [props.logo] - Logo content to display in the header.
 * @prop {"left" | "right"} [props.burgerPosition="right"] - Position of the burger menu button. Possible values: "left", "right". Default: "right".
 * @prop {LibColorsHover | { open: LibColorsHover; closed: LibColorsHover }} [props.burgerColor="white"] - Color for the burger menu button, can be a single color or object with open/closed states. Default: "white".
 * @prop {"left" | "right"} [props.navDesktopPosition="right"] - Position of the navigation on desktop screens. Possible values: "left", "right". Default: "right".
 * @prop {"drawer" | "full" | "top"} [props.navMobileVariant="drawer"] - Variant for mobile navigation display. Possible values: "drawer", "full", "top". Default: "drawer".
 * @prop {boolean} [props.enableScrollingOpen] - Whether to allow page scrolling when mobile menu is open.
 * @prop {React.ReactNode} [props.search] - Search component to display in the header.
 * @prop {"relative" | "absolute" | "fixed"} [props.position="relative"] - CSS position property for the header. Possible values: "relative", "absolute", "fixed". Default: "relative".
 * @prop {boolean | number} [props.hideOnScroll] - Whether to hide header on scroll, or scroll threshold in pixels.
 * @prop {Array<React.ReactNode>} [props.links] - Array of link elements for navigation.
 * @prop {React.ReactNode} [props.nav] - Navigation content to display.
 * @prop {LibAllColors} [props.backgroundColor="primary"] - Background color for the header. Default: "primary".
 * @prop {LibAllColors} [props.navMobileBackground=backgroundColor] - Background color for mobile navigation. Default: backgroundColor value.
 * @prop {LibAllColors} [props.textColor="white"] - Text color for header content. Default: "white".
 * @prop {LibColorsHover} [props.linksColor="white"] - Color for navigation links. Default: "white".
 * @prop {LibAllColors} [props.headerOpenMobileBackground=backgroundColor] - Background color when mobile menu is open. Default: backgroundColor value.
 *
 * @returns {JSX.Element} The rendered Header component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/header
 */
export const Header: FC<ILibHeader> = ({
	className,
	element = "header",
	ref,
	logo,
	burgerPosition = "right",
	burgerColor = "white",
	children,
	navDesktopPosition = "right",
	navMobileVariant = "drawer",
	enableScrollingOpen,
	search,
	position = "relative",
	hideOnScroll,
	links,
	nav,
	backgroundColor = "primary",
	navMobileBackground = "primary",
	textColor = "white",
	linksColor = "white",
	headerOpenMobileBackground = "primary",
	...rest
}) => {
	const Element = element
	const isMobile = useMaxWidth(768)
	const el = useRef<HTMLDivElement>(null)

	const [isOpen, setIsOpen] = useState(false)
	const [isHidden, setIsHidden] = useState(false)

	const handleOpen = () => {
		if (!enableScrollingOpen) disableScroll()
		setIsOpen(true)
	}

	const handleClose = () => {
		if (!enableScrollingOpen) enableScroll()
		setTimeout(() => setIsOpen(false), 10)
	}

	useEffect(() => {
		const handleHideScroll = () => {
			const hidePosition =
				typeof hideOnScroll === "number" ? hideOnScroll : 400

			if (window.pageYOffset >= hidePosition) {
				setIsHidden(true)
			} else {
				setIsHidden(false)
			}
		}

		if (hideOnScroll && typeof window !== "undefined") {
			window.addEventListener("scroll", handleHideScroll)

			return () => window.removeEventListener("scroll", handleHideScroll)
		}
	}, [hideOnScroll])

	const burgerProps = {
		isOpen,
		onClick: () => {
			if (isOpen) handleClose()
			else handleOpen()
		},
		color:
			typeof burgerColor === "object"
				? isOpen
					? burgerColor.open
					: burgerColor.closed
				: burgerColor,
		className: clsx("md:hidden block z-999", "header-burger"),
	}

	const searchProps = { search, handleClose }

	const navProps = {
		children: (
			<>
				{links ? links.map(link => link) : nav ? nav : children}

				{isMobile && <HeaderSearch {...searchProps} />}
			</>
		),
		className: clsx(
			"z-999 flex gap-2 [&_a]:outline-none w-fit transition-all duration-200 ease-in-out",
			"fixed md:relative",
			"flex-col md:flex-row px-[5%] md:px-0",
			genRingColorChildren[linksColor],
			`${genBgAllColors[navMobileBackground ?? "primary-500"]} md:bg-transparent`,
			navDesktopPosition === "left" && "grow",
			navMobileVariant === "drawer" && [
				"top-14 md:top-[unset] h-[calc(100svh-56px)] md:h-[unset]",
				"w-[70%] md:w-fit",
				navDesktopPosition === "left"
					? isOpen
						? "left-0 md:left-[unset]"
						: "-left-[70%] md:left-[unset]"
					: isOpen
						? "right-0 md:right-[unset]"
						: "-right-[70%] md:right-[unset]",
			],
			navMobileVariant === "full" && [
				"top-14 md:top-[unset] w-[100%] md:w-fit h-[calc(100svh-56px)] md:h-[unset]",
				navDesktopPosition === "left"
					? isOpen
						? "left-0 md:left-[unset]"
						: "-left-full md:left-[unset]"
					: isOpen
						? "right-0 md:right-[unset]"
						: "-right-full md:right-[unset]",
			],
			navMobileVariant === "top" && [
				"md:top-[unset] w-[100%] md:w-fit h-fit md:h-[unset] left-0 md:left-[unset] py-4 md:py-0",
				isOpen ? "top-14 " : "-top-54",
			],
			"[&_a]:font-normal [&_a.active]:font-black",
			"nav",
		),
		ref: el,
	}

	useKeyPress("Escape", handleClose)
	useClickOutside(el as any, () => {
		if (isOpen) handleClose()
	})

	return (
		<Element
			ref={ref}
			className={clsx(
				"z-999 flex items-center px-[5%] py-4 w-full transition-all duration-200 ease-in-out",
				navDesktopPosition === "left"
					? "justify-between md:justify-start gap-8"
					: "justify-between",
				burgerPosition === "left" &&
					"justify-start gap-4 md:justify-between",
				position,
				genBgAllColors[backgroundColor],
				isOpen && genBgAllColors[headerOpenMobileBackground],
				genTextAllColor[textColor],
				genLinkColor[linksColor],
				isHidden ? "-top-16" : "top-0",
				"header",
				className,
			)}
			{...rest}
		>
			{burgerPosition === "left" && <Burger {...burgerProps} />}

			{typeof logo === "string" ? (
				<span
					className={clsx(
						"z-999 outline-none [&_a]:outline-none",
						genRingColorChildren[linksColor],
					)}
				>
					{logo}
				</span>
			) : (
				logo
			)}

			{navDesktopPosition === "left" && <nav {...navProps} />}

			{!isMobile && navDesktopPosition === "right" && (
				<HeaderSearch {...searchProps} />
			)}

			{burgerPosition === "right" && <Burger {...burgerProps} />}

			{isMobile && navMobileVariant === "drawer" && (
				<div
					className={clsx(
						"md:hidden transition-all duration-200 ease-in-out",
						"absolute w-full h-[calc(100svh-56px)] top-14 left-0 z-996 bg-overlay-black-50",
						isOpen ? "visible opacity-100" : "invisible opacity-0",
						"drawer-overlay",
					)}
					onClick={handleClose}
				/>
			)}

			{navDesktopPosition === "right" && <nav {...navProps} />}

			{!isMobile && navDesktopPosition === "left" && (
				<HeaderSearch {...searchProps} />
			)}
		</Element>
	)
}
