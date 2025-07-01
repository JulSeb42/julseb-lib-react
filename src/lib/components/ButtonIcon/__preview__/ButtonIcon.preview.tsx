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
	import: "ButtonIcon",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibButtonIcon",
	additionalTypeImports: null,
	extends: ["HTMLButtonElement"],
	previews: [
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
	props: [
		{
			name: "icon",
			type: "ReactElement",
			possibleValues: null,
			defaultValue: null,
			description: "Icon element to display inside the button.",
			isRequired: true,
		},
		{
			name: "color",
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
			description: "Button color theme.",
			isRequired: false,
		},
		{
			name: "borderRadius",
			type: "string",
			possibleValues: [
				"none",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"3xl",
				"full",
			],
			defaultValue: "full",
			description: "Border radius of the button.",
			isRequired: false,
		},
		{
			name: "variant",
			type: "string",
			possibleValues: ["plain", "ghost", "outline", "transparent"],
			defaultValue: "plain",
			description: "Button variant style.",
			isRequired: false,
		},
		{
			name: "isLoading",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "Whether the button is in a loading state.",
			isRequired: false,
		},
		{
			name: "loaderVariant",
			type: "number",
			possibleValues: ["1", "2", "3"],
			defaultValue: "1",
			description: "Loader variant to display when loading.",
			isRequired: false,
		},
		{
			name: "loaderClasses",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Additional CSS classes for the loader.",
			isRequired: false,
		},
		{
			name: "tooltip",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Tooltip text to display.",
			isRequired: false,
		},
		{
			name: "showTooltip",
			type: "boolean | Object",
			possibleValues: null,
			defaultValue: null,
			description:
				"Whether to show tooltip or tooltip configuration object.",
			isRequired: false,
		},
		{
			name: "containerStyle",
			type: "CSSProperties",
			possibleValues: null,
			defaultValue: null,
			description: "Inline styles for the container.",
			isRequired: false,
		},
		{
			name: "containerClasses",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Additional CSS classes for the container.",
			isRequired: false,
		},
	],
}
