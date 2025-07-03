import { Input, InputCheck } from "../../../"

export const ChildrenCheck = () => {
	return (
		<>
			<InputCheck id="hello" name="inputs-check" type="radio">
				Hello
			</InputCheck>
			<InputCheck id="world" name="inputs-check" type="radio">
				World
			</InputCheck>
			<InputCheck id="foo" name="inputs-check" type="radio">
				Foo
			</InputCheck>
			<InputCheck id="baz" name="inputs-check" type="radio">
				Bar
			</InputCheck>
		</>
	)
}

export const ChildrenText = () => {
	return (
		<>
			<Input label="Name" />
			<Input label="Email" type="email" />
		</>
	)
}

export const ChildrenCheckValidate = () => {
	return (
		<>
			<InputCheck
				id="hello-validate"
				name="inputs-check-validate"
				type="radio"
				validation={false}
			>
				Hello
			</InputCheck>
			<InputCheck
				id="world-validate"
				name="inputs-check-validate"
				type="radio"
				validation={false}
			>
				World
			</InputCheck>

			<InputCheck
				id="foo-validate"
				name="inputs-check-validate"
				type="radio"
				validation={false}
			>
				Foo
			</InputCheck>

			<InputCheck
				id="baz-validate"
				name="inputs-check-validate"
				type="radio"
				validation={false}
			>
				Bar
			</InputCheck>
		</>
	)
}
