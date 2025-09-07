import { useEffect, type FC } from "react"
import { Loader } from "../Loader"
import { clsx, genBgAllColors, disableScroll } from "../../utils"
import type { ILibPageLoading } from "./types"

/**
 * PageLoading component for displaying a full-screen loading overlay with customizable background and loader.
 *
 * @component
 *
 * @example
 * <PageLoading
 *   backgroundColor="primary-500"
 *   loaderColor="white"
 *   loaderVariant={2}
 *   stopScrolling
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the page loading container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the page loading element.
 * @prop {LibColors} [props.backgroundColor="primary-500"] - Background color for the loading overlay.
 * @prop {LibColorsShort} [props.loaderColor="white"] - Color of the loading spinner.
 * @prop {1 | 2 | 3} [props.loaderVariant=1] - Visual variant of the loading spinner.
 * @prop {boolean} [props.stopScrolling] - Whether to disable page scrolling while loading is visible.
 *
 * @returns {JSX.Element} The rendered PageLoading component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/page-loading
 */
export const PageLoading: FC<ILibPageLoading> = ({
	className,
	element = "div",
	ref,
	backgroundColor = "primary-500",
	loaderColor = "white",
	loaderVariant = 1,
	stopScrolling,
	...rest
}) => {
	const Element = element

	useEffect(() => {
		if (stopScrolling) disableScroll()
	}, [stopScrolling])

	return (
		<Element
			ref={ref}
			className={clsx(
				"top-0 left-0 z-999 fixed flex justify-center items-center w-full h-svh",
				genBgAllColors[backgroundColor],
				"page-loading",
				className,
			)}
			{...rest}
		>
			<Loader variant={loaderVariant} color={loaderColor} />
		</Element>
	)
}
