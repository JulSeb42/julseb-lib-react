/*=============================================== Component ===============================================*/

import { NodePlopAPI } from "plop"
import { allComponents } from "./all-components"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("component", {
        description: "React component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter component's name",
                validate: data => {
                    const component = allComponents.find(
                        component => data?.name === component
                    )

                    if (component) {
                        console.log({ component })
                        return false
                    }

                    return true
                },
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
                default: "div",
            },
            {
                type: "confirm",
                name: "as",
                message: "Add `as` prop?",
                default: true,
            },
            {
                type: "confirm",
                name: "children",
                message: "Add `children` prop?",
                default: true,
            },
            {
                type: "input",
                name: "other",
                message: "Add other components from the library?",
            },
            {
                type: "input",
                name: "common",
                message: "Add common types?",
            },
        ],
        actions: [
            "Creating your component",
            {
                type: "addMany",
                destination: "../src/lib/components/{{ pascalCase name }}",
                templateFiles: "./templates/component/*.hbs",
                base: "./templates/component",
            },
            "Creating tests file",
            {
                type: "add",
                path: "../src/lib/components/{{ pascalCase name }}/__tests__/{{ pascalCase name }}.cy.tsx",
                templateFile: "./templates/component/__tests__/test.hbs",
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
                pattern: /(\/\/ prependImport)/g,
            },
            {
                type: "modify",
                path: "../src/data/components.tsx",
                template: "{{ camelCase name }}Preview,\n$1",
                pattern: /(\/\/ prependArr)/g,
            },
            "Exporting your new component from the library",
            {
                type: "modify",
                path: "../src/lib/index.ts",
                template:
                    'export * from "./components/{{ pascalCase name }}"\n$1',
                pattern: /(\/\/ prependHere)/g,
            },
            "Exporting your component's type from the library",
            {
                type: "modify",
                path: "../src/lib/types/components-props.ts",
                template:
                    'export * from "../components/{{ pascalCase name }}/types"\n$1',
                pattern: /(\/\/ prependHere)/g,
            },
        ],
    })
}
