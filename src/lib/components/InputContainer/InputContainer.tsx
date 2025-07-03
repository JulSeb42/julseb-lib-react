import { type FC } from "react"
import { BiXCircle, BiCheckCircle } from "react-icons/bi"
import { Text } from "../Text"
import { clsx } from "../../utils"
import type { ILibInputContainer } from "./types"

/**
 * InputContainer component for wrapping input elements with labels, helper text, validation messages, and character counters.
 *
 * @component
 *
 * @example
 * <InputContainer
 *   label="Email"
 *   helper="Enter your email address"
 *   validation={{ status: true, message: "Valid email" }}
 * >
 *   <input type="email" />
 * </InputContainer>
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the container.
 * @prop {React.ComponentType | string} [props.element="div"] - The HTML element or component to render as the container.
 * @prop {React.Ref<any>} [props.ref] - Ref to the container element.
 * @prop {React.ReactNode} [props.children] - Input elements or other content to display inside the container.
 * @prop {string} [props.label] - Label text to display above the input.
 * @prop {string} [props.labelComment] - Additional comment text next to the label in gray italic text.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the container.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object with status, message, and custom icons.
 * @prop {string | number} [props.value] - Current value for character counter calculation.
 * @prop {boolean | object} [props.counter] - Whether to show character counter or counter configuration.
 * @prop {number} [props.maxLength] - Maximum character length for counter display.
 * @prop {boolean} [props.hasListOpen] - Whether a dropdown list is open (adds z-index styling).
 * @prop {string} [props.id] - Unique identifier to associate label with input element.
 * @prop {any} [props.rest] - Additional props spread to the container element.
 *
 * @returns {JSX.Element} The rendered InputContainer component or just children if no wrapper content is needed.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/input
 */
export const InputContainer: FC<ILibInputContainer> = ({
	className,
	element = "div",
	ref,
	children,
	label,
	labelComment,
	helper,
	helperBottom,
	validation,
	value,
	counter,
	maxLength,
	hasListOpen,
	id,
	...rest
}) => {
	const Element = element

	if (!label && !helper && !helperBottom && !validation && !counter)
		return children

	return (
		<Element
			ref={ref}
			className={clsx(
				"flex flex-col gap-1",
				hasListOpen && "z-40",
				className,
			)}
			{...rest}
		>
			{label && (
				<label htmlFor={id} className="font-bold text-primary-500">
					{label}{" "}
					{labelComment && (
						<Text tag="small" color="gray" className="italic">
							{labelComment}
						</Text>
					)}
				</label>
			)}

			{helper && <Text>{helper}</Text>}

			{children}

			{helperBottom && <Text tag="small">{helperBottom}</Text>}

			{validation &&
				validation.status !== undefined &&
				validation.message && (
					<div className="flex items-start gap-1">
						<span
							className={clsx(
								"inline-flex items-center h-[21px]",
								validation.status === false
									? "text-danger-500"
									: "text-success-500",
							)}
						>
							{validation.status === false
								? (validation.iconNotPassed ?? (
										<BiXCircle size={14} />
									))
								: (validation.iconPassed ?? (
										<BiCheckCircle size={14} />
									))}
						</span>

						<Text tag="small">{validation.message}</Text>
					</div>
				)}

			{counter && (
				<Text tag="small">
					{value?.length}
					{maxLength && `/${maxLength}`}
				</Text>
			)}
		</Element>
	)
}
