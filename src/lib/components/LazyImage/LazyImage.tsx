import { Suspense, lazy, type FC } from "react"
import { Skeleton } from "../Skeleton"
import { clsx } from "../../utils"
import type { ILibLazyImage } from "./types"

const Image = lazy(() => import("./Image"))

/**
 * LazyImage component for lazy-loading images with a skeleton placeholder.
 *
 * @component
 *
 * @example
 * <LazyImage
 *   src="https://example.com/image.jpg"
 *   alt="Example image"
 *   skeletonClasses="h-48"
 *   skeletonAnimation="pulse"
 *   className="rounded"
 * />
 *
 * @extends HTMLImageElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the image.
 * @prop {React.Ref<HTMLImageElement>} [props.ref] - Ref to the image element.
 * @prop {string} [props.skeletonClasses] - Additional CSS classes for the skeleton placeholder.
 * @prop {"pulse" | "shine" | "none"} [props.skeletonAnimation="shine"] - Animation style for the skeleton placeholder.
 * @prop {object} [props.rest] - Additional props spread to the image element.
 *
 * @returns {JSX.Element} The rendered LazyImage component with a skeleton fallback while loading.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/lazy-image
 */
export const LazyImage: FC<ILibLazyImage> = ({
	className,
	ref,
	skeletonClasses,
	skeletonAnimation,
	...rest
}) => {
	return (
		<Suspense
			fallback={
				<Skeleton
					className={clsx("w-full", skeletonClasses)}
					animation={skeletonAnimation}
				/>
			}
		>
			<Image className={className} ref={ref} {...rest} />
		</Suspense>
	)
}
