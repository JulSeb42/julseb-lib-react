import type { FC } from "react"
import { Link } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi"
import { Breadcrumbs, Text } from "../../../"
import type {} from "../../../types"
import type { ILibBreadcrumbs } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const Preview: FC<ILibBreadcrumbs> = props => {
	return (
		<Breadcrumbs {...props}>
			<Text>
				<Link to="/">Home</Link>
			</Text>
			<Text>
				<Link to="#">Page</Link>
			</Text>
			<Text>
				<Link to="#">Page</Link>
			</Text>
			<Text>
				<Link to="#">Page</Link>
			</Text>
			<Text>Current page</Text>
		</Breadcrumbs>
	)
}

export const breadcrumbsPreview: ComponentPreview<ILibBreadcrumbs> = {
	name: "Breadcrumbs",
	component: Breadcrumbs,
	category: "components",
	import: "Breadcrumbs", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibBreadcrumbs", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
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
			possibleValues: [],
			defaultValue: "/",
			description: "Separator to display between breadcrumb items.",
			isRequired: false,
		},
	],
}
