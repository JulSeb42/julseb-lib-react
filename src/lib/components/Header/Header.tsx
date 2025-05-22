import { useState, useEffect, useRef, type Ref, type FC } from "react"
import classNames from "classnames"
import { enableScroll, disableScroll } from "@julseb-lib/utils"
import { useMaxWidth, useKeyPress } from "../../"
import { HeaderBurger } from "./HeaderBurger"
import { HeaderSearch } from "./HeaderSearch"
import { HeaderNav } from "./HeaderNav"
import { HeaderLogo } from "./HeaderLogo"
import { StyledHeader, Overlay } from "./styles"
import type { ILibHeader } from "./types"
import type {
	ILibHeaderNav,
	ILibHeaderBurger,
	ILibHeaderSearch,
} from "./subtypes"

/**
 * Header component for displaying a responsive navigation bar with logo, links, burger menu, and optional search.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Header props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {ForwardedRef<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {LibHeaderLogo|String} props.logo - Logo for the header (object or string).
 * @param {Array<LibHeaderLink>} [props.links] - Array of navigation links (used if children is not provided).
 * @param {ReactNode} [props.children] - Custom header content (used if links is not provided).
 * @param {"left" | "right"} [props.burgerPosition="right"] - Position of the burger menu.
 * @param {Object|string} [props.burgerColor] - Color for burger menu (string or object with open/closed).
 * @param {"left" | "right"} [props.navDesktopVariant="right"] - Desktop navigation alignment.
 * @param {"drawer" | "inline"} [props.navMobileVariant="drawer"] - Mobile navigation variant.
 * @param {boolean} [props.enableScrollingOpen] - Allow scrolling when menu is open.
 * @param {Object} [props.search] - Search bar configuration.
 * @param {"relative" | "fixed"} [props.position="relative"] - Header position.
 * @param {boolean|number} [props.hideOnScroll] - Hide header on scroll (only if position is fixed).
 * @param {"primary" | "white" | "transparent"} [props.variant="primary"] - Header visual variant.
 * @param {string} [props.backgroundColor="primary"] - Header background color (only if variant is primary).
 * @param {string} [props.textColor="background"] - Header text color (only if variant is primary).
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font"} [props.linkColor="white"] - Link color.
 * @param {string} [props.className] - Additional class names.
 * @returns {JSX.Element} The rendered Header component.
 *
 * @example
 * <Header
 *   logo={{ img: "/logo.svg", text: "MyApp", alt: "Logo" }}
 *   links={[
 *     { text: "Home", to: "/" },
 *     { text: "About", to: "/about" }
 *   ]}
 *   burgerPosition="left"
 *   variant="primary"
 *   backgroundColor="primary"
 *   textColor="background"
 *   linkColor="white"
 * />
 */
export const Header: FC<ILibHeader> = ({
	"data-testid": testid,
	as,
	ref,
	children,
	role = "navigation",
	className,
	logo,
	variant = "primary",
	burgerPosition = "right",
	navDesktopVariant = "right",
	navMobileVariant = "drawer",
	search,
	position = "relative",
	hideOnScroll,
	links,
	nav,
	enableScrollingOpen,
	backgroundColor = "primary",
	textColor = "background",
	linkColor = "white",
	...rest
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = () => {
		if (!enableScrollingOpen) disableScroll()
		setIsOpen(true)
	}

	const handleClose = () => {
		if (!enableScrollingOpen) enableScroll()
		setTimeout(() => setIsOpen(false), 10)
	}

	const isMobile = useMaxWidth(600)

	const logoObj = typeof logo === "object" ? logo : undefined

	const logoHeight = logoObj?.height || 30
	const burgerHeight = 32
	const logoTextHeight = 35
	const heightsArr = [logoHeight, burgerHeight, logoTextHeight].sort()
	const valueForHeight = heightsArr[heightsArr.length - 1]

	const headerHeight = valueForHeight + 16 * 2

	const [isHidden, setIsHidden] = useState(false)
	const hidePosition = typeof hideOnScroll === "boolean" ? 400 : hideOnScroll

	useEffect(() => {
		if (hidePosition) {
			if (window.pageYOffset >= hidePosition) {
				setIsHidden(true)
			} else {
				setIsHidden(false)
			}

			window.addEventListener("scroll", () => {
				if (window.pageYOffset >= hidePosition) {
					setIsHidden(true)
				} else {
					setIsHidden(false)
				}
			})
		}
	}, [hidePosition])

	const burgerRef = useRef<HTMLButtonElement>(null as any)

	useKeyPress("Escape", () => {
		if (isOpen) handleClose()
	})

	const burgerProps: ILibHeaderBurger & {
		ref: Ref<HTMLButtonElement>
	} = {
		"data-testid": testid,
		className,
		isOpen,
		navMobileVariant,
		variant,
		ref: burgerRef,
		handleOpen,
		handleClose,
	}

	const navProps: ILibHeaderNav = {
		"data-testid": testid,
		className,
		search,
		isOpen,
		handleClose,
		links,
		children,
		headerHeight,
		variant,
		navMobileVariant,
		burgerPosition,
		burgerRef,
	}

	const searchProps: ILibHeaderSearch = {
		"data-testid": testid,
		className,
		search,
		handleClose,
	}

	return (
		<StyledHeader
			data-testid={testid}
			ref={ref}
			as={as}
			className={classNames(
				className,
				{ Hidden: isHidden },
				{ Open: isOpen }
			)}
			role={role}
			$burgerPosition={burgerPosition}
			$headerHeight={headerHeight}
			$position={position}
			$variant={variant}
			$backgroundColor={backgroundColor}
			$linkColor={linkColor}
			$textColor={textColor}
			{...rest}
		>
			{burgerPosition === "left" && <HeaderBurger {...burgerProps} />}

			<HeaderLogo
				data-testid={testid}
				className={className}
				logo={logo}
				isOpen={isOpen}
			>
				{typeof logo === "object" ? logo.text : logo}
			</HeaderLogo>

			{navDesktopVariant === "left" && <HeaderNav {...navProps} />}

			{!isMobile && navDesktopVariant === "right" && (
				<HeaderSearch {...searchProps} />
			)}

			{burgerPosition === "right" && <HeaderBurger {...burgerProps} />}

			{navDesktopVariant === "right" && <HeaderNav {...navProps} />}

			{isMobile && navMobileVariant === "drawer" && (
				<Overlay
					onClick={() => setIsOpen(false)}
					className={classNames(
						{ HeaderOverlay: className },
						{ Visible: isOpen }
					)}
				/>
			)}

			{!isMobile && navDesktopVariant === "left" && (
				<HeaderSearch {...searchProps} />
			)}
		</StyledHeader>
	)
}
