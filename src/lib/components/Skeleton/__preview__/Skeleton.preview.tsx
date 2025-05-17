import { Skeleton, SkeletonCard } from "../../../"
import type {} from "../../../types"
import type { ILibSkeleton } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const skeletonPreview: ComponentPreview<ILibSkeleton> = {
	name: "Skeleton",
	component: Skeleton,
	category: "components",
	import: "Skeleton", // import Component (ex: Skeleton)
	additionalImports: ["SkeletonCard"], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibSkeleton", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
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
					className="px-2 py-4 border-1 border-gray-200 border-solid"
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
					className="p-4 border-1 border-gray-200 border-solid"
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
}
