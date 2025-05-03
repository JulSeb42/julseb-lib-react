import clsx from "clsx"
import { capitalize } from "@julseb-lib/utils"
import { allColors } from "../../styles"
import type { ComponentPreview } from "../../components"

const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
const names = [
	"red",
	"orange",
	"amber",
	"yellow",
	"lime",
	"green",
	"emerald",
	"teal",
	"cyan",
	"sky",
	"blue",
	"indigo",
	"violet",
	"purple",
	"fuchsia",
	"pink",
	"rose",
	"slate",
	"gray",
	"zinc",
	"neutral",
	"stone",
]

const ColorsPreview = () => {
	return (
		<>
			<div className="flex gap-2">
				<div className="flex flex-col mt-12 gap-2">
					{names.map((name, i) => (
						<span
							key={i}
							className={clsx(
								"inline-flex items-center",
								`w-18 h-10`,
							)}
						>
							{capitalize(name)}
						</span>
					))}
				</div>

				<div className="grid grid-cols-11 gap-2 w-fit">
					{numbers.map(number => (
						<span
							key={number}
							className="inline-flex text-center w-full h-10 items-center justify-center"
						>
							{number}
						</span>
					))}

					{allColors
						.filter(c => c.name !== "black" && c.name !== "white")
						.map((color, i) => (
							<div
								key={i}
								style={{ backgroundColor: color.css }}
								className={clsx("rounded-md", `size-10`)}
							/>
						))}
				</div>
			</div>

			<div>
				<p>+ black and white:</p>

				<div className="grid grid-cols-11 gap-2 w-fit">
					<div className="rounded-md size-10 bg-black" />
					<div className="rounded-md size-10 bg-white	" />
				</div>
			</div>
		</>
	)
}

export const colorsPreview: ComponentPreview<null> = {
	name: "Colors",
	category: "styles",
	component: null,
	import: null,
	additionalImports: ["COLORS"],
	optionalImports: null,
	propsImport: null,
	additionalTypeImports: null,
	extends: null,
	previews: [{ previewTitle: "", demo: <ColorsPreview /> }],
}
