import { CodeContainer } from "../../../"
import type { ILibCodeContainer } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const code =
	'const [isOpen, setIsOpen] = useState(false)\n\nreturn (\n\t<>\n\t\t<Button onClick={() => setIsOpen(!isOpen)}>Open modal</Button>\n\t\t<div className={clsx("top-0 left-0 fixed bg-overlay-black-50 w-full h-svh", isOpen ? "visible" : "invisible")}>\n\t\t\t...\n\t\t</div>\n\t</>\n)'
const shell = `# With npm\nnpm i @julseb-lib/react\n\n# With yarn\nyarn add @julseb-lib/react`

export const codeContainerPreview: ComponentPreview<ILibCodeContainer> = {
	name: "Code Container",
	component: CodeContainer,
	category: "components",
	import: "CodeContainer", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibCodeContainer", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{
			previewTitle: "Default",
			props: { language: "tsx", children: code },
		},
		{
			previewTitle: "With numbers",
			props: { language: "tsx", children: code, showNumbers: true },
		},
		{
			previewTitle: "Shell",
			props: { language: "shell", children: shell },
		},
	],
	props: [
		{
			name: "showNumbers",
			type: "boolean",
			possibleValues: ["true", "false"],
			defaultValue: "false",
			description: "If true, shows the line numbers in the code block.",
			isRequired: false,
		},
		{
			name: "language",
			type: "string",
			possibleValues: [],
			defaultValue: "tsx",
			description:
				"The language for syntax highlighting (e.g., 'tsx', 'js', 'shell').",
			isRequired: false,
		},
	],
}
