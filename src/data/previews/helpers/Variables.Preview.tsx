import { Table } from "../../../lib"
import {
	allColors,
	allOverlays,
	allFontFamilies,
	allFontSizes,
	allFontWeights,
	allShadows,
	allRadiuses,
	allSpacers,
	allTransitions,
	allLayouts,
	allLineHeights,
} from "../../styles"
import type { ComponentPreview } from "../../components"

const Preview: FC<{ headers: Array<string>; data: Array<Array<string>> }> = ({
	headers,
	data,
}) => {
	return <Table headers={headers} vAlign="align-top" data={data} />
}

export const variablesPreview: ComponentPreview<null> = {
	name: "Variables",
	category: "helpers",
	component: null,
	import: "VARIABLES",
	additionalImports: [""],
	optionalImports: null,
	propsImport: null,
	additionalTypeImports: null,
	extends: null,
	previews: [
		{
			previewTitle: "Colors",
			demo: (
				<Preview
					headers={[
						"Name",
						"Variable",
						"CSS",
						"Hex",
						"RGB",
						"Tw Class",
					]}
					data={allColors.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.hex,
						variable.rgb,
						variable.twClass,
					])}
				/>
			),
		},
		{
			previewTitle: "Overlays",
			demo: (
				<Preview
					headers={["Name", "Variable", "CSS", "Value", "Tw Class"]}
					data={allOverlays.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.value,
						variable.twClass!,
					])}
				/>
			),
		},
		{
			previewTitle: "Font families",
			demo: (
				<Preview
					headers={["Name", "Variable", "CSS", "Value", "Tw Class"]}
					data={allFontFamilies.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.variable,
						variable.twClass!,
					])}
				/>
			),
		},
		{
			previewTitle: "Font sizes",
			demo: (
				<Preview
					headers={["Name", "Variable", "CSS", "Value", "Tw Class"]}
					data={allFontSizes.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.variable,
						variable.twClass!,
					])}
				/>
			),
		},
		{
			previewTitle: "Font weights",
			demo: (
				<Preview
					headers={["Name", "Variable", "CSS", "Value", "Tw Class"]}
					data={allFontWeights.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.variable,
						variable.twClass!,
					])}
				/>
			),
		},
		{
			previewTitle: "Line heights",
			demo: (
				<Preview
					headers={["Name", "Variable", "CSS", "Value", "Tw Class"]}
					data={allLineHeights.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.variable,
						variable.twClass!,
					])}
				/>
			),
		},
		{
			previewTitle: "Shadows",
			demo: (
				<Preview
					headers={["Name", "Variable", "CSS", "Value", "Tw Class"]}
					data={allShadows.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.variable,
						variable.twClass!,
					])}
				/>
			),
		},
		{
			previewTitle: "Radiuses",
			demo: (
				<Preview
					headers={["Name", "Variable", "CSS", "Value", "Tw Class"]}
					data={allRadiuses.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.variable,
						variable.twClass!,
					])}
				/>
			),
		},
		{
			previewTitle: "Spacers",
			demo: (
				<Preview
					headers={["Name", "Variable", "CSS", "Value"]}
					data={allSpacers.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.variable,
					])}
				/>
			),
		},
		{
			previewTitle: "Transitions",
			demo: (
				<Preview
					headers={["Name", "Variable", "CSS", "Value", "Tw Class"]}
					data={allTransitions.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.variable,
						variable.twClass!,
					])}
				/>
			),
		},
		{
			previewTitle: "Layouts",
			demo: (
				<Preview
					headers={["Name", "Variable", "CSS", "Value", "Tw Class"]}
					data={allLayouts.map(variable => [
						variable.name,
						variable.variable,
						variable.css,
						variable.variable,
						variable.twClass!,
					])}
				/>
			),
		},
	],
	props: null,
}
