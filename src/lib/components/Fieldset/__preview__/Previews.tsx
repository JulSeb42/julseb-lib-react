import { InputCheck, Input } from "../../../"

export const ChildrenCheck = () => {
    return (
        <>
            <InputCheck
                id="hello"
                name="inputs-check"
                type="radio"
                label="Hello"
            />
            <InputCheck
                id="world"
                name="inputs-check"
                type="radio"
                label="World"
            />

            <InputCheck id="foo" name="inputs-check" type="radio" label="Foo" />

            <InputCheck id="baz" name="inputs-check" type="radio" label="Baz" />
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
                name="inputs-check"
                type="radio"
                label="Hello"
                validation={false}
            />
            <InputCheck
                id="world-validate"
                name="inputs-check"
                type="radio"
                label="World"
                validation={false}
            />

            <InputCheck
                id="foo-validate"
                name="inputs-check"
                type="radio"
                label="Foo"
                validation={false}
            />

            <InputCheck
                id="baz-validate"
                name="inputs-check"
                type="radio"
                label="Baz"
                validation={false}
            />
        </>
    )
}
