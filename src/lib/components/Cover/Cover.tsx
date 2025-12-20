import { type FC } from "react"
import { Image } from "../Image"
import { Flexbox } from "../Flexbox"
import { clsx, genBgOverlay } from "../../utils"
import type { ILibCover } from "./types"

/**
 * Cover component for creating full-screen layouts with background images, overlays, and content positioning.
 *
 * @component
 *
 * @example
 * <Cover
 *   img="/images/hero-bg.jpg"
 *   alt="Hero background"
 *   overlay="gradient-black"
 *   alignItems="center"
 *   justifyContent="center"
 * >
 *   <Text tag="h1" display className="text-white">
 *     Welcome to our site
 *   </Text>
 * </Cover>
 *
 * @extends ILibFlexbox
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the cover container.
 * @prop {React.ElementType} [props.element=Flexbox] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the cover element.
 * @prop {string} [props.img] - URL of the background image to display.
 * @prop {string} [props.alt] - Alt text for the background image.
 * @prop {LibBgOverlay} [props.overlay] - Overlay variant to apply over the background image.
 * @prop {React.ReactNode} [props.children] - Content to display over the background image.
 *
 * @returns {JSX.Element} The rendered Cover component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/cover
 */
export const Cover: FC<ILibCover> = ({
	className,
	element = Flexbox,
	ref,
	img,
	alt,
	overlay,
	children,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx(
				"z-0 relative p-12 w-full h-svh",
				"cover",
				className,
			)}
			{...rest}
		>
			<Image
				src={img}
				alt={alt}
				className={clsx(
					"top-0 left-0 z-0 fixed w-full h-full",
					"cover-image",
				)}
				fit="cover"
			/>

			{overlay && (
				<span
					className={clsx(
						"top-0 left-0 z-10 absolute w-full h-full",
						genBgOverlay[overlay],
						"overlay",
					)}
				/>
			)}

			<div
				className={clsx(
					"top-0 left-0 z-20 relative w-fit h-fit",
					"cover-content",
				)}
			>
				{children}
			</div>
		</Element>
	)
}
