import { type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Image } from "../Image"
import { clsx, genObjectFit } from "../../utils"
import type { ILibCarousel } from "./types"

/**
 * A carousel component that displays a continuous scrolling animation of items (images or custom content).
 *
 * @component
 *
 * @example
 * // Basic image carousel
 * <Carousel items={["image1.jpg", "image2.jpg", "image3.jpg"]} showItems={3} />
 *
 * // Carousel with custom content
 * <Carousel
 *   items={[<div>Custom content 1</div>, <div>Custom content 2</div>]}
 *   stopOnHover
 *   speed={15}
 * />
 *
 * @extends ILibCarousel
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the component
 * @prop {keyof JSX.IntrinsicElements} [props.element="div"] - HTML element type to render as the root element
 * @prop {Ref<HTMLDivElement>} [props.ref] - React ref for the root element
 * @prop {Array<string> | Array<ReactChildren>} props.items - Array of image URLs (strings) or custom React elements to display in the carousel
 * @prop {boolean} [props.stopOnHover] - Whether to pause the animation when hovering over the carousel
 * @prop {2 | 3 | 4 | 5 | 6} [props.showItems=4] - Number of items to show simultaneously in the carousel viewport
 * @prop {"cover" | "contain"} [props.imgFit="cover"] - CSS object-fit property for images (only applies when items are strings)
 * @prop {number} [props.speed=20] - Animation duration in seconds for one complete scroll cycle
 *
 * @returns A carousel component with continuous scrolling animation and optional gradient overlays
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/carousel
 */
export const Carousel: FC<ILibCarousel> = ({
	className,
	element = "div",
	ref,
	items,
	stopOnHover,
	showItems = 4,
	imgFit = "cover",
	speed = 20,
	...rest
}) => {
	const Element = element

	const tripleItems = [...items, ...items, ...items]

	return (
		<Element
			ref={ref}
			className={clsx("relative overflow-hidden", "carousel", className)}
			{...rest}
		>
			<div
				className={clsx(
					"flex h-full animate-[carousel-scroll_linear_infinite]",
					stopOnHover && "hover:[animation-play-state:paused]",
					"carousel-wrapper",
				)}
				style={{ animationDuration: `${speed}s` }}
			>
				{tripleItems.map((item, i) => (
					<div
						key={uuid()}
						className={clsx(
							"px-2 h-full shrink-0",
							genItemWidth[showItems],
							"carousel-img-wrapper",
						)}
					>
						<div
							className={clsx(
								"relative w-full h-full",
								"carousel-img-content",
							)}
						>
							{typeof item === "string" ? (
								<Image
									src={item}
									alt={`Carousel image ${i + 1}`}
									className={clsx(
										genObjectFit[imgFit],
										"h-full",
										"carousel-img",
									)}
								/>
							) : (
								item
							)}
						</div>
					</div>
				))}
			</div>

			<span
				className={clsx(
					"top-0 left-0 z-10 absolute bg-linear-to-r from-white via-white to-transparent w-32 h-full -translate-x-[5vw] pointer-events-none",
					"carousel-gradient carousel-gradient-left",
				)}
			/>
			<span
				className={clsx(
					"top-0 right-0 z-10 absolute bg-linear-to-l from-white via-white to-transparent w-32 h-full translate-x-[5vw] pointer-events-none",
					"carousel-gradient carousel-gradient-right",
				)}
			/>
		</Element>
	)
}

const genItemWidth: Record<2 | 3 | 4 | 5 | 6, string> = {
	2: "w-[calc(100%/2)]",
	3: "w-[calc(100%/3)]",
	4: "w-[calc(100%/4)]",
	5: "w-[calc(100%/5)]",
	6: "w-[calc(100%/6)]",
}
