import { useForm, Form, Input } from "../../../../lib"

export function PreviewUseForm() {
    const { formData, handleInputs, handleSubmit, resetForm } = useForm<User>(
        { name: "", email: "", password: "" },
        formData => alert(JSON.stringify(formData))
    )

    return (
        <Form
            buttonPrimary={{ text: "Submit", iconLeft: "send-solid" }}
            buttonSecondary={{ onClick: resetForm, text: "Reset" }}
            onSubmit={handleSubmit}
        >
            <Input
                id="name"
                label="Name"
                onChange={handleInputs}
                value={formData.name}
            />
            <Input
                id="email"
                label="Email"
                type="email"
                onChange={handleInputs}
                value={formData.email}
            />
            <Input
                id="password"
                label="Password"
                type="password"
                onChange={handleInputs}
                value={formData.password}
            />
        </Form>
    )
}

type User = { name: string; email: string; password: string }
