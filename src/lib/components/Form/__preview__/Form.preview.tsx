import { useState, type ChangeEvent, type FormEvent } from "react"
import { BiSend } from "react-icons/bi"
import { Form, Input } from "../../../"
import type { ILibForm } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const FormDemo = () => {
	const [inputs, setInputs] = useState({
		name: "Jul",
		email: "a@b.com",
		password: "pass",
	})

	const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
		setInputs({
			...inputs,
			[e.target.id]: e.target.value,
		})

	const resetForm = () =>
		setInputs({
			name: "",
			email: "",
			password: "",
		})

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		alert(JSON.stringify(inputs))
	}

	return (
		<Form
			buttonPrimary={
				<>
					Send
					<BiSend />
				</>
			}
			buttonSecondary={{ content: "Reset", onClick: resetForm }}
			onSubmit={handleSubmit}
		>
			<Input
				id="name"
				label="Name"
				onChange={handleInputs}
				value={inputs.name}
			/>
			<Input
				id="email"
				label="Email"
				type="email"
				onChange={handleInputs}
				value={inputs.email}
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				onChange={handleInputs}
				value={inputs.password}
			/>
		</Form>
	)
}

export const formPreview: ComponentPreview<ILibForm> = {
	name: "Form",
	component: Form,
	category: "components",
	import: "Form",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibForm",
	additionalTypeImports: [],
	extends: ["HTMLFormElement"],
	previews: [{ demo: <FormDemo /> }],
	props: [
		{
			name: "isLoading",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether the form is in a loading state (shows loader on primary button).",
			isRequired: false,
		},
		{
			name: "disabled",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether the form and its primary button are disabled.",
			isRequired: false,
		},
		{
			name: "buttonPrimary",
			type: "ReactNode",
			possibleValues: [],
			defaultValue: null,
			description: "Text content for the primary submit button.",
			isRequired: false,
		},
		{
			name: "buttonSecondary",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description:
				"Configuration object for the secondary button with content and additional props.",
			isRequired: false,
		},
		{
			name: "loaderVariant",
			type: "number",
			possibleValues: ["1", "2", "3"],
			defaultValue: null,
			description:
				"Type of loader animation to display on the primary button when loading.",
			isRequired: false,
		},
	],
}
