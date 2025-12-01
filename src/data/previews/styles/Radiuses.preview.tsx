import clsx from "clsx"
import { allRadiuses } from "../../styles"
import type { ComponentPreview } from "../../components"

const RadiusesPreview = () => {
	return (
		<div className="gap-4 grid grid-cols-2">
			{allRadiuses.map((radius, i) => (
				<div
					className="flex flex-col items-center gap-2 p-2 border border-gray-200 rounded-md"
					key={i}
				>
					<div
						className={clsx(
							"bg-danger-200 size-25",
							radius.twClass,
						)}
					/>
					<div className="flex flex-col items-stretch gap-0.5">
						<h4>{radius.name}</h4>
						<p>
							<strong>Variable: </strong>
							{radius.variable}
						</p>
						<p>
							<strong>CSS: </strong>
							{radius.css}
						</p>
						<p>
							<strong>Value: </strong>
							{radius.value}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export const radiusesPreview: ComponentPreview<null> = {
	name: "Radiuses",
	category: "styles",
	component: null,
	import: null,
	additionalImports: ["RADIUS"],
	optionalImports: null,
	propsImport: null,
	additionalTypeImports: null,
	extends: null,
	previews: [{ previewTitle: "", demo: <RadiusesPreview /> }],
	props: null,
}
