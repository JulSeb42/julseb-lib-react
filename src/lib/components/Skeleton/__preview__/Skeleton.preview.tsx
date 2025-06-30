import { Skeleton, SkeletonCard } from "../../../"
import type { ILibSkeleton } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const skeletonPreview: ComponentPreview<ILibSkeleton> = {
	name: "Skeleton",
	component: Skeleton,
	category: "components",
	import: "Skeleton",
	additionalImports: ["SkeletonCard"],
	optionalImports: null,
	propsImport: "ILibSkeleton",
	additionalTypeImports: null,
	extends: ["ILibFlexbox"],
	previews: [
		{
			previewTitle: "With pulse animation",
			props: {
				borderRadius: "3xl",
				animation: "pulse",
				className: "w-[200px] h-[150px]",
			},
		},
		{
			previewTitle: "With shine animation",
			props: {
				animation: "shine",
			},
		},
		{
			previewTitle: "Inside card & animation pulse",
			demo: (
				<SkeletonCard
					flexDirection="col"
					gap="sm"
					className="px-2 py-4 border-1 border-gray-200"
				>
					<Skeleton
						borderRadius="sm"
						animation="pulse"
						className="w-full h-[24px]"
					/>
					<Skeleton
						borderRadius="sm"
						animation="pulse"
						className="w-[90%] h-[24px]"
					/>
				</SkeletonCard>
			),
		},
		{
			previewTitle: "Inside card & animation shine",
			demo: (
				<SkeletonCard
					flexDirection="col"
					gap="xs"
					borderRadius="md"
					isShiny
					className="p-4 border-1 border-gray-200"
				>
					<Skeleton
						borderRadius="lg"
						className="w-[200px] h-[150px]"
					/>
					<Skeleton borderRadius="sm" className="w-full h-[24px]" />
					<Skeleton borderRadius="sm" className="w-[90%] h-[24px]" />
				</SkeletonCard>
			),
		},
	],
	propsTitle: "Skeleton component",
	props: [
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: ["Any color from the library"],
			defaultValue: null,
			description: "Background color of the skeleton.",
			isRequired: false,
		},
		{
			name: "borderRadius",
			type: "string",
			possibleValues: [
				"xs",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"3xl",
				"4xl",
				"full",
			],
			defaultValue: null,
			description: "Border radius of the skeleton.",
			isRequired: false,
		},
		{
			name: "animation",
			type: "string",
			possibleValues: ["pulse", "shine"],
			defaultValue: null,
			description: "Animation style for the skeleton.",
			isRequired: false,
		},
	],
	propsSecondTitle: "Skeleton card",
	propsSecond: [
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: ["Any color from the library"],
			defaultValue: null,
			description: "Background color of the component.",
			isRequired: false,
		},
		{
			name: "borderRadius",
			type: "string",
			possibleValues: [
				"xs",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"3xl",
				"4xl",
				"full",
			],
			defaultValue: null,
			description: "Border radius of the component.",
			isRequired: false,
		},
		{
			name: "isShiny",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "If true, applies a shiny animation to the component.",
			isRequired: false,
		},
		{
			name: "inline",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "Use inline-flex instead of flex for the component.",
			isRequired: false,
		},
		{
			name: "flexDirection",
			type: "string",
			possibleValues: ["row", "row-reverse", "column", "column-reverse"],
			defaultValue: null,
			description: "Flex direction for the component content.",
			isRequired: false,
		},
		{
			name: "flexWrap",
			type: "string",
			possibleValues: ["nowrap", "wrap", "wrap-reverse"],
			defaultValue: null,
			description: "Flex wrap for the component content.",
			isRequired: false,
		},
		{
			name: "justifyContent",
			type: "string",
			possibleValues: [
				"start",
				"end",
				"center",
				"between",
				"around",
				"evenly",
			],
			defaultValue: null,
			description: "Justify content property for the component content.",
			isRequired: false,
		},
		{
			name: "alignItems",
			type: "string",
			possibleValues: ["start", "end", "center", "baseline", "stretch"],
			defaultValue: null,
			description: "Align items property for the component content.",
			isRequired: false,
		},
		{
			name: "justifyItems",
			type: "string",
			possibleValues: ["start", "end", "center", "stretch"],
			defaultValue: null,
			description: "Justify items property for the component content.",
			isRequired: false,
		},
		{
			name: "alignContent",
			type: "string",
			possibleValues: [
				"start",
				"end",
				"center",
				"between",
				"around",
				"evenly",
				"stretch",
			],
			defaultValue: null,
			description: "Align content property for the component content.",
			isRequired: false,
		},
		{
			name: "gap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
			defaultValue: null,
			description: "Gap between component children.",
			isRequired: false,
		},
		{
			name: "colGap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
			defaultValue: null,
			description: "Column gap between component children.",
			isRequired: false,
		},
		{
			name: "rowGap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
			defaultValue: null,
			description: "Row gap between component children.",
			isRequired: false,
		},
	],
}
