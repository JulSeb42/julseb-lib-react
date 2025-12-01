import { LazyImage } from "../../../"
import type { ILibLazyImage } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const IMG_SRC = "/images/image-card.jpg"
const IMG_ALT = "Image"

export const lazyImagePreview: ComponentPreview<ILibLazyImage> = {
	name: "LazyImage",
	component: LazyImage,
	category: "components",
	import: "LazyImage",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibLazyImage",
	additionalTypeImports: null,
	extends: ["HTMLImgElement"],
	previews: [
		{
			previewTitle: "Default",
			props: {
				src: IMG_SRC,
				alt: IMG_ALT,
				className: "w-full aspect-video",
				skeletonClasses: "aspect-video h-[unset] rounded-none",
				skeletonAnimation: "shine",
			},
		},
		{
			previewTitle: "With border radius",
			props: {
				src: IMG_SRC,
				alt: IMG_ALT,
				borderRadius: "2xl",
				skeletonClasses: "rounded-2xl h-100",
				skeletonAnimation: "shine",
			},
		},
		{
			previewTitle: "With caption",
			props: {
				src: IMG_SRC,
				alt: IMG_ALT,
				caption: "Caption",
				borderRadius: "md",
			},
		},
	],
	props: [
		{
			name: "caption",
			type: "string | Object",
			possibleValues: null,
			defaultValue: null,
			description:
				"Caption for the image. Can be a string or an object with text and optional styling.",
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
			description: "Border radius for the image or figure.",
			isRequired: false,
		},
		{
			name: "fit",
			type: "string",
			possibleValues: ["contain", "cover", "fill", "none", "scale-down"],
			defaultValue: null,
			description: "How the image should fit within its container.",
			isRequired: false,
		},
		{
			name: "skeletonClasses",
			type: "string | Array<string>",
			possibleValues: null,
			defaultValue: null,
			description:
				"Class names for the skeleton showing while the image is loading",
			isRequired: false,
		},
		{
			name: "skeletonAnimation",
			type: "string",
			possibleValues: ["pulse", "shine"],
			defaultValue: null,
			description: "Animation style for the skeleton.",
			isRequired: false,
		},
	],
}
