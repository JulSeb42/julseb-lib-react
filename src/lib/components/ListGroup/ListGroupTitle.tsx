import { useEffect, useState, type FC } from "react"
import { Text } from "../Text"
import { clsx, genBoxShadow } from "../../utils"
import type { ILibListGroupTitle } from "./types"

/**
 * ListGroupTitle component for rendering a styled header/title for list groups with optional fixed positioning and shadow effects.
 *
 * @component
 *
 * @example
 * <ListGroupTitle
 *   isFixed
 *   shadow="lg"
 *   listRef={listRef}
 * >
 *   My List Title
 * </ListGroupTitle>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the title container.
 * @prop {React.ElementType} [props.element=Text] - HTML element type to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the title element.
 * @prop {React.ReactNode} [props.children] - Content to display inside the title.
 * @prop {boolean} [props.isFixed] - Whether the title should be sticky positioned at the top.
 * @prop {"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "none"} [props.shadow] - Shadow variant to apply when scrolled.
 * @prop {React.RefObject} [props.listRef] - Ref to the scrollable list container for scroll detection.
 * @prop {boolean} [props.noSeparator] - Whether to hide the bottom border separator.
 *
 * @returns {JSX.Element} The rendered ListGroupTitle component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/list-group
 */
export const ListGroupTitle: FC<ILibListGroupTitle> = ({
	className,
	element = Text,
	ref,
	children,
	isFixed,
	shadow,
	listRef,
	noSeparator,
	...rest
}) => {
	const Element = element
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		if (listRef && typeof listRef !== "function" && listRef.current) {
			const handleScroll = () => {
				const scroll = listRef.current?.scrollTop

				if (scroll && scroll >= 24) {
					setIsScrolled(true)
				} else {
					setIsScrolled(false)
				}
			}
			listRef.current.addEventListener("scroll", handleScroll)
			return () => {
				listRef.current?.removeEventListener("scroll", handleScroll)
			}
		}
	}, [])

	return (
		<Element
			ref={ref}
			tag="h6"
			className={clsx(
				"bg-primary-500 p-3 w-full font-black text-white text-left transition-shadow duration-200",
				!noSeparator && "border-b-gray-200 border-b",
				isFixed && "sticky top-0 left-0",
				isScrolled && shadow && genBoxShadow[shadow],
				className,
			)}
			{...rest}
		>
			{children}
		</Element>
	)
}
