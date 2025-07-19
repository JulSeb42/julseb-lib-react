import { Flexbox } from "../../../"
import { GridItem } from "../../../../components"
import type { ILibFlexbox } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const flexboxPreview: ComponentPreview<ILibFlexbox> = {
	name: "Flexbox",
	component: Flexbox,
	category: "layouts",
	import: "Flexbox",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibFlexbox",
	additionalTypeImports: null,
	extends: ["HTMLDivElement"],
	previews: [
		{
			props: {
				flexDirection: "col-reverse",
				rowGap: "xs",
				alignItems: "end",
				justifyContent: "end",
				children: (
					<>
						<GridItem />
						<GridItem>Longer item</GridItem>
						<GridItem />
						<GridItem>Even longer item</GridItem>
					</>
				),
			},
		},
	],
	props: [
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
