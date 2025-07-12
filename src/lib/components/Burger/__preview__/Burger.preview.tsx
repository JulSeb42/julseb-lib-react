import { Burger } from "../../../"
import { BurgerPreview } from "./Preview"
import type { ILibBurger } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const burgerPreview: ComponentPreview<ILibBurger> = {
	name: "Burger",
	component: Burger,
	category: "components",
	import: "Burger",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibBurger",
	additionalTypeImports: null,
	extends: ["HTMLButtonElement"],
	previews: [
		{ previewTitle: "Default", demo: <BurgerPreview /> },
		{
			previewTitle: "Other color",
			demo: <BurgerPreview color="secondary" />,
		},
		{
			previewTitle: "Other size",
			demo: (
				<BurgerPreview color="gray" className="w-12 h-8 [&>span]:h-1" />
			),
		},
	],
	props: [
		{
			name: "isOpen",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "Whether the burger menu is open or closed.",
			isRequired: true,
		},
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
				"white",
			],
			defaultValue: "primary",
			description: "Color of the burger lines.",
			isRequired: false,
		},
	],
}
