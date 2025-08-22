import { type FC } from "react"
import { BiStar, BiSolidStar } from "react-icons/bi"
import { generateNumbers } from "@julseb-lib/utils"
import { InputContainer } from "../InputContainer"
import { clsx, genTextAllColor, genTextColorHover, genGap } from "../../utils"
import type { ILibRating } from "./types"

/**
 * Rating component for displaying and selecting star ratings with customizable icons, read-only mode, and validation states.
 *
 * @component
 *
 * @example
 * <Rating
 *   rating={3}
 *   setRating={setRating}
 *   label="Rate this product"
 * />
 * <Rating
 *   rating={4}
 *   readOnly
 *   icons={{ default: <BiHeart />, checked: <BiSolidHeart /> }}
 * />
 *
 * @extends ILibRating
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the rating container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the rating container div element.
 * @prop {number} [props.rating] - Current rating value (1-5 stars).
 * @prop {(rating: number) => void} [props.setRating] - Function to update the rating value when not in read-only mode.
 * @prop {{ default?: React.ReactNode; checked?: React.ReactNode }} [props.icons] - Icon configuration object with default and checked icon variants.
 * @prop {boolean} [props.readOnly] - Whether the rating is in read-only mode (no interaction).
 * @prop {string} [props.label] - Label text to display above the rating.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the rating.
 * @prop {string} [props.id] - Unique identifier for the rating element.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object.
 * @prop {string} [props.containerClassName] - Additional CSS classes for the container.
 * @prop {number} [props.iconsSize=32] - Size of the rating icons. Default: 32.
 * @prop {LibColorsHover} [props.accentColor="primary"] - Accent color for the icons. Default: "primary".
 * @prop {"xs" | "sm" | "md" | "lg" | "xl" | "2xl"} [props.gap="xs"] - Gap between rating icons. Default: "xs".
 *
 * @returns {JSX.Element} The rendered Rating component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/rating
 */
export const Rating: FC<ILibRating> = ({
	className,
	ref,
	rating,
	setRating,
	icons,
	readOnly,
	label,
	labelComment,
	helper,
	helperBottom,
	id,
	validation,
	containerClassName,
	iconsSize = 32,
	accentColor = "primary",
	gap = "xs",
	...rest
}) => {
	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			id={id}
			className={containerClassName}
		>
			<div
				ref={ref}
				id={id}
				className={clsx("flex", genGap[gap], "rating", className)}
				{...rest}
			>
				{generateNumbers(0, 4).map(n => {
					const Element = readOnly ? "span" : "button"

					return (
						<Element
							key={n}
							onClick={() => !readOnly && setRating!(n + 1)}
							type="button"
							className={clsx(
								readOnly
									? genTextAllColor[accentColor]
									: genTextColorHover[accentColor],
								validation?.status === false
									? readOnly
										? "text-danger-500"
										: genTextColorHover["danger"]
									: validation?.status === true &&
											(readOnly
												? "text-success-500"
												: genTextColorHover["success"]),
								"rating-item",
							)}
						>
							{n >= rating
								? (icons?.default ?? (
										<BiStar
											size={iconsSize}
											className="rating-icon"
										/>
									))
								: (icons?.checked ?? (
										<BiSolidStar
											size={iconsSize}
											className="rating-icon"
										/>
									))}
						</Element>
					)
				})}
			</div>
		</InputContainer>
	)
}
