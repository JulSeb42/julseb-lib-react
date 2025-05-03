import { allOverlays } from "../../styles"
import type { ComponentPreview } from "../../components"

const OverlaysPreview = () => {
	return (
		<div className="flex flex-col gap-4 items-stretch">
			{allOverlays.map((overlay, i) => (
				<div
					key={i}
					className="border-1 border-gray-200 rounded-md p-2 flex items-center gap-2"
				>
					<div
						className="size-25"
						style={{ background: overlay.css }}
					/>
					<div className="flex flex-col items-stretch gap-0.5">
						<h4>{overlay.name}</h4>
						<p>
							<strong>Variable: </strong>
							{overlay.variable}
						</p>
						<p>
							<strong>CSS: </strong>
							{overlay.css}
						</p>
						<p>
							<strong>Value: </strong>
							{overlay.value}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export const overlaysPreview: ComponentPreview<null> = {
	name: "Overlays",
	category: "styles",
	component: null,
	import: null,
	additionalImports: ["OVERLAYS"],
	optionalImports: null,
	propsImport: null,
	additionalTypeImports: null,
	extends: null,
	previews: [{ previewTitle: "", demo: <OverlaysPreview /> }],
}
