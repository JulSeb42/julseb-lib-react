import { Link } from "react-router-dom"
import { Wrapper, Text } from "../../../"

import type { ILibWrapper } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const wrapperPreview: ComponentPreview<ILibWrapper> = {
	name: "Wrapper",
	component: Wrapper,
	category: "styles",
	import: "Wrapper",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibWrapper",
	additionalTypeImports: null,
	extends: ["HTMLSectionElement"],
	previews: [
		{
			demo: (
				<div className="flex flex-col gap-2">
					<Text>
						<Link
							to="/main/demo-default"
							target="_blank"
							rel="noreferrer noopener"
						>
							Demo main default
						</Link>
					</Text>
					<Text>
						<Link
							to="/aside/demo-left"
							target="_blank"
							rel="noreferrer noopener"
						>
							Demo main and aside
						</Link>
					</Text>
				</div>
			),
		},
	],
}
