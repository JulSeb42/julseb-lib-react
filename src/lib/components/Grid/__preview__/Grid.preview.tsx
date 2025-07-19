import { Grid } from "../../../"
import { GridItem } from "../../../../components/GridItem"
import type { ILibGrid } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const gridPreview: ComponentPreview<ILibGrid> = {
	name: "Grid",
	component: Grid,
	category: "layouts",
	import: "Grid",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibGrid",
	additionalTypeImports: null,
	extends: ["HTMLDivElement"],
	previews: [
		{
			props: {
				cols: 3,
				colGap: "sm",
				rowGap: "2xl",
				children: (
					<>
						<GridItem />
						<GridItem />
						<GridItem />
						<GridItem />
					</>
				),
			},
		},
	],
	props: [
		{
			name: "inline",
			type: "boolean",
			possibleValues: ["true", "false"],
			defaultValue: "false",
			description: "If true, renders the grid as an inline element.",
			isRequired: false,
		},
		{
			name: "cols",
			type: "number",
			possibleValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			defaultValue: "1",
			description: "Number of columns in the grid (from 1 to 12).",
			isRequired: false,
		},
		{
			name: "gap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
			defaultValue: "0px",
			description: "Gap between grid items.",
			isRequired: false,
		},
		{
			name: "colGap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
			defaultValue: "0px",
			description: "Horizontal gap between columns.",
			isRequired: false,
		},
		{
			name: "rowGap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "0px"],
			defaultValue: "0px",
			description: "Vertical gap between grid items.",
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
			description:
				"Defines the default justify alignment for grid items.",
			isRequired: false,
		},
		{
			name: "alignItems",
			type: "string",
			possibleValues: [
				"baseline",
				"baseline-start",
				"center",
				"center-safe",
				"end",
				"end-safe",
				"start stretch",
			],
			defaultValue: "stretch",
			description: "Defines the default align alignment for grid items.",
			isRequired: false,
		},
		{
			name: "justifyContent",
			type: "string",
			possibleValues: [
				"baseline",
				"center",
				"center-safe",
				"end",
				"end-safe",
				"normal",
				"space-around",
				"space-between",
				"space-evenly",
				"start",
				"stretch",
			],
			defaultValue: "normal",
			description:
				"Defines how the browser distributes space between and around grid content items.",
			isRequired: false,
		},
		{
			name: "alignContent",
			type: "string",
			possibleValues: [
				"baseline",
				"center",
				"end",
				"normal",
				"space-around",
				"space-between",
				"space-evenly",
				"start",
				"stretch",
			],
			defaultValue: "normal",
			description:
				"Defines how the browser distributes space between and around grid content items vertically.",
			isRequired: false,
		},
	],
}
