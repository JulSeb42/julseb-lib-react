import { BiEnvelope } from "react-icons/bi"
import { ButtonIcon, designTokens, Flexbox } from "../../../"
import type { ReactChildren } from "../../../types"
import type { ILibButtonIcon } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const Flex = ({ children }: { children?: ReactChildren }) => {
	return (
		<Flexbox gap="sm" flexWrap="wrap">
			{children}
		</Flexbox>
	)
}

export const buttonIconPreview: ComponentPreview<ILibButtonIcon> = {
	name: "ButtonIcon",
	component: ButtonIcon,
	category: "components",
	import: "ButtonIcon", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibButtonIcon", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
	extends: ["HTMLButtonElement"],
	previews: [
		// { previewTitle: "Default", props: { icon: <BiEnvelope /> } },
		{
			previewTitle: "Plain",
			demo: (
				<Flex>
					{Object.keys(designTokens.libColorsHover).map(
						(color, i) => (
							<ButtonIcon
								icon={<BiEnvelope size={32} />}
								color={color as any}
								variant="plain"
								key={i}
							/>
						),
					)}
				</Flex>
			),
		},
		{
			previewTitle: "Ghost",
			demo: (
				<Flex>
					{Object.keys(designTokens.libColorsHover).map(
						(color, i) => (
							<ButtonIcon
								icon={<BiEnvelope size={32} />}
								color={color as any}
								variant="ghost"
								key={i}
							/>
						),
					)}
				</Flex>
			),
		},
		{
			previewTitle: "Transparent",
			demo: (
				<Flex>
					{Object.keys(designTokens.libColorsHover).map(
						(color, i) => (
							<ButtonIcon
								icon={<BiEnvelope size={32} />}
								color={color as any}
								variant="transparent"
								key={i}
							/>
						),
					)}
				</Flex>
			),
		},
		{
			previewTitle: "With tooltip",
			demo: (
				<Flex>
					<ButtonIcon
						icon={<BiEnvelope size={32} />}
						tooltip="Tooltip"
						showTooltip
					/>
				</Flex>
			),
		},
		{
			previewTitle: "With different border radius",
			demo: (
				<Flex>
					<ButtonIcon
						icon={<BiEnvelope size={32} />}
						borderRadius="lg"
					/>
				</Flex>
			),
		},
		{
			previewTitle: "Disabled",
			demo: (
				<Flex>
					<ButtonIcon
						icon={<BiEnvelope size={32} />}
						variant="plain"
						disabled
					/>
					<ButtonIcon
						icon={<BiEnvelope size={32} />}
						variant="ghost"
						disabled
					/>
					<ButtonIcon
						icon={<BiEnvelope size={32} />}
						variant="transparent"
						disabled
					/>
				</Flex>
			),
		},
		{
			previewTitle: "Loading",
			demo: (
				<Flex>
					<ButtonIcon icon={<BiEnvelope size={32} />} isLoading />
				</Flex>
			),
		},
	],
	props: [],
}
