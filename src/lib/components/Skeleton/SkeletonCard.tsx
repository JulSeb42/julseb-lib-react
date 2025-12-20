import { Flexbox } from "../Flexbox"
import { clsx, genBgAllColors, genBorderRadius } from "../../utils"
import type { ILibSkeletonCard } from "./types"

/**
 * SkeletonCard component for displaying a loading placeholder in the shape of a card.
 *
 * @component
 * @extends HTMLDivElement
 *
 * @example
 * <SkeletonCard isShiny backgroundColor="gray-100" borderRadius="lg" gap="md" />
 *
 * @prop {boolean} [inline] - Use inline-flex instead of flex for the skeleton card.
 * @prop {CssFlexDirection} [flexDirection] - Flex direction for the skeleton card content.
 * @prop {CssFlexWrap} [flexWrap] - Flex wrap for the skeleton card content.
 * @prop {CssJustifyContent} [justifyContent] - Justify content property for the skeleton card content.
 * @prop {CssAlignItems} [alignItems] - Align items property for the skeleton card content.
 * @prop {CssJustifyItems} [justifyItems] - Justify items property for the skeleton card content.
 * @prop {CssAlignContent} [alignContent] - Align content property for the skeleton card content.
 * @prop {LibSpacers} [gap] - Gap between skeleton card children.
 * @prop {LibSpacers} [colGap] - Column gap between skeleton card children.
 * @prop {LibSpacers} [rowGap] - Row gap between skeleton card children.
 * @prop {LibAllColors} [backgroundColor] - Background color of the skeleton card.
 * @prop {LibRadiuses} [borderRadius] - Border radius of the skeleton card.
 * @prop {boolean} [isShiny] - If true, applies a shiny animation to the skeleton card.
 *
 * @returns {JSX.Element} The rendered SkeletonCard component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/layouts/skeletoncard
 */
export const SkeletonCard: FC<ILibSkeletonCard> = ({
	element = "div",
	className,
	children,
	isShiny,
	backgroundColor = "background",
	borderRadius = "lg",
	...rest
}) => {
	return (
		<Flexbox
			element={element}
			className={clsx(
				"relative overflow-hidden",
				isShiny && [
					"relative overflow-hidden",
					"before:absolute before:-top-[200px] before:-bottom-[200px] before:bg-white before:opacity-70 before:blur-[20px] before:w-[100px] before:-skew-15 before:animate-[shine_2000ms_ease-in-out_infinite]",
				],
				genBgAllColors[backgroundColor],
				genBorderRadius[borderRadius],
				"skeleton-card",
				className,
			)}
			{...rest}
		>
			{children}
		</Flexbox>
	)
}

