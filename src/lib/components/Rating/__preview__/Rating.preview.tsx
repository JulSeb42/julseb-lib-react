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
			possibleValues: [],
			defaultValue: null,
			description: "Current rating value (1-5 stars).",
			isRequired: true,
		},
		{
			name: "setRating",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description:
				"Function to update the rating value when not in read-only mode. Required if `readOnly` is not defined.",
			isRequired: true,
		},
		{
			name: "icons",
			type: "Object",
			possibleValues: [],
			defaultValue: "default: BiStar, checked: BiSolidStar",
			description:
				"Icon configuration object with default and checked icon variants.",
			isRequired: false,
		},
		{
			name: "readOnly",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether the rating is in read-only mode (no interaction). Required if `setRating` is not defined.",
			isRequired: true,
		},
		{
			name: "label",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Label text to display above the rating.",
			isRequired: false,
		},
		{
			name: "labelComment",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Additional comment text next to the label.",
			isRequired: false,
		},
		{
			name: "helper",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Helper text to display below the label.",
			isRequired: false,
		},
		{
			name: "helperBottom",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Helper text to display at the bottom of the rating.",
			isRequired: false,
		},
		{
			name: "id",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Unique identifier for the rating element.",
			isRequired: false,
		},
		{
			name: "validation",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Validation state and configuration object.",
			isRequired: false,
		},
		{
			name: "containerClassName",
			type: "string",
			possibleValues: [],
			defaultValue: null,
			description: "Additional CSS classes for the container.",
			isRequired: false,
		},
	],
}
