import clsx from "clsx"
import { capitalize } from "@julseb-lib/utils"
import { Tooltip } from "../../../lib"
import { allColors } from "../../styles"
import type { ComponentPreview } from "../../components"

const numbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
const names = ["primary", "secondary", "success", "danger", "warning", "gray"]

const ColorsPreview = () => {
	return (
		<>
			<div className="flex gap-2">
				<div className="flex flex-col gap-2 mt-12">
					{names.map((name, i) => (
						<span
							key={i}
							className="inline-flex items-center w-18 h-10"
						>
							{capitalize(name)}
						</span>
					))}
				</div>

				<div className="gap-2 grid grid-cols-11 w-fit">
					{numbers.map(number => (
						<span
							key={number}
							className="inline-flex justify-center items-center w-full h-10 text-center"
						>
							{number}
						</span>
					))}

					{allColors
						.filter(c => c.name !== "black" && c.name !== "white")
						.map((color, i) => (
							<Tooltip tooltip={color.name} offset="2xs" key={i}>
								<div
									className={clsx(
										"rounded-md size-10",
										color.twClass,
									)}
								/>
							</Tooltip>
						))}
				</div>
			</div>

			<div>
				<p>+ black and white:</p>

				<div className="gap-2 grid grid-cols-11 w-fit">
					<Tooltip tooltip="Black" offset="2xs">
						<div className="bg-black rounded-md size-10" />
					</Tooltip>
					<Tooltip tooltip="White" offset="2xs">
						<div className="bg-white rounded-md size-10" />
					</Tooltip>
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
	props: null,
}
