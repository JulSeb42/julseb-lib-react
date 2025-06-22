import { Linkify } from "../../../"
import type {} from "../../../types"
import type { ILibLinkify } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const linkifyPreview: ComponentPreview<ILibLinkify> = {
	name: "Linkify",
	component: Linkify,
	category: "components",
	import: "Linkify",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibLinkify",
	additionalTypeImports: null,
	extends: ["HTMLHeadingElement"],
	previews: [
		{
			props: {
				children: "Hello world https://julien-sebag.com/ foo baz",
				blank: true,
			},
		},
	],
	props: [
		{
			name: "blank",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "If true, links open in a new tab.",
			isRequired: false,
		},
	],
}
