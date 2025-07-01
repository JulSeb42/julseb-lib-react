import { Button, designTokens, Flexbox } from "../../../"
import type { ReactChildren } from "../../../types"
import type { ILibButton } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const Flex = ({ children }: { children?: ReactChildren }) => {
	return (
		<Flexbox gap="sm" flexWrap="wrap">
			{children}
		</Flexbox>
	)
}

export const buttonPreview: ComponentPreview<ILibButton> = {
	name: "Button",
	component: Button,
	category: "components",
	import: "Button",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibButton",
	additionalTypeImports: null,
	extends: ["HTMLButtonElement"],
	previews: [
		{
			previewTitle: "Plain",
			demo: (
				<Flex>
					{Object.keys(designTokens.libColorsHover).map(
						(color, i) => (
							<Button color={color as any} key={i}>
								Button
							</Button>
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
							<Button
								color={color as any}
								variant="ghost"
								key={i}
							>
								Button
							</Button>
						),
					)}
				</Flex>
			),
		},
		{
			previewTitle: "Outline",
			demo: (
				<Flex>
					{Object.keys(designTokens.libColorsHover).map(
						(color, i) => (
							<Button
								color={color as any}
								variant="outline"
								key={i}
							>
								Button
							</Button>
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
							<Button
								color={color as any}
								variant="transparent"
								key={i}
							>
								Button
							</Button>
						),
					)}
				</Flex>
			),
		},
		{
			previewTitle: "Small",
			demo: (
				<Flex>
					<Button size="small">Button</Button>
				</Flex>
			),
		},
		{
			previewTitle: "Disabled",
			demo: (
				<Flex>
					<Button variant="plain" disabled>
						Button
					</Button>
					<Button variant="ghost" disabled>
						Button
					</Button>
					<Button variant="transparent" disabled>
						Button
					</Button>
				</Flex>
			),
		},
		{
			previewTitle: "Loading",
			demo: (
				<Flex>
					<Button isLoading>Button</Button>
				</Flex>
			),
		},
	],
	props: [
		{
			name: "variant",
			type: "string",
			possibleValues: ["plain", "ghost", "outline", "transparent"],
			defaultValue: "plain",
			description: "Button variant style.",
			isRequired: false,
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
			name: "size",
			type: "string",
			possibleValues: ["default", "small"],
			defaultValue: "default",
			description: "Button size.",
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
	],
}
