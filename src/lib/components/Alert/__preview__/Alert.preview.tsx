import { Alert, Button, Text, Flexbox } from "../../../"
import type { ILibAlert } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const alertPreview: ComponentPreview<ILibAlert> = {
	name: "Alert",
	component: Alert,
	category: "components",
	import: "Alert",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibAlert",
	additionalTypeImports: [],
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
