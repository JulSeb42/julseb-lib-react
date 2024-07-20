/*=============================================== InputPreview ===============================================*/

import { Input } from "../../../"
import { InputDemoValidation, InputDemoCounter } from "./Input.demo"
import type {} from "../../../types"
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
            },
        },
        { previewTitle: "File", props: { type: "file" } },
        { previewTitle: "Disabled", props: { disabled: true } },
        { previewTitle: "With icon", props: { icon: "mail" } },
        {
            previewTitle: "Focus on keypress",
            props: {
                focusKeys: ["Command", "KeyJ"],
                showKeys: true,
                type: "search",
            },
        },
        {
            previewTitle: "Date & time",
            demo: (
                <>
                    <Input id="input-date" type="date" />
                    <Input id="input-datetime" type="datetime-local" />
                    <Input id="input-month" type="month" />
                    <Input id="input-week" type="week" />
                    <Input id="input-time" type="time" />
                </>
            ),
        },
        { previewTitle: "With validation", demo: <InputDemoValidation /> },
        {
            previewTitle: "With counter and maxLength",
            demo: <InputDemoCounter />,
        },
        { previewTitle: "Password", props: { type: "password" } },
        { previewTitle: "Pill", props: { inputVariant: "pill" } },
        {
            previewTitle: "With background light",
            props: { inputBackground: "light" },
        },
        {
            previewTitle: "With background dark",
            props: { inputBackground: "dark" },
        },
        {
            previewTitle: "Select",
            props: { type: "select", children: <option value="1">1</option> },
        },
        { previewTitle: "Textarea", props: { type: "textarea" } },
    ],
}
