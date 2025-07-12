import { allSpacers } from "../../styles"
import type { ComponentPreview } from "../../components"

const SpacersPreview = () => {
	return (
		<div className="gap-4 grid grid-cols-2">
			{allSpacers.map((spacer, i) => (
				<div
					className="flex flex-col items-center gap-2 p-2 border-1 border-gray-200 rounded-md"
					key={i}
				>
					<div
						className="bg-danger-200"
						style={{ width: spacer.css, height: spacer.css }}
					/>
					<div className="flex flex-col items-stretch gap-0.5">
						<h4>{spacer.name}</h4>
						<p>
							<strong>Variable: </strong>
							{spacer.variable}
						</p>
						<p>
							<strong>CSS: </strong>
							{spacer.css}
						</p>
						<p>
							<strong>Value: </strong>
							{spacer.value}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export const spacersPreview: ComponentPreview<null> = {
	name: "Spacers",
	category: "styles",
	component: null,
	import: null,
	additionalImports: ["SPACERS"],
	optionalImports: null,
	propsImport: null,
	additionalTypeImports: null,
	extends: null,
	previews: [{ previewTitle: "", demo: <SpacersPreview /> }],
	props: null,
}
