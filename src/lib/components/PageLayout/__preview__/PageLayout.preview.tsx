import { Link } from "react-router-dom"
import { PageLayout, Text } from "../../../"
import type {} from "../../../types"
import type { ILibPageLayout } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const pageLayoutPreview: ComponentPreview<ILibPageLayout> = {
	name: "Page Layout",
	component: PageLayout,
	category: "components",
	import: "PageLayout", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibPageLayout", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{
			demo: (
				<Text>
					<Link
						to="/page-layout/demo"
						target="_blank"
						rel="noreferrer noopener"
					>
						Demo
					</Link>
				</Text>
			),
		},
	],
	props: [
		{
			name: "meta",
			type: "ILibMeta",
			possibleValues: [],
			defaultValue: null,
			description:
				"Meta component props for HTML head metadata including SEO and social media tags.",
			isRequired: false,
		},
		{
			name: "header",
			type: "ILibHeader",
			possibleValues: [],
			defaultValue: null,
			description:
				"Header component props for displaying the page header with logo and navigation.",
			isRequired: false,
		},
		{
			name: "footer",
			type: "ILibFooter",
			possibleValues: [],
			defaultValue: null,
			description:
				"Footer component props for displaying the page footer with links and logo.",
			isRequired: false,
		},
		{
			name: "noWrapper",
			type: "boolean",
			possibleValues: null,
			defaultValue: "false",
			description:
				"Whether to skip rendering the Wrapper component around the main content.",
			isRequired: false,
		},
		{
			name: "wrapperProps",
			type: "ILibWrapper",
			possibleValues: [],
			defaultValue: null,
			description:
				"Wrapper component props for controlling the page container styling and layout. Cannot be used when noWrapper is true.",
			isRequired: false,
		},
		{
			name: "noMain",
			type: "boolean",
			possibleValues: null,
			defaultValue: "false",
			description:
				"Whether to skip rendering the Main component wrapper around children. Cannot be used when noWrapper is true.",
			isRequired: false,
		},
		{
			name: "mainProps",
			type: "ILibMain",
			possibleValues: [],
			defaultValue: null,
			description:
				"Main component props for styling the main content area. Cannot be used when noWrapper is true.",
			isRequired: false,
		},
	],
}
