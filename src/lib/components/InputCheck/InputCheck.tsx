import { type FC } from "react"
import { BiCheck } from "react-icons/bi"
import { Text } from "../Text"
import { clsx } from "../../utils"
import type { ILibInputCheck } from "./types"

/**
 * InputCheck component for creating interactive checkbox, radio, and toggle inputs with multiple visual variants.
 *
 * @component
 *
 * @example
 * <InputCheck id="terms" type="checkbox">
 *   I agree to the terms and conditions
 * </InputCheck>
 * <InputCheck id="newsletter" type="checkbox" variant="tile">
 *   Subscribe to newsletter
 * </InputCheck>
 * <InputCheck id="notifications" variant="toggle">
 *   Enable notifications
 * </InputCheck>
 *
 * @extends HTMLInputElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the input check container.
 * @prop {React.Ref<HTMLInputElement>} [props.ref] - Ref to the label element.
 * @prop {React.ReactNode} [props.children] - Content to display next to the input check.
 * @prop {string} [props.id] - Unique identifier for the input element.
 * @prop {"checkbox" | "radio"} [props.type="checkbox"] - Type of input check to render.
 * @prop {React.ReactElement} [props.iconCheck=<BiCheck size={16} />] - Icon element to display in checkbox variant.
 * @prop {"tile" | "toggle" | "selector"} [props.variant] - Visual variant style of the input check.
 * @prop {boolean} [props.validation] - Validation state for error styling.
 * @prop {boolean} [props.disabled] - Whether the input check is disabled.
 * @prop {boolean} [props.checked] - Whether the input check is checked (controlled).
 * @prop {boolean} [props.defaultChecked] - Whether the input check is initially checked (uncontrolled).
 * @prop {any} [props.rest] - Additional props spread to the input element.
 *
 * @returns {JSX.Element} The rendered InputCheck component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/input-check
 */
export const InputCheck: FC<ILibInputCheck> = ({
	className,
	ref,
	children,
	id,
	type = "checkbox",
	iconCheck = <BiCheck size={16} className="input-check-icon" />,
	variant,
	validation,
	disabled,
	checked,
	defaultChecked,
	...rest
}) => {
	return (
		<label
			ref={ref}
			htmlFor={id}
			className={clsx(
				"inline-flex items-start gap-1 outline-none cursor-pointer",
				variant === "tile" && [
					"w-full border-gray-200 border p-2 rounded-lg bg-background",
					"has-[input:checked]:border-primary-500",
					validation === false &&
						"has-[input:checked]:border-danger-500",
					disabled && "has-[input:checked]:border-gray-500",
				],
				variant === "toggle" && [
					"has-[input:checked]:[&_.toggle]:border-success-500 has-[input:checked]:[&_.toggle]:bg-success-500 has-[input:checked]:[&_.toggle]:after:left-2.5 has-[input:checked]:[&_.toggle]:after:bg-white",
					validation === false &&
						"has-[input:checked]:[&_.toggle]:bg-danger-500 has-[input:checked]:[&_.toggle]:border-danger-500",
					disabled &&
						"has-[input:checked]:[&_.toggle]:bg-gray-500 has-[input:checked]:[&_.toggle]:border-gray-500",
				],
				variant === "selector" && [
					"bg-gray-100 py-1 px-3 rounded-full hover:bg-primary-300 hover:text-white active:bg-primary-600 transition-all duration-200 ease-in-out",
					"has-[input:checked]:bg-primary-500 has-[input:checked]:text-white has-[input:checked]:hover:bg-primary-300 has-[input:checked]:active:bg-primary-600",
					validation === false && [
						"bg-danger-50 hover:bg-danger-300 active:bg-danger-600",
						"has-[input:checked]:bg-danger-500 has-[input:checked]:hover:bg-danger-300 has-[input:checked]:active:bg-danger-600 has-[input:checked]:text-white",
					],
					disabled && [
						"bg-gray-50 text-gray-500 hover:bg-gray-50 active:bg-gray-50 hover:text-gray-500",
						"has-[input:checked]:bg-gray-200 has-[input:checked]:text-gray-500 has-[input:checked]:hover:bg-gray-200 has-[input:checked]:active:bg-gray-200",
					],
				],
				"has-[input:checked]:[&_.radio]:after:opacity-100",
				"has-[:not(input:checked)]:[&_.checkbox>svg]:opacity-0",
				"has-[input:checked]:[&_.checkbox>svg]:opacity-100 has-[input:checked]:[&_.checkbox]:bg-primary-500 has-[input:checked]:[&_.checkbox]:border-primary-500",
				validation === false &&
					"has-[input:checked]:[&_.checkbox]:bg-danger-500 has-[input:checked]:[&_.checkbox]:border-danger-500",
				disabled && [
					"cursor-not-allowed",
					"has-[input:checked]:[&_.checkbox]:border-gray-500 has-[input:checked]:[&_.checkbox]:bg-gray-500",
				],
				"input-check-container",
				className,
			)}
		>
			<input
				type={type}
				id={id}
				className="hidden input-check"
				disabled={disabled}
				checked={checked}
				defaultChecked={defaultChecked}
				{...rest}
			/>

			{variant !== "selector" && (
				<span className="inline-flex items-center h-6 check-container">
					{variant === "toggle" ? (
						<span
							className={clsx(
								"toggle",
								"w-6 h-4 rounded-full border-2 border-primary-500 relative",
								"after:size-2 after:bg-primary-500 after:absolute after:rounded-full after:top-0.5 after:left-0.5 after:duration-200 after:ease-in-out after:transition-all",
								validation === false &&
									"border-danger-500 after:bg-danger-500",
								disabled && "border-gray-500 after:bg-gray-500",
								"input-toggle",
							)}
						/>
					) : type === "radio" ? (
						<span
							className={clsx(
								"radio",
								"size-4 rounded-full relative",
								"after:absolute after:size-2 after:bg-primary-500 after:rounded-full after:top-0.5 after:left-0.5 after:opacity-0",
								"border-2 border-primary-500",
								validation === false &&
									"border-danger-500 after:bg-danger-500",
								disabled && "border-gray-500 after:bg-gray-500",
								"input-radio",
							)}
						/>
					) : (
						type === "checkbox" && (
							<span
								className={clsx(
									"checkbox",
									"size-4 rounded-sm relative text-white",
									"border-2 border-primary-500",
									"inline-flex items-center justify-center",
									validation === false && "border-danger-500",
									disabled && "border-gray-500",
									"input-checkbox",
								)}
							>
								{iconCheck}
							</span>
						)
					)}
				</span>
			)}

			<Text className="input-check-content">{children}</Text>
		</label>
	)
}
