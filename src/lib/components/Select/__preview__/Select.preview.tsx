import { useState } from "react"
import { BiLogoReact } from "react-icons/bi"
import { Select } from "../../../"
import type {} from "../../../types"
import type { ILibSelect } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const options = ["React", "Vue", "Angular", "Python", "Flask", "Node"]

const Preview: FC<Partial<ILibSelect>> = props => {
	const [value, setValue] = useState(options[0])

	return (
		<Select
			value={value}
			setValue={setValue}
			options={options}
			{...props}
		/>
	)
}

export const selectPreview: ComponentPreview<ILibSelect> = {
	name: "Select",
	component: Select,
	category: "components",
	import: "Select", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibSelect", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLButtonElement"],
	previews: [
		{ previewTitle: "Default", demo: <Preview tabIndex={1} /> },
		{
			previewTitle: "With validation",
			demo: (
				<Preview
					validation={{ status: false, message: "Hello" }}
					tabIndex={2}
				/>
			),
		},
		{
			previewTitle: "With validation",
			demo: (
				<Preview
					validation={{ status: true, message: "Hello" }}
					tabIndex={3}
				/>
			),
		},
		{
			previewTitle: "Light background",
			demo: <Preview inputBackground="light" tabIndex={4} />,
		},
		{
			previewTitle: "Dark background",
			demo: <Preview inputBackground="dark" tabIndex={5} />,
		},
		{
			previewTitle: "Pill",
			demo: <Preview inputVariant="pill" tabIndex={6} />,
		},
		{
			previewTitle: "With icon",
			demo: <Preview icons={{ left: <BiLogoReact /> }} tabIndex={7} />,
		},
	],
	props: [],
}
