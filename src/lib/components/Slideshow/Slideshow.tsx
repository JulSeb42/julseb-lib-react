import {
	Children,
	useState,
	useEffect,
	useRef,
	type FC,
	type TouchEvent,
} from "react"
import { uuid } from "@julseb-lib/utils"
import { Image } from "../Image"
import { clsx, genObjectFit, genBorderRadius } from "../../utils"
import { useKeyPress } from "../../hooks"
import { SlideshowButton } from "./SlideshowButton"
import { SlideshowPagination } from "./SlideshowPagination"
import type { ILibSlideshow } from "./types"

/**
 * Slideshow component for displaying images or content with navigation controls, pagination, and touch/swipe support.
 *
 * @component
 *
 * @example
 * <Slideshow
 *   images={["image1.jpg", "image2.jpg", "image3.jpg"]}
 *   controls={{ prev: <BiChevronLeft />, next: <BiChevronRight /> }}
 *   pagination={{ type: "dots", position: "outside" }}
 *   options={{ autoPlay: 3000, speed: 500 }}
 *   imgFit="cover"
 *   borderRadius="md"
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the slideshow container.
 * @prop {React.ElementType} [props.element="div"] - HTML element type to render as the container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the slideshow element.
 * @prop {React.ReactNode} [props.children] - Child components to display as slides when not using images prop.
 * @prop {"cover" | "contain" | "fill"} [props.imgFit="cover"] - Object fit property for images in the slideshow.
 * @prop {object} [props.controls] - Configuration object for navigation control buttons.
 * @prop {boolean} [props.hideControls=false] - Whether to hide the navigation control buttons.
 * @prop {ILibPaginationOptions} [props.options] - Configuration options for autoplay timing and transition speed.
 * @prop {string[]} [props.images] - Array of image URLs to display in the slideshow.
 * @prop {object} [props.pagination] - Configuration object for pagination indicators and behavior.
 * @prop {boolean} [props.hidePagination] - Whether to hide the pagination indicators.
 * @prop {LibBorderRadius} [props.borderRadius] - Border radius variant for the slideshow container.
 *
 * @returns {JSX.Element} The rendered Slideshow component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/slideshow
 */
export const Slideshow: FC<ILibSlideshow> = ({
	className,
	element = "div",
	ref,
	children,
	imgFit = "cover",
	controls,
	hideControls = false,
	options,
	images,
	pagination,
	hidePagination,
	borderRadius,
	...rest
}) => {
	const Element = element
	const childrenArray = Children.toArray(children)
	const slides = images ?? childrenArray
	const totalSlides = slides.length

	const [currentSlide, setCurrentSlide] = useState(0)
	const [isTransitioning, setIsTransitioning] = useState(false)

	const touchStartX = useRef<number>(0)
	const touchEndX = useRef<number>(0)
	const touchStartY = useRef<number>(0)
	const touchEndY = useRef<number>(0)

	const [isDragging, setIsDragging] = useState(false)
	const slidesRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (totalSlides > 1) {
			let intervalId: NodeJS.Timeout | null = null

			if (hideControls && hidePagination && !options?.autoPlay) {
				intervalId = setInterval(() => handleNext(), 2000)
			} else if (options?.autoPlay) {
				intervalId = setInterval(() => handleNext(), options.autoPlay)
			}

			return () => {
				if (intervalId) {
					clearInterval(intervalId)
				}
			}
		}
	}, [options?.autoPlay, totalSlides, hideControls, hidePagination])

	const handleNext = () => {
		if (isTransitioning) return

		setIsTransitioning(true)
		setCurrentSlide(prev => (prev + 1) % totalSlides)

		setTimeout(() => setIsTransitioning(false), options?.speed ?? 300)
	}

	const handlePrev = () => {
		if (isTransitioning) return

		setIsTransitioning(true)
		setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)

		setTimeout(() => setIsTransitioning(false), options?.speed ?? 300)
	}

	useKeyPress("ArrowLeft", handlePrev)
	useKeyPress("ArrowRight", handleNext)

	const goToSlide = (n: number) => {
		if (isTransitioning || n === currentSlide) return

		setIsTransitioning(true)
		setCurrentSlide(n)

		setTimeout(() => setIsTransitioning(false), options?.speed ?? 300)
	}

	const handleTouchStart = (e: TouchEvent) => {
		const touch = e.touches[0]
		touchStartX.current = touch.clientX
		touchStartY.current = touch.clientY
		setIsDragging(true)
	}

	const handleTouchMove = (e: TouchEvent) => {
		if (!isDragging) return

		const touch = e.touches[0]
		touchEndX.current = touch.clientX
		touchEndY.current = touch.clientY

		const deltaX = Math.abs(touchEndX.current - touchStartX.current)
		const deltaY = Math.abs(touchEndY.current - touchStartY.current)

		if (deltaX > deltaY && deltaX > 10) {
			e.preventDefault()
		}
	}

	const handleTouchEnd = () => {
		if (!isDragging) return

		setIsDragging(false)

		const deltaX = touchStartX.current - touchEndX.current
		const deltaY = Math.abs(touchStartY.current - touchEndY.current)
		const minSwipeDistance = 50

		if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > minSwipeDistance) {
			if (deltaX > 0) {
				handleNext()
			} else {
				handlePrev()
			}
		}

		touchStartX.current = 0
		touchEndX.current = 0
		touchStartY.current = 0
		touchEndY.current = 0
	}

	const handleMouseDown = (e: React.MouseEvent) => {
		touchStartX.current = e.clientX
		touchStartY.current = e.clientY
		setIsDragging(true)
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging) return

		touchEndX.current = e.clientX
		touchEndY.current = e.clientY
	}

	const handleMouseUp = () => {
		if (!isDragging) return

		setIsDragging(false)

		const deltaX = touchStartX.current - touchEndX.current
		const deltaY = Math.abs(touchStartY.current - touchEndY.current)
		const minSwipeDistance = 50

		if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > minSwipeDistance) {
			if (deltaX > 0) {
				handleNext()
			} else {
				handlePrev()
			}
		}

		touchStartX.current = 0
		touchEndX.current = 0
		touchStartY.current = 0
		touchEndY.current = 0
	}

	if (totalSlides === 0) return null

	return (
		<Element
			ref={ref}
			className={clsx(
				"relative flex flex-col gap-2 aspect-video",
				"slideshow",
				className,
			)}
			{...rest}
		>
			<div
				className={clsx(
					"relative size-full overflow-hidden",
					"slides-wrapper",
				)}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				// onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				style={{
					touchAction: pagination?.hideOnTouch
						? "pan-y"
						: "pan-y pinch-zoom",
					userSelect: "none",
					WebkitUserSelect: "none",
				}}
			>
				<div
					ref={slidesRef}
					className={clsx(
						"z-0 relative flex size-full transition-transform duration-300 ease-in-out",
						"slides-container",
						isDragging && "transition-none",
					)}
					style={{
						transform: `translateX(-${currentSlide * 100}%)`,
						transitionDuration: `${options?.speed ?? 300}ms`,
					}}
				>
					{images
						? images.map((img, i) => (
								<Image
									key={uuid()}
									src={img}
									alt={`Slideshow image ${i + 1}`}
									className={clsx(
										"size-full shrink-0",
										genObjectFit[imgFit],
										"slideshow-image",
									)}
									width="100%"
									height="100%"
									fit="cover"
									borderRadius={borderRadius}
									draggable={false}
								/>
							))
						: childrenArray.map(child => (
								<div
									key={uuid()}
									className={clsx(
										"size-full shrink-0",
										"slideshow-images-container",
										borderRadius &&
											genBorderRadius[borderRadius],
									)}
								>
									{child}
								</div>
							))}
				</div>
			</div>

			{!hideControls && totalSlides > 1 && (
				<>
					<SlideshowButton
						position="left"
						onClick={handlePrev}
						controls={controls}
						hideControls={hideControls}
					/>
					<SlideshowButton
						position="right"
						onClick={handleNext}
						controls={controls}
						hideControls={hideControls}
					/>
				</>
			)}

			{!hidePagination && totalSlides > 1 && (
				<SlideshowPagination
					className={pagination?.className}
					images={pagination?.images}
					active={currentSlide}
					setActive={setCurrentSlide}
					contentLength={totalSlides}
					handleClick={goToSlide}
					position={pagination?.position}
					hideOnTouch={pagination?.hideOnTouch}
					color={pagination?.color}
					type={pagination?.type}
				/>
			)}
		</Element>
	)
}
