import { Text, designTokens } from "../../../"
import type { ILibText } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"
import { TextDisplay } from "./previews/TextDisplay"
import { TextTitles } from "./previews/TextTitles"
import { Paragraphs } from "./previews/Paragraphs"
import { Small } from "./previews/Small"
import { BlockQuote } from "./previews/Quote"
import { Unordered } from "./previews/Unordered"
import { Ordered } from "./previews/Ordered"
import { Description } from "./previews/Description"

export const textPreview: ComponentPreview<ILibText> = {
	name: "Text",
	component: Text,
	category: "styles",
	import: "Text",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibText",
	additionalTypeImports: null,
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Display", demo: <TextDisplay /> },
		{ previewTitle: "Titles", demo: <TextTitles /> },
		{ previewTitle: "Paragraphs", demo: <Paragraphs /> },
		{ previewTitle: "Small", demo: <Small /> },
		{ previewTitle: "Blockquote", demo: <BlockQuote /> },
		{ previewTitle: "Unordered list", demo: <Unordered /> },
		{ previewTitle: "Ordered list", demo: <Ordered /> },
		{ previewTitle: "Description list", demo: <Description /> },
	],
	props: [
		{
			name: "color",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: null,
			description: "Text color.",
			isRequired: false,
		},
		{
			name: "linkColor",
			type: "string",
			possibleValues: Object.keys(designTokens.libColorsHover),
			defaultValue: null,
			description: "Color for links inside the text.",
			isRequired: false,
		},
		{
			name: "textAlign",
			type: "string",
			possibleValues: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end",
			],
			defaultValue: null,
			description: "Text alignment.",
			isRequired: false,
		},
		{
			name: "tag",
			type: "string",
			possibleValues: [
				"p",
				"span",
				"div",
				"strong",
				"em",
				"b",
				"i",
				"u",
				"small",
				"mark",
				"del",
				"ins",
				"sub",
				"sup",
			],
			defaultValue: "p",
			description: "HTML tag to use for the text.",
			isRequired: false,
		},
		{
			name: "display",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "Only if the tag is h1 to h5.",
			isRequired: false,
		},
	],
}
