import { allShadows } from "../../styles"
import type { ComponentPreview } from "../../components"

const ShadowsPreview = () => {
	return (
		<div className="gap-4 grid grid-cols-2">
			{allShadows.map((shadow, i) => (
				<div
					className="flex flex-col items-center gap-2 p-2 border-1 border-gray-200 rounded-md"
					key={i}
				>
					<div
						className="size-25"
						style={{ boxShadow: shadow.css }}
					/>
					<div className="flex flex-col items-stretch gap-0.5">
						<h4>{shadow.name}</h4>
						<p>
							<strong>Variable: </strong>
							{shadow.variable}
						</p>
						<p>
							<strong>CSS: </strong>
							{shadow.css}
						</p>
						<p>
							<strong>Value: </strong>
							{shadow.value}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export const shadowsPreview: ComponentPreview<null> = {
	name: "Shadows",
	category: "styles",
	component: null,
	import: null,
	additionalImports: ["SHADOWS"],
	optionalImports: null,
	propsImport: null,
	additionalTypeImports: null,
	extends: null,
	previews: [{ previewTitle: "", demo: <ShadowsPreview /> }],
	props: [],
}
