import { useState, type FC } from "react"
import { BiHeart, BiSolidHeart } from "react-icons/bi"
import { Rating } from "../../../"
import type { ILibRating } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const Preview: FC<Partial<ILibRating>> = props => {
	const [rating, setRating] = useState(props?.rating ?? 1)

	return <Rating {...(props as any)} rating={rating} setRating={setRating} />
}

const PreviewReadOnly: FC<Partial<ILibRating>> = props => {
	return <Rating {...(props as any)} rating={2} readOnly />
}

export const ratingPreview: ComponentPreview<ILibRating> = {
	name: "Rating",
	component: Rating,
	category: "components",
	import: "Rating",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibRating",
	additionalTypeImports: [],
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", demo: <Preview /> },
		{
			previewTitle: "Different icons",
			demo: (
				<Preview
					label="Rating"
					rating={2}
					icons={{
						default: <BiHeart size={24} />,
						checked: <BiSolidHeart size={24} />,
					}}
				/>
			),
		},
		{ previewTitle: "Read only", demo: <PreviewReadOnly /> },
		{
			previewTitle: "Validation",
			demo: <Preview validation={{ status: false }} />,
		},
	],
	props: [
		{
			name: "rating",
			type: "number",
			possibleValues: null,
			defaultValue: null,
			description: "Current rating value (1-5 stars).",
			isRequired: true,
		},
		{
			name: "setRating",
			type: "function",
			possibleValues: null,
			defaultValue: null,
			description:
				"Function to update the rating value when not in read-only mode.",
			isRequired: false,
		},
		{
			name: "readOnly",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description:
				"Whether the rating is in read-only mode (no interaction).",
			isRequired: false,
		},
		{
			name: "icons",
			type: "Object",
			possibleValues: null,
			defaultValue: null,
			description:
				"Icon configuration object with default and checked icon variants.",
			isRequired: false,
		},
		{
			name: "iconsSize",
			type: "number",
			possibleValues: null,
			defaultValue: "32",
			description: "Size of the rating icons. Default: 32.",
			isRequired: false,
		},
		{
			name: "accentColor",
			type: "string",
			possibleValues: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"gray",
				"white",
			],
			defaultValue: "primary",
			description: 'Accent color for the icons. Default: "primary".',
			isRequired: false,
		},
		{
			name: "gap",
			type: "string",
			possibleValues: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
			defaultValue: "xs",
			description: 'Gap between rating icons. Default: "xs".',
			isRequired: false,
		},
		{
			name: "label",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Label text to display above the rating.",
			isRequired: false,
		},
		{
			name: "labelComment",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Additional comment text next to the label.",
			isRequired: false,
		},
		{
			name: "helper",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Helper text to display below the label.",
			isRequired: false,
		},
		{
			name: "helperBottom",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Helper text to display at the bottom of the rating.",
			isRequired: false,
		},
		{
			name: "id",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Unique identifier for the rating element.",
			isRequired: false,
		},
		{
			name: "validation",
			type: "Object",
			possibleValues: null,
			defaultValue: null,
			description: "Validation state and configuration object.",
			isRequired: false,
		},
		{
			name: "containerClassName",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Additional CSS classes for the container.",
			isRequired: false,
		},
	],
}
