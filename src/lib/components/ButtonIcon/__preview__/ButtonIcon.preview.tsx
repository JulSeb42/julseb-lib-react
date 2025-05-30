import { ButtonIcon, Flexbox, designTokens } from "../../../"
import type { LibButtonIconVariant, ReactChildren } from "../../../types"
import type { ILibButtonIcon } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const buttonVariants: Array<LibButtonIconVariant> = [
	"plain",
	"transparent",
	"ghost",
]

const FlexPreview = ({ children }: { children?: ReactChildren }) => {
	return (
		<Flexbox gap="s" flexWrap="wrap">
			{children}
		</Flexbox>
	)
}

const ButtonsMap = (props: ILibButtonIcon) => {
	const colors = Object.values(designTokens.colorsHover)

	return (
		<FlexPreview>
			{colors.map((c, i) => (
				<ButtonIcon
					key={i}
					color={c}
					{...props}
					data-testid="testid"
					className="className"
				/>
			))}
		</FlexPreview>
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
			previewTitle: "Default",
			props: {
				icon: "mail",
				"data-testid": "testid",
				className: "className",
			},
		},
		...buttonVariants.map(variant => ({
			previewTitle: `Variant ${variant}`,
			demo: <ButtonsMap icon="mail" variant={variant} />,
		})),
		{
			previewTitle: "With a different size",
			props: {
				icon: "mail",
				variant: "ghost",
				size: 48,
				"data-testid": "testid",
				className: "className",
			},
		},
		{
			previewTitle: "As link",
			demo: (
				<FlexPreview>
					<ButtonIcon
						icon="mail"
						variant="plain"
						color="primary"
						to="/"
						data-testid="testid"
						className="className"
						blank
					/>
					<ButtonIcon
						icon="mail"
						variant="ghost"
						color="secondary"
						href="#"
						data-testid="testid"
						className="className"
					/>
				</FlexPreview>
			),
		},
		{
			previewTitle: "With tooltip",
			props: {
				icon: "mail",
				tooltip: "Hello",
				showTooltip: true,
				"data-testid": "testid",
				className: "className",
			},
		},
		{
			previewTitle: "Disabled",
			props: {
				icon: "mail",
				disabled: true,
				"data-testid": "testid",
				className: "className",
			},
		},
		{
			previewTitle: "Loading",
			props: {
				icon: "mail",
				isLoading: true,
				"data-testid": "testid",
				className: "className",
			},
		},
	],
}
