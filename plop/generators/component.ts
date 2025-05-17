import { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
	const { setGenerator } = plop

	setGenerator("component", {
		description: "React component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Enter component's name",
			},
			{
				type: "list",
				name: "category",
				message: "Which category?",
				choices: ["styles", "layouts", "components", "helpers"],
				default: "components",
			},
			{
				type: "input",
				name: "tag",
				message: "Enter HTML tag",
				default: "div",
			},
			{
				type: "input",
				name: "attribute",
				message: "Enter HTML attribute",
				default: data => data.tag,
			},
			{
				type: "confirm",
				name: "children",
				message: "Add `children` prop?",
				default: true,
			},
		],
		actions: [
			"Creating your component",
			{
				type: "addMany",
				destination: "../src/lib/components/{{ pascalCase name }}",
				templateFiles: "./templates/component/*.hbs",
				base: "./templates/component",
				verbose: false,
			},
			"Creating previews file",
			{
				type: "add",
				path: "../src/lib/components/{{ pascalCase name }}/__preview__/{{ pascalCase name }}.preview.tsx",
				templateFile: "./templates/component/__preview__/preview.hbs",
			},
			"Importing and adding your component in components file",
			{
				type: "modify",
				path: "../src/data/components.tsx",
				template:
					'import { {{ camelCase name }}Preview } from "../lib/components/{{ pascalCase name }}/__preview__/{{ pascalCase name }}.preview"\n$1',
				pattern: /(\/\* Prepend import - DO NOT REMOVE \*\/)/g,
			},
			{
				type: "modify",
				path: "../src/data/components.tsx",
				template: "{{ camelCase name }}Preview,\n\t$1",
				pattern: /(\/\* Prepend array - DO NOT REMOVE \*\/)/g,
			},
			"Exporting your new component from the library",
			{
				type: "modify",
				path: "../src/lib/index.ts",
				template:
					'export * from "./components/{{ pascalCase name }}"\n$1',
				pattern: /(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
			},
			"Exporting your component's type from the library",
			{
				type: "modify",
				path: "../src/lib/types/components-props.ts",
				template:
					'export * from "../components/{{ pascalCase name }}/types"\n$1',
				pattern: /(\/\* Prepend here - DO NOT REMOVE \*\/)/g,
			},
		],
	})
}
