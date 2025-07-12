import { useState } from "react"
import { BiEnvelope } from "react-icons/bi"
import {
	CodeContainer,
	MarkdownEditor,
	libMarkdownEditorOptions,
} from "../../../"
import type { ILibMarkdownEditor } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { optionsMarkdown } from "../../../../data/helpers"

const Preview: FC<Omit<ILibMarkdownEditor, "value" | "setValue">> = props => {
	const [value, setValue] = useState("# Hello World\n\nHow are you?")

	return <MarkdownEditor value={value} setValue={setValue} {...props} />
}

export const markdownEditorPreview: ComponentPreview<ILibMarkdownEditor> = {
	name: "Markdown Editor",
	component: MarkdownEditor,
	category: "components",
	import: "MarkdownEditor",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibMarkdownEditor",
	additionalTypeImports: [],
	extends: ["HTMLDivElement"],
	previews: [
		{ demo: <Preview /> },
		{
			previewTitle: "With dark bg",
			demo: <Preview inputBackground="dark" label="Label" />,
		},
		{
			previewTitle: "With validation",
			demo: (
				<Preview validation={{ status: false, message: "Message" }} />
			),
		},
		{
			previewTitle: "With icon & less buttons",
			demo: (
				<Preview
					icons={{ bold: <BiEnvelope /> }}
					options={{ italic: false }}
				/>
			),
		},
		{
			previewTitle: "Options",
			demo: (
				<CodeContainer highlighterProps={{ language: "typescript" }}>
					{JSON.stringify(optionsMarkdown, null, "  ").replaceAll(
						'],\n  "',
						'],\n\n  "',
					)}
				</CodeContainer>
			),
		},
		{
			previewTitle: "Editor options",
			demo: (
				<CodeContainer highlighterProps={{ language: "typescript" }}>
					{JSON.stringify(
						libMarkdownEditorOptions,
						null,
						"  ",
					).replaceAll('],\n  "', '],\n\n  "')}
				</CodeContainer>
			),
		},
	],
	props: [
		{
			name: "value",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Current markdown content value.",
			isRequired: true,
		},
		{
			name: "setValue",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function to update the markdown content.",
			isRequired: true,
		},
		{
			name: "label",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Label text for the editor.",
			isRequired: false,
		},
		{
			name: "labelComment",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Additional comment text for the label.",
			isRequired: false,
		},
		{
			name: "helper",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Helper text displayed above the editor.",
			isRequired: false,
		},
		{
			name: "helperBottom",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Helper text displayed below the editor.",
			isRequired: false,
		},
		{
			name: "validation",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Validation state and messages.",
			isRequired: false,
		},
		{
			name: "inputBackground",
			type: "string",
			possibleValues: ["light", "dark"],
			defaultValue: null,
			description: "Background theme for the editor.",
			isRequired: false,
		},
		{
			name: "defaultView",
			type: "string",
			possibleValues: ["code", "live", "preview"],
			defaultValue: "live",
			description: "Initial view mode for the editor.",
			isRequired: false,
		},
		{
			name: "options",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Configuration for which toolbar buttons to show.",
			isRequired: false,
		},
		{
			name: "textButtonTitles",
			type: "string",
			possibleValues: [],
			defaultValue: "Titles",
			description: "Text for the titles dropdown button.",
			isRequired: false,
		},
		{
			name: "icons",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Custom icons for toolbar buttons.",
			isRequired: false,
		},
	],
}
