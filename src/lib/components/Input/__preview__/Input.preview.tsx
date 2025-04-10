import { Input } from "../../../"
import {
    InputDemoValidation,
    InputDemoCounter,
    InputSearch,
} from "./Input.demo"
import type { ILibInput } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputPreview: ComponentPreview<ILibInput> = {
    name: "Input",
    component: Input,
    category: "components",
    import: "Input",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibInput",
    additionalTypeImports: null,
    extends: ["InputHTMLAttributes<HTMLInputElement>", "ILibInputBase"],
    previews: [
        {
            previewTitle: "With InputContainer",
            props: {
                label: "Label",
                labelComment: "LabelComment",
                helper: "Helper",
                helperBottom: {
                    text: "Helper bottom",
                    icon: "check",
                    iconColor: "success",
                },
                prefix: "Hello",
                suffix: "World",
                "data-testid": "testid",
                className: "className",
                placeholder: "Placeholder",
            },
        },
        {
            previewTitle: "File",
            props: {
                type: "file",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Color",
            props: {
                type: "color",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Disabled",
            props: {
                disabled: true,
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With icon",
            props: {
                icon: "mail",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Focus on keypress",
            demo: <InputSearch />,
        },
        {
            previewTitle: "Date & time",
            demo: (
                <>
                    <Input id="input-date" type="date" data-testid="testid" />
                    <Input
                        id="input-datetime"
                        type="datetime-local"
                        data-testid="testid"
                    />
                    <Input id="input-month" type="month" data-testid="testid" />
                    <Input id="input-week" type="week" data-testid="testid" />
                    <Input id="input-time" type="time" data-testid="testid" />
                </>
            ),
        },
        { previewTitle: "With validation", demo: <InputDemoValidation /> },
        {
            previewTitle: "With counter and maxLength",
            demo: <InputDemoCounter />,
        },
        {
            previewTitle: "Password",
            props: {
                type: "password",
                "data-testid": "testid",
                className: "className",
                prefix: "Hello",
            },
        },
        {
            previewTitle: "Pill",
            props: {
                inputVariant: "pill",
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "Pill with icon",
            props: {
                inputVariant: "pill",
                "data-testid": "testid",
                className: "className",
                icon: "send",
            },
        },
        {
            previewTitle: "With background light",
            props: {
                inputBackground: "light",
                "data-testid": "testid",
                className: "className",
                prefix: "Hello",
                suffix: "World",
            },
        },
        {
            previewTitle: "With background dark",
            props: {
                inputBackground: "dark",
                "data-testid": "testid",
                className: "className",
                prefix: "Hello",
                suffix: "World",
            },
        },
        {
            previewTitle: "Select",
            props: {
                type: "select",
                children: <option value="1">1</option>,
                "data-testid": "testid",
                className: "className",
                icon: "user",
            },
        },
        {
            previewTitle: "Textarea",
            props: {
                type: "textarea",
                "data-testid": "testid",
                className: "className",
                label: "Textarea",
            },
        },
    ],
}
