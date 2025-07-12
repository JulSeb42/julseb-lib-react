import { Loader } from "../../../"
import type { ILibLoader } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const loaderPreview: ComponentPreview<ILibLoader> = {
	name: "Loader",
	component: Loader,
	category: "components",
	import: "Loader",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibLoader",
	additionalTypeImports: null,
	extends: ["HTMLSpanElement"],
	previews: [
		{ previewTitle: "Default", props: {} },
		{ previewTitle: "Variant 2", props: { variant: 2 } },
		{ previewTitle: "Variant 3", props: { variant: 3 } },
	],
	props: [
		{
			name: "variant",
			type: "number",
			possibleValues: ["1", "2", "3"],
			defaultValue: "1",
			description: "Loader variant style.",
			isRequired: false,
		},
		{
			name: "color",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "primary",
			description: "Loader color.",
			isRequired: false,
		},
	],
}
