import type { NodePlopAPI, ActionType } from "plop"
import { BASE_PATH } from "../utils"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("demo", {
		description: "Generates a demo page",
		prompts: [
			{ type: "input", name: "name", message: "Enter demo's name" },
		],
		actions: [
			{
				type: "add",
				path: `${BASE_PATH}/pages/demos/{{>pascalName}}Demo.tsx`,
				templateFile: "./templates/demo.hbs",
			},
			{
				type: "modify",
				path: `${BASE_PATH}/routes/index.tsx`,
				template:
					'import { {{>pascalName}}Demo } from "../pages/demos/{{>pascalName}}Demo"\n$1',
				pattern: /(\/\* Prepend demo import - DO NOT REMOVE \*\/)/g,
			},
			{
				type: "modify",
				path: `${BASE_PATH}/routes/index.tsx`,
				template:
					'{ path: "/{{>kebabName}}/demo", element: <{{>pascalName}}Demo /> },\n\t$1',
				pattern: /(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
			},
		],
		// actions: data => {
		//     const actions: Array<ActionType> = []
		//     return actions
		// },
	})
}
