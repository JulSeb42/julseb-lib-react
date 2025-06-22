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
			possibleValues: [],
			defaultValue: null,
			description: "Use inline-grid instead of grid.",
			isRequired: false,
		},
		{
			name: "columns",
			type: "string | number",
			possibleValues: [],
			defaultValue: null,
			description: "Number of columns or grid-template-columns value.",
			isRequired: false,
		},
		{
			name: "rows",
			type: "string | number",
			possibleValues: [],
			defaultValue: null,
			description: "Number of rows or grid-template-rows value.",
			isRequired: false,
		},
		{
			name: "gap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "0px"],
			defaultValue: "0px",
			description: "Gap between grid items (can use spacer tokens).",
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
		{
			name: "autoFlow",
			type: "string",
			possibleValues: [
				"row",
				"column",
				"dense",
				"row dense",
				"column dense",
			],
			defaultValue: "row",
			description:
				"Controls how auto-placed items are flowed in the grid.",
			isRequired: false,
		},
		{
			name: "justifyItems",
			type: "string",
			possibleValues: ["start", "end", "center", "stretch"],
			defaultValue: "stretch",
			description: "Defines the default justify-self for all items.",
			isRequired: false,
		},
		{
			name: "alignItems",
			type: "string",
			possibleValues: ["start", "end", "center", "stretch"],
			defaultValue: "stretch",
			description: "Defines the default align-self for all items.",
			isRequired: false,
		},
		{
			name: "justifyContent",
			type: "string",
			possibleValues: [
				"start",
				"end",
				"center",
				"stretch",
				"space-between",
				"space-around",
				"space-evenly",
			],
			defaultValue: "start",
			description: "Aligns the grid along the inline (row) axis.",
			isRequired: false,
		},
		{
			name: "alignContent",
			type: "string",
			possibleValues: [
				"start",
				"end",
				"center",
				"stretch",
				"space-between",
				"space-around",
				"space-evenly",
			],
			defaultValue: "start",
			description: "Aligns the grid along the block (column) axis.",
			isRequired: false,
		},
	],
}
