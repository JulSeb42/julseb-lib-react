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
			defaultValue: "",
			description: "Image source URL for the cover.",
			isRequired: true,
		},
		{
			name: "alt",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Alternative text for the image.",
			isRequired: false,
		},
		{
			name: "overlay",
			type: "string",
			possibleValues: [
				"black-50",
				"black-80",
				"white-50",
				"white-80",
				"gradient-black",
				"gradient-white",
			],
			defaultValue: null,
			description: "Overlay style to apply on top of the image.",
			isRequired: false,
		},
		{
			name: "inline",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "Use inline-flex instead of flex.",
			isRequired: false,
		},
		{
			name: "flexDirection",
			type: "string",
			possibleValues: ["row", "row-reverse", "col", "col-reverse"],
			defaultValue: "row",
			description: "Flex direction.",
			isRequired: false,
		},
		{
			name: "flexWrap",
			type: "string",
			possibleValues: ["nowrap", "wrap", "wrap-reverse"],
			defaultValue: "nowrap",
			description: "Flex wrap.",
			isRequired: false,
		},
		{
			name: "justifyContent",
			type: "string",
			possibleValues: [
				"start",
				"end",
				"end-safe",
				"center",
				"center-safe",
				"space-between",
				"space-around",
				"space-evenly",
				"stretch",
				"baseline",
				"normal",
			],
			defaultValue: "start",
			description: "Justify content property.",
			isRequired: false,
		},
		{
			name: "alignItems",
			type: "string",
			possibleValues: [
				"start",
				"end",
				"end-safe",
				"center",
				"center-safe",
				"baseline",
				"baseline-start",
				"stretch",
			],
			defaultValue: "stretch",
			description: "Align items property.",
			isRequired: false,
		},
		{
			name: "justifyItems",
			type: "string",
			possibleValues: [
				"start",
				"end",
				"end-safe",
				"center",
				"center-safe",
				"stretch",
				"normal",
			],
			defaultValue: "stretch",
			description: "Justify items property.",
			isRequired: false,
		},
		{
			name: "alignContent",
			type: "string",
			possibleValues: [
				"normal",
				"center",
				"start",
				"end",
				"space-between",
				"space-around",
				"space-evenly",
				"baseline",
				"stretch",
			],
			defaultValue: "normal",
			description: "Align content property.",
			isRequired: false,
		},
		{
			name: "gap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "0px"],
			defaultValue: "0px",
			description: "Gap between items (can use spacer tokens).",
			isRequired: false,
		},
		{
			name: "colGap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "0px"],
			defaultValue: "0px",
			description: "Column gap (can use spacer tokens).",
			isRequired: false,
		},
		{
			name: "rowGap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "0px"],
			defaultValue: "0px",
			description: "Row gap (can use spacer tokens).",
			isRequired: false,
		},
	],
}
