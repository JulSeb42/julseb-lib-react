import type { FC } from "react"
import { Link } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi"
import { Breadcrumbs, Text } from "../../../"
import type { ILibBreadcrumbs } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const Preview: FC<ILibBreadcrumbs> = props => {
	return (
		<Breadcrumbs {...props}>
			<Link to="/">Home</Link>
			<Link to="#">Page</Link>
			<Link to="#">Page</Link>
			<Link to="#">Page</Link>
			<Text>Current page</Text>
		</Breadcrumbs>
	)
}

export const breadcrumbsPreview: ComponentPreview<ILibBreadcrumbs> = {
	name: "Breadcrumbs",
	component: Breadcrumbs,
	category: "components",
	import: "Breadcrumbs",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibBreadcrumbs",
	additionalTypeImports: [],
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", demo: <Preview /> },
		{
			previewTitle: "With different separator",
			demo: <Preview separator={<BiChevronRight />} />,
		},
	],
	props: [
		{
			name: "separator",
			type: "ReactNode",
			possibleValues: null,
			defaultValue: "/",
			description: "Separator to display between breadcrumb items.",
			isRequired: false,
		},
		{
			name: "accentColor",
			type: "string",
			possibleValues: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"gray",
				"white",
			],
			defaultValue: "primary",
			description: "Accent color for the breadcrumb links.",
			isRequired: false,
		},
		{
			name: "textColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "font",
			description: "Text color for the breadcrumb items.",
			isRequired: false,
		},
	],
}
