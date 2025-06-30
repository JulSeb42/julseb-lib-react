import { BiEnvelope } from "react-icons/bi"
import { Input } from "../../../"
import type {} from "../../../types"
import { PreviewWithValidation, PreviewFull, PreviewSearch } from "./Previews"
import type { ILibInput } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const inputPreview: ComponentPreview<ILibInput> = {
	name: "Input",
	component: Input,
	category: "components",
	import: "Input", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibInput", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLInputElement"],
	previews: [
		{ previewTitle: "Full", demo: <PreviewFull /> },
		{ previewTitle: "Color", props: { type: "color" } },
		{ previewTitle: "Date", props: { type: "date" } },
		{ previewTitle: "Datetime local", props: { type: "datetime-local" } },
		{ previewTitle: "Month", props: { type: "month" } },
		{ previewTitle: "Week", props: { type: "week" } },
		{ previewTitle: "File", props: { type: "file" } },
		{ previewTitle: "Password", props: { type: "password" } },
		{ previewTitle: "Search", demo: <PreviewSearch /> },
		{
			previewTitle: "Search with focus keys",
			demo: <PreviewSearch focusKeys={["Command", "KeyJ"]} showKeys />,
		},
		{
			previewTitle: "Select",
			props: {
				type: "select",
				children: (
					<>
						<option value="">Option</option>
						<option value="">Option</option>
						<option value="">Option</option>
					</>
				),
			},
		},
		{
			previewTitle: "Textarea",
			props: { type: "textarea", label: "Textarea" },
		},
		{
			previewTitle: "Text",
			props: { type: "text", placeholder: "Input text" },
		},
		{ previewTitle: "Email", props: { type: "email" } },
		{ previewTitle: "Number", props: { type: "number" } },
		{ previewTitle: "Tel", props: { type: "tel" } },
		{ previewTitle: "Url", props: { type: "url" } },
		{ previewTitle: "Time", props: { type: "time" } },
		{ previewTitle: "Disabled", props: { disabled: true, value: "Hello" } },
		{
			previewTitle: "Disabled with icon",
			props: {
				disabled: true,
				value: "Hello",
				icon: <BiEnvelope size={20} />,
			},
		},
		{
			previewTitle: "With icon",
			props: { icon: <BiEnvelope size={20} /> },
		},
		{ previewTitle: "With validation", demo: <PreviewWithValidation /> },
		{
			previewTitle: "With background light",
			props: { inputBackground: "light" },
		},
		{
			previewTitle: "With background dark",
			props: { inputBackground: "dark" },
		},
		{ previewTitle: "Pill", props: { inputVariant: "pill" } },
		{
			previewTitle: "Pill with icon",
			props: { inputVariant: "pill", icon: <BiEnvelope size={20} /> },
		},
		{
			previewTitle: "Pill with prefix & suffix",
			props: { inputVariant: "pill", prefix: "Prefix", suffix: "Suffix" },
		},
	],
	props: [],
}
