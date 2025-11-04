import { Link } from "react-router-dom"
import { Carousel, Image } from "../../../"
import type { ILibCarousel } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const items = [
	"/images/slideshow-1.avif",
	"/images/slideshow-2.avif",
	"/images/slideshow-3.avif",
	"/images/slideshow-4.avif",
]

const itemsChildren = [
	<Link to="#" key={0} className="h-full">
		<Image
			src="/images/slideshow-1.avif"
			alt="Image 1"
			className="h-full object-cover"
		/>
	</Link>,
	<Link to="#" key={1} className="h-full">
		<Image
			src="/images/slideshow-2.avif"
			alt="Image 2"
			className="h-full object-cover"
		/>
	</Link>,
	<Link to="#" key={2} className="h-full">
		<Image
			src="/images/slideshow-3.avif"
			alt="Image 3"
			className="h-full object-cover"
		/>
	</Link>,
	<Link to="#" key={3} className="h-full">
		<Image
			src="/images/slideshow-4.avif"
			alt="Image 4"
			className="h-full object-cover"
		/>
	</Link>,
]

export const carouselPreview: ComponentPreview<ILibCarousel> = {
	name: "Carousel",
	component: Carousel,
	category: "components",
	import: "Carousel",
	additionalImports: [],
	optionalImports: [],
	propsImport: "ILibCarousel",
	additionalTypeImports: [],
	extends: ["HTMLDivElement"],
	previews: [
		{ previewTitle: "Default", props: { items } },
		{
			previewTitle: "As React elements",
			props: { items: itemsChildren, showItems: 3, stopOnHover: true },
		},
	],
	props: [
		{
			name: "items",
			type: "Array of React Element or Array of string",
			possibleValues: null,
			defaultValue: null,
			isRequired: true,
			description:
				"Array of image URLs (strings) or custom React elements to display in the carousel",
		},
		{
			name: "stopOnHover",
			type: "boolean",
			possibleValues: ["true", "false"],
			defaultValue: null,
			isRequired: false,
			description:
				"Whether to pause the animation when hovering over the carousel",
		},
		{
			name: "showItems",
			type: "number",
			possibleValues: [2, 3, 4, 5, 6],
			defaultValue: "4",
			isRequired: false,
			description:
				"Number of items to show simultaneously in the carousel viewport",
		},
		{
			name: "imgFit",
			type: "string",
			possibleValues: ["cover", "contain"],
			defaultValue: "cover",
			isRequired: false,
			description:
				"CSS object-fit property for images (only applies when items are strings)",
		},
		{
			name: "speed",
			type: "number",
			possibleValues: null,
			defaultValue: "20",
			isRequired: false,
			description:
				"Animation duration in seconds for one complete scroll cycle",
		},
	],
}
