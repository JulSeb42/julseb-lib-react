import { type FC } from "react"
import { InputContainer } from "../InputContainer"
import { clsx, genBorderRadius } from "../../utils"
import type { ILibFieldset } from "./types"

/**
 * Fieldset component for grouping related form controls with a legend, validation states, and customizable styling.
 *
 * @component
 *
 * @example
 * <Fieldset
 *   legend="Personal Information"
 *   label="User Details"
 *   borderRadius="lg"
 * >
 *   <Input label="First Name" />
 *   <Input label="Last Name" />
 *   <Input label="Email" />
 * </Fieldset>
 *
 * @extends HTMLFieldSetElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the fieldset container.
 * @prop {React.Ref<HTMLFieldSetElement>} [props.ref] - Ref to the fieldset element.
 * @prop {React.ReactNode} [props.children] - Form controls and content to display inside the fieldset.
 * @prop {string} [props.label] - Label text to display above the fieldset.
 * @prop {string} [props.labelComment] - Additional comment text next to the label.
 * @prop {string} [props.helper] - Helper text to display below the label.
 * @prop {string} [props.helperBottom] - Helper text to display at the bottom of the fieldset.
 * @prop {string} [props.id] - Unique identifier for the fieldset element.
 * @prop {LibValidation} [props.validation] - Validation state and configuration object.
 * @prop {string} [props.legend] - Legend text to display as the fieldset title.
 * @prop {"xs" | "sm" | "md" | "lg" | "xl" | "full"} [props.borderRadius="md"] - Border radius size for the fieldset.
 * @prop {string} [containerClassName] - Additional CSS classes for the container.
 * @prop {any} [props.rest] - Additional props spread to the fieldset element.
 *
 * @returns {JSX.Element} The rendered Fieldset component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/fieldset
 */
const Fieldset: FC<ILibFieldset> = ({
	className,
	ref,
	children,
	helperBottom,
	id,
	validation,
	legend,
	borderRadius = "md",
	containerClassName,
	...rest
}) => {
	return (
		<InputContainer
			helperBottom={helperBottom}
			id={id}
			validation={validation}
			className={containerClassName}
		>
			<fieldset
				ref={ref}
				className={clsx(
					"flex flex-wrap gap-4 p-3 border border-gray-200",
					validation?.status === false
						? "border-danger-500"
						: validation?.status === true && "border-success-500",
					genBorderRadius[borderRadius],
					"fieldset",
					className,
				)}
				{...rest}
			>
				<legend className="px-3 font-bold fieldset-legend">
					{legend}
				</legend>

				{children}
			</fieldset>
		</InputContainer>
	)
}
export default Fieldset
