import { MarkdownContainer } from "../../../"
import type { ILibMarkdownContainer } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const markdownContainerPreview: ComponentPreview<ILibMarkdownContainer> =
	{
		name: "Markdown Container",
		component: MarkdownContainer,
		category: "components",
		import: "MarkdownContainer",
		additionalImports: [],
		optionalImports: ["libOptionsMarkdown"],
		propsImport: "ILibMarkdownContainer",
		additionalTypeImports: [],
		extends: ["HTMLDivElement"],
		previews: [
			{
				props: {
					children:
						"## Hello world \n\n I'm some [markdown](https://google.com) content **compiled** to *jsx*",
				},
			},
		],
		props: [
			{
				name: "components",
				type: "Object",
				possibleValues: null,
				defaultValue: "libMarkdownComponents",
				description: "Markdown parsing components.",
				isRequired: false,
			},
		],
	}
