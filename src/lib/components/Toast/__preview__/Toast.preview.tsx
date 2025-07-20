import { Toast, toast, Button } from "../../../"
import type { ILibToast } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const Preview = () => {
	return (
		<div className="flex flex-col items-start gap-2">
			<Button
				color="success"
				onClick={() =>
					toast.success("Success", {
						body: "Body",
						duration: 5000,
					})
				}
			>
				Success
			</Button>
			<Button color="danger" onClick={() => toast.error("Error")}>
				Error
			</Button>
			<Button color="warning" onClick={() => toast.warning("Warning")}>
				Warning
			</Button>
			<Button color="primary" onClick={() => toast.info("Info")}>
				Info
			</Button>
			<Button color="gray" onClick={() => toast.loading("Loading")}>
				Loading
			</Button>
			<Button color="danger" onClick={() => toast.close()}>
				Close
			</Button>
		</div>
	)
}

export const toastPreview: ComponentPreview<ILibToast> = {
	name: "Toast",
	component: Toast,
	category: "components",
	import: "Toast",
	additionalImports: ["ToastContainer"],
	optionalImports: [],
	propsImport: "ILibToast",
	additionalTypeImports: [],
	extends: ["HTMLDivElement"],
	previews: [
		{
			previewTitle: "Default",
			props: { title: "Title", body: "Body", hideCloseButton: true },
		},
		{ previewTitle: "Toaster", demo: <Preview /> },
	],
	props: [
		{
			name: "title",
			type: "ReactNode",
			possibleValues: [],
			defaultValue: null,
			description: "Title content to display in the toast header.",
			isRequired: true,
		},
		{
			name: "body",
			type: "ReactNode",
			possibleValues: [],
			defaultValue: null,
			description: "Body content to display below the title.",
			isRequired: false,
		},
		{
			name: "status",
			type: "string",
			possibleValues: ["success", "error", "warning", "info", "loading"],
			defaultValue: "success",
			description:
				"Status type that determines the toast appearance and behavior.",
			isRequired: false,
		},
		{
			name: "hideCloseButton",
			type: "boolean",
			possibleValues: [],
			defaultValue: "false",
			description: "Whether to hide the close button in the toast.",
			isRequired: false,
		},
		{
			name: "closeToast",
			type: "function",
			possibleValues: [],
			defaultValue: null,
			description: "Function to call when the close button is clicked.",
			isRequired: false,
		},
		{
			name: "iconClose",
			type: "ReactElement",
			possibleValues: [],
			defaultValue: "BiX",
			description: "Custom icon for the close button.",
			isRequired: false,
		},
		{
			name: "loaderVariant",
			type: "number",
			possibleValues: [1, 2, 3],
			defaultValue: null,
			description:
				"Variant of the loader shown when status is 'loading'.",
			isRequired: false,
		},
	],
}
