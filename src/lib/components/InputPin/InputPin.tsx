import { useState, createRef, type FC, type Ref, type ChangeEvent } from "react"
import { clsx } from "../../utils"
import { InputContainer } from "../InputContainer"
import { INPUT_COMMON_CLASSES } from "../InputComponents"
import type { ILibInputPin } from "./types"

/**
 * InputPin component for creating PIN code or verification code inputs with multiple individual input fields.
 *
 * @component
 *
 * @example
 * <InputPin
 *   values={{ pin1: "", pin2: "", pin3: "", pin4: "" }}
 *   setValues={setValues}
 *   label="Enter PIN Code"
 *   hideValues
 * />
 *
 * @extends HTMLDivElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the pin input container.
 * @prop {React.Ref<HTMLDivElement>} [props.ref] - Ref to the pin input container div element.
 * @prop {string} [props.label] - Label text to display above the pin inputs.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the pin inputs.
 * @prop {string} [props.id] - Unique identifier for the pin input container.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object.
 * @prop {object} [props.values] - Object containing the current values for each pin input field.
 * @prop {function} [props.setValues] - Function to update the pin input values.
 * @prop {string[]} [props.placeholders] - Array of placeholder texts for each pin input field.
 * @prop {boolean} [props.hideValues] - Whether to hide the input values (password mode).
 * @prop {boolean} [props.disabled] - Whether the pin inputs are disabled.
 * @prop {"light" | "dark"} [props.inputBackground] - Background theme of the input fields.
 * @prop {string} [containerClassName] - Additional CSS classes for the container.
 * @prop {any} [props.rest] - Additional props spread to the pin input container.
 *
 * @returns {JSX.Element} The rendered InputPin component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/input-pin
 */
export const InputPin: FC<ILibInputPin> = ({
	className,
	ref,
	label,
	labelComment,
	helper,
	helperBottom,
	id,
	validation,
	values,
	setValues,
	placeholders,
	hideValues,
	disabled,
	inputBackground,
	autoFocus,
	containerClassName,
	...rest
}) => {
	const [inputsRefsArr] = useState<Array<Ref<HTMLInputElement>>>(() =>
		Array.from({ length: Object.keys(values).length }, () => createRef()),
	)

	const handleChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
		setValues({ ...values, [e.target.id]: e.target.value })

		if (i !== Object.keys(values).length - 1) {
			;(inputsRefsArr[i + 1] as any).current.focus()
		}
	}

	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			id={id}
			validation={validation}
			className={containerClassName}
		>
			<div
				ref={ref}
				id={id}
				className={clsx(
					"flex items-center gap-2 w-fit input-pin-container",
					className,
				)}
				{...rest}
			>
				{inputsRefsArr.map((inputRef, i) => {
					return (
						<input
							key={i}
							ref={inputRef}
							id={Object.keys(values)[i]}
							onChange={e => handleChange(e, i)}
							value={Object.values(values)[i]}
							placeholder={placeholders && placeholders[i]}
							type={hideValues ? "password" : "text"}
							maxLength={1}
							disabled={disabled}
							autoFocus={autoFocus && i === 0}
							className={clsx(
								INPUT_COMMON_CLASSES({
									inputBackground,
									validationStatus: validation?.status,
								}),
								"border border-gray-200 size-12 rounded-lg text-center focus:border-primary-500",
								validation?.status === false
									? "focus:border-danger-500"
									: validation?.status === true &&
											"focus:border-success-500",
								"input-pin",
							)}
						/>
					)
				})}
			</div>
		</InputContainer>
	)
}
