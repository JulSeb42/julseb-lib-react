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
import type {} from "../../../types"
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
	import: "Modal", // import Component (ex: Skeleton)
	additionalImports: [], // import OtherComponent (ex: SkeletonCard)
	optionalImports: [], // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
	propsImport: "ILibModal", // import ILibComponent (ex: ILibAccordion)
	additionalTypeImports: [], // import LibComponentItem (ex: LibAccordionItem)
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
			possibleValues: [],
			defaultValue: null,
			description: "Whether the modal is currently visible.",
			isRequired: true,
		},
		{
			name: "setIsOpen",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function to control the modal open/closed state.",
			isRequired: true,
		},
		{
			name: "disableEsc",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description:
				"Whether to disable closing the modal with the Escape key.",
			isRequired: false,
		},
		{
			name: "hideCloseButton",
			type: "boolean",
			possibleValues: [],
			defaultValue: null,
			description: "Whether to hide the close button in the modal.",
			isRequired: false,
		},
		{
			name: "closeIcon",
			type: "ReactElement",
			possibleValues: [],
			defaultValue: null,
			description: "Custom close icon for the modal.",
			isRequired: false,
		},
		{
			name: "labelClose",
			type: "string",
			possibleValues: [],
			defaultValue: "Close modal",
			description: "Aria label for the close button.",
			isRequired: false,
		},
	],
}
