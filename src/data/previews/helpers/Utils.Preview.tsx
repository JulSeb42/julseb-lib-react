import { Table } from "../../../lib"
import { allTsUtils } from "../../helpers"
import type { ComponentPreview } from "../../components"

const Preview: FC = () => {
	const headers = ["Name", "Effect", "Arguments", "Example", "Result"]
	const data = allTsUtils.map(util => [
		util.name,
		util.effect as any,
		util.arguments.join(", "),
		util.example ?? "",
		util.result as any,
	])

	return <Table headers={headers} vAlign="align-top" data={data} />
}

export const utilsPreview: ComponentPreview<null> = {
	name: "Utils",
	category: "helpers",
	component: null,
	import: null,
	additionalImports: null,
	optionalImports: null,
	propsImport: null,
	additionalTypeImports: null,
	extends: null,
	previews: [
		{
			demo: <Preview />,
		},
	],
	props: null,
}
