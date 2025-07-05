import { Alert, Button, Text, Flexbox } from "../../../"
import type {} from "../../../types"
import type { ILibAlert } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const alertPreview: ComponentPreview<ILibAlert> = {
	name: "Alert",
	component: Alert,
	category: "components",
	import: "Alert", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibAlert", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", props: { children: "Alert" } },
		{
			previewTitle: "Secondary",
			props: { children: "Alert", color: "secondary" },
		},
		{
			previewTitle: "Success",
			props: { children: "Alert", color: "success" },
		},
		{
			previewTitle: "Danger",
			props: { children: "Alert", color: "danger" },
		},
		{
			previewTitle: "Warning",
			props: { children: "Alert", color: "warning" },
		},
		{
			previewTitle: "Gray",
			props: { children: "Alert", color: "gray" },
		},
		{
			previewTitle: "With button",
			props: {
				color: "danger",
				children: (
					<>
						<Text>Alert</Text>
						<Flexbox gap="sm">
							<Button color="danger">Button</Button>
							<Button variant="transparent" color="danger">
								Button
							</Button>
						</Flexbox>
					</>
				),
			},
		},
	],
	props: [
		{
			name: "color",
			type: "string",
			possibleValues: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"gray",
			],
			defaultValue: "primary",
			description: "Color theme for the alert background and border.",
			isRequired: false,
		},
	],
}
