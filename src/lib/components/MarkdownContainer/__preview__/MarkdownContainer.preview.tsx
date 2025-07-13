import {
	MarkdownContainer,
	// CodeContainer
} from "../../../"
// import { optionsMarkdown } from "../../../../data/helpers"
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
						"## Hello world \n\n I'm some markdown content **compiled** to *jsx*",
				},
			},
			// {
			// 	previewTitle: "Options",
			// 	demo: (
			// 		<CodeContainer
			// 			highlighterProps={{ language: "typescript" }}
			// 		>
			// 			{JSON.stringify(optionsMarkdown, null, "  ").replaceAll(
			// 				'],\n  "',
			// 				'],\n\n  "',
			// 			)}
			// 		</CodeContainer>
			// 	),
			// },
		],
		props: [
			{
				name: "options",
				type: "Object",
				possibleValues: [],
				defaultValue: "libOptionsMarkdown",
				description: "Markdown parsing options and configurations.",
				isRequired: false,
			},
		],
	}
