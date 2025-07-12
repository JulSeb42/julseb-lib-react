import { Link } from "react-router-dom"
import { Cover, Text } from "../../../"
import type { ILibCover } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const coverPreview: ComponentPreview<ILibCover> = {
	name: "Cover",
	component: Cover,
	category: "components",
	import: "Cover",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibCover",
	additionalTypeImports: [],
	extends: ["HTMLDivElement"],
	previews: [
		{
			demo: (
				<>
					<Text>
						<Link
							to="/cover/demo-center"
							target="_blank"
							rel="noreferrer noopener"
						>
							Demo center
						</Link>
					</Text>
					<Text>
						<Link
							to="/cover/demo-center-overlay"
							target="_blank"
							rel="noreferrer noopener"
						>
							Demo center overlay
						</Link>
					</Text>
					<Text>
						<Link
							to="/cover/demo-bottom"
							target="_blank"
							rel="noreferrer noopener"
						>
							Demo bottom
						</Link>
					</Text>
					<Text>
						<Link
							to="/cover/demo-bottom-overlay"
							target="_blank"
							rel="noreferrer noopener"
						>
							Demo bottom overlay
						</Link>
					</Text>
				</>
			),
		},
	],
	props: [
		{
			name: "img",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "URL of the background image to display.",
			isRequired: true,
		},
		{
			name: "alt",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Alt text for the background image.",
			isRequired: false,
		},
		{
			name: "overlay",
			type: "string",
			possibleValues: [
				"black-50",
				"black-100",
				"white-50",
				"white-100",
				"gradient-black",
				"gradient-white",
			],
			defaultValue: null,
			description: "Overlay variant to apply over the background image.",
			isRequired: false,
		},
		{
			name: "alignItems",
			type: "string",
			possibleValues: ["start", "center", "end", "stretch", "baseline"],
			defaultValue: "center",
			description: "How flex items are aligned along the cross axis.",
			isRequired: false,
		},
		{
			name: "justifyContent",
			type: "string",
			possibleValues: [
				"start",
				"center",
				"end",
				"between",
				"around",
				"evenly",
			],
			defaultValue: "center",
			description: "How flex items are aligned along the main axis.",
			isRequired: false,
		},
		{
			name: "flexDirection",
			type: "string",
			possibleValues: ["row", "row-reverse", "column", "column-reverse"],
			defaultValue: "column",
			description: "Direction of the flex container's main axis.",
			isRequired: false,
		},
		{
			name: "flexWrap",
			type: "string",
			possibleValues: ["nowrap", "wrap", "wrap-reverse"],
			defaultValue: "nowrap",
			description: "Whether flex items should wrap to new lines.",
			isRequired: false,
		},
		{
			name: "gap",
			type: "string",
			possibleValues: [
				"0",
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"8",
				"10",
				"12",
				"16",
				"20",
				"24",
			],
			defaultValue: null,
			description: "Gap between flex items.",
			isRequired: false,
		},
	],
}
