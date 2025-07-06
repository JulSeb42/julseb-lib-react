import { type FC } from "react"
import { BiStar, BiSolidStar } from "react-icons/bi"
import { generateNumbers } from "@julseb-lib/utils"
import { InputContainer } from "../InputContainer"
import { clsx, genTextColorHover } from "../../utils"
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
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the rating container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the rating container div element.
 * @prop {number} [props.rating] - Current rating value (1-5 stars).
 * @prop {function} [props.setRating] - Function to update the rating value when not in read-only mode.
 * @prop {object} [props.icons] - Icon configuration object with default and checked icon variants.
 * @prop {boolean} [props.readOnly] - Whether the rating is in read-only mode (no interaction).
 * @prop {string} [props.label] - Label text to display above the rating.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the rating.
 * @prop {string} [props.id] - Unique identifier for the rating element.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object.
 * @prop {any} [props.rest] - Additional props spread to the rating container.
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
	...rest
}) => {
	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			id={id}
		>
			<div
				ref={ref}
				id={id}
				className={clsx("flex gap-2", "rating", className)}
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
									? "text-primary-500"
									: genTextColorHover["primary"],
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
											size={32}
											className="rating-icon"
										/>
									))
								: (icons?.checked ?? (
										<BiSolidStar
											size={32}
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
