import { generateNumbers, Slideshow } from "../../../"
import type { ILibSlideshow } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const images = generateNumbers(1, 4).map(n => `/images/slideshow-${n}.avif`)

export const slideshowPreview: ComponentPreview<ILibSlideshow> = {
	name: "Slideshow",
	component: Slideshow,
	category: "components",
	import: "Slideshow",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibSlideshow",
	additionalTypeImports: [],
	extends: ["HTMLDivElement"],
	previews: [
		{
			previewTitle: "Default",
			props: {
				images,
				pagination: {
					position: "inside",
					type: "dots-outline",
					color: "white",
				},
				borderRadius: "2xl",
				controls: { color: "white" },
			},
			// demo: (
			// 	<div className="aspect-video">
			// 		{/*  [&_.slides-wrapper]:h-[600px] */}
			// 		<Slideshow images={images} />
			// 	</div>
			// ),
		},
		{
			previewTitle: "With thumbnails",
			props: { images, pagination: { type: "thumbnails" } },
		},
		{
			previewTitle: "With controls",
			props: { images, controls: { size: "large" } },
		},
		{
			previewTitle: "Autoplay",
			props: {
				images,
				hideControls: true,
				hidePagination: true,
				options: {},
			},
		},
		{
			previewTitle: "With different height",
			props: { images, className: "h-[300px]" },
		},
	],
	props: [
		{
			name: "images",
			type: "Array<string>",
			possibleValues: [],
			defaultValue: null,
			description:
				"Array of image URLs to display in the slideshow. You can also use children instead",
			isRequired: true,
		},
		{
			name: "imgFit",
			type: "string",
			possibleValues: ["cover", "contain", "fill", "none", "scale-down"],
			defaultValue: "cover",
			description: "Object fit property for images in the slideshow.",
			isRequired: false,
		},
		{
			name: "hideControls",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description: "Whether to hide the navigation control buttons.",
			isRequired: false,
		},
		{
			name: "controls",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description: "Configuration object for navigation control buttons.",
			isRequired: false,
		},
		{
			name: "options",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description:
				"Configuration options for autoplay timing and transition speed.",
			isRequired: false,
		},
		{
			name: "borderRadius",
			type: "string",
			possibleValues: [
				"none",
				"xs",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"3xl",
				"full",
			],
			defaultValue: null,
			description: "Border radius variant for the slideshow container.",
			isRequired: false,
		},

		{
			name: "hidePagination",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description: "Whether to hide the pagination indicators.",
			isRequired: false,
		},
		{
			name: "pagination",
			type: "Object",
			possibleValues: [],
			defaultValue: null,
			description:
				"Configuration object for pagination indicators and behavior.",
			isRequired: false,
		},
	],
}
