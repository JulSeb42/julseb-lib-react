import { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("preview", {
        description: "Component preview",
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
                name: "attribute",
                message: "Enter HTML attribute",
                default: "div",
            },
        ],
        actions: data => {
            const actions = [
                "Start creating your new files",
                {
                    type: "add",
                    path: "../src/lib/components/{{ pascalCase name }}/__preview__/{{ pascalCase name }}.preview.tsx",
                    templateFile: data?.demo
                        ? "./templates/__preview__/preview.hbs"
                        : "./templates/__preview__/preview-props.hbs",
                },
                "Importing the preview into the preview folder",
                {
                    type: "modify",
                    path: "../src/data/components.tsx",
                    template:
                        'import { {{ camelCase name }}Preview } from "../lib/components/{{ pascalCase name }}/__preview__/{{ pascalCase name }}.preview"\n$1',
                    pattern: /(\/\* Prepend import - DO NOT REMOVE \*\/)/g,
                },
                "Exporting from the component from the data folder",
                {
                    type: "modify",
                    path: "../src/data/components.tsx",
                    template: "{{ camelCase name }}Preview,\n$1",
                    pattern: /(\/\* Prepend array - DO NOT REMOVE \*\/)/g,
                },
            ]

            return actions
        },
    })
}
