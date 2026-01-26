import { useState, type FC } from "react"
import {
	Modal,
	Button,
	disableScroll,
	Image,
	Alert,
	Text,
	Flexbox,
} from "../../../"
import type { ILibModal } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const Preview: FC<Omit<ILibModal, "isOpen" | "setIsOpen">> = props => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Button
				onClick={() => {
					setIsOpen(true)
					disableScroll()
				}}
			>
				Open modal
			</Button>

			<Modal {...(props as any)} isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}

export const modalPreview: ComponentPreview<ILibModal> = {
	name: "Modal",
	component: Modal,
	category: "components",
	import: "Modal",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibModal",
	additionalTypeImports: null,
	extends: ["HTMLDivElement"],
	previews: [
		{
			previewTitle: "With image",
			demo: (
				<Preview>
					<Image
						src="/images/image-card.jpg"
						alt="Img"
						className="h-[90svh]"
						fit="contain"
					/>
				</Preview>
			),
		},
		{
			previewTitle: "With alert",
			demo: (
				<Preview>
					<Alert color="danger">
						<Text>Modal text</Text>
						<Flexbox gap="sm">
							<Button color="danger">Button</Button>
							<Button color="danger" variant="transparent">
								Button
							</Button>
						</Flexbox>
					</Alert>
				</Preview>
			),
		},
	],
	props: [
		{
			name: "isOpen",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "Whether the modal is currently visible.",
			isRequired: true,
		},
		{
			name: "setIsOpen",
			type: "function",
			possibleValues: null,
			defaultValue: null,
			description: "Function to control the modal open/closed state.",
			isRequired: true,
		},
		{
			name: "disableEsc",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description:
				"Whether to disable closing the modal with the Escape key.",
			isRequired: false,
		},
		{
			name: "hideCloseButton",
			type: "boolean",
			possibleValues: null,
			defaultValue: null,
			description: "Whether to hide the close button in the modal.",
			isRequired: false,
		},
		{
			name: "closeIcon",
			type: "ReactElement",
			possibleValues: null,
			defaultValue: null,
			description: "Custom close icon for the modal.",
			isRequired: false,
		},
		{
			name: "labelClose",
			type: "string",
			possibleValues: null,
			defaultValue: "Close modal",
			description: "Aria label for the close button.",
			isRequired: false,
		},
		{
			name: "enableScrollWhenOpen",
			type: "boolean",
			possibleValues: null,
			defaultValue: "false",
			description: "Enable or not page scrolling when the modal is open.",
			isRequired: false,
		},
	],
}
