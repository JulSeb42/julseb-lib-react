import { useState, type FC } from "react"
import { InputContainer } from "../InputContainer"
import { HoverContainer } from "./HoverContainer"
import { EmptyContainer } from "./EmptyContainer"
import { clsx, genBorderRadius } from "../../utils"
import type { ILibInputImage } from "./types"

/**
 * InputImage component for uploading and displaying image files with hover interactions and validation states.
 *
 * @component
 *
 * @example
 * <InputImage
 *   id="profile-image"
 *   label="Profile Picture"
 *   value={imageUrl}
 *   icons={{ upload: <BiUpload />, edit: <BiEdit /> }}
 * />
 *
 * @extends HTMLInputElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the input image container.
 * @prop {React.Ref<HTMLInputElement>} [props.ref] - Ref to the label element.
 * @prop {string} [props.label] - Label text to display above the input.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the input.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object.
 * @prop {string} [props.value] - Current image URL or base64 string value.
 * @prop {object} [props.icons] - Icon configuration object for upload and edit states.
 * @prop {"none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"} [props.borderRadius="md"] - Border radius of the image container.
 * @prop {boolean} [props.disabled] - Whether the input is disabled.
 * @prop {string} [props.id] - Unique identifier for the input element.
 * @prop {string} [containerClassName] - Additional CSS classes for the container.
 * @prop {any} [props.rest] - Additional props spread to the file input element.
 *
 * @returns {JSX.Element} The rendered InputImage component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/input-image
 */
export const InputImage: FC<ILibInputImage> = ({
	className,
	ref,
	label,
	labelComment,
	helper,
	helperBottom,
	validation,
	value,
	icons,
	borderRadius = "md",
	disabled,
	id,
	containerClassName,
	...rest
}) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			validation={validation}
			className={containerClassName}
		>
			<button
				onMouseEnter={() => !disabled && setIsHovered(true)}
				onMouseLeave={() => !disabled && setIsHovered(false)}
				type="button"
			>
				<label
					htmlFor={id}
					ref={ref}
					className={clsx(
						"relative flex justify-center items-center size-16 overflow-hidden text-primary-500 cursor-pointer",
						validation?.status === false
							? "bg-danger-50 text-danger-500"
							: "bg-gray-100",
						disabled && "cursor-not-allowed text-gray-500",
						genBorderRadius[borderRadius],
						"input-image-container",
						className,
					)}
				>
					{value === "" || !value ? (
						<EmptyContainer icons={icons} />
					) : (
						<img
							src={value}
							alt="Input"
							className="w-full h-full object-cover input-image-image"
						/>
					)}

					<HoverContainer isVisible={isHovered} icons={icons} />

					<input
						type="file"
						id={id}
						disabled={disabled}
						className="sr-only input-image-input"
						accept="image/*"
						{...rest}
					/>
				</label>
			</button>
		</InputContainer>
	)
}
