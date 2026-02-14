import { type FC } from "react"
import { Button } from "../Button"
import { clsx } from "../../utils"
import type { ILibForm } from "./types"

/**
 * Form component for creating forms with built-in submit and secondary action buttons, loading states, and validation support.
 *
 * @component
 *
 * @example
 * <Form
 *   buttonPrimary="Submit"
 *   buttonSecondary={{ content: "Cancel", onClick: handleCancel }}
 *   isLoading={isSubmitting}
 *   disabled={!isValid}
 * >
 *   <Input label="Name" value={name} setValue={setName} />
 *   <Input label="Email" value={email} setValue={setEmail} />
 * </Form>
 *
 * @extends HTMLFormElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the form container.
 * @prop {React.Ref<HTMLFormElement>} [props.ref] - Ref to the form element.
 * @prop {React.ReactNode} [props.children] - Form fields and content to display inside the form.
 * @prop {boolean} [props.isLoading] - Whether the form is in a loading state (shows loader on primary button).
 * @prop {boolean} [props.disabled] - Whether the form and its primary button are disabled.
 * @prop {string} [props.buttonPrimary] - Text content for the primary submit button.
 * @prop {object} [props.buttonSecondary] - Configuration object for the secondary button with content and additional props.
 * @prop {1 | 2 | 3} [props.loaderVariant] - Type of loader animation to display on the primary button when loading.
 * @prop {any} [props.rest] - Additional props spread to the form element.
 *
 * @returns {JSX.Element} The rendered Form component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/form
 */
export const Form: FC<ILibForm> = ({
	element = "form",
	className,
	ref,
	children,
	isLoading,
	disabled,
	buttonPrimary,
	buttonSecondary,
	loaderVariant,
	...rest
}) => {
	const Element = element

	return (
		<Element
			ref={ref}
			className={clsx("flex flex-col gap-4", "form", className)}
			{...rest}
		>
			{children}

			{buttonPrimary && (
				<div className="flex items-center gap-2 form-buttons-container">
					<Button
						type="submit"
						disabled={disabled}
						isLoading={isLoading}
						loaderVariant={loaderVariant}
						className="form-button"
					>
						{buttonPrimary}
					</Button>

					{buttonSecondary && (
						<Button
							{...(buttonSecondary as any)}
							type={buttonSecondary.type ?? "button"}
							variant="transparent"
							className="form-button"
							isLoading={isLoading}
						>
							{buttonSecondary.content}
						</Button>
					)}
				</div>
			)}
		</Element>
	)
}
