/*=============================================== Plopfile ===============================================*/

export default (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setGenerator } = plop

    // TODO: Generators
    // ? component
    // ? demo component

    setGenerator("component", {
        description: "React component",
        prompts: [
            // ? name
            {
                type: "input",
                name: "name",
                message: "Enter component's name",
            },
            // ? category
            {
                type: "list",
                name: "category",
                message: "Which category?",
                choices: ["styles", "layouts", "components", "helpers"],
                default: "components",
            },
            // ? tag
            {
                type: "input",
                name: "tag",
                message: "Enter HTML tag",
                default: "div",
            },
            // ? HTMLAttribute => HTMLDivElement
            {
                type: "input",
                name: "attribute",
                message: "Enter HTML attribute",
                default: "div",
            },
            // ? as => default true
            {
                type: "confirm",
                name: "as",
                message: "Add `as` prop?",
                default: true,
            },
            // ? add children
            {
                type: "confirm",
                name: "children",
                message: "Add `children` prop?",
                default: true,
            },
            // ? add other components?
            {
                type: "input",
                name: "other",
                message: "Add other components from the library?",
            },
            // ? add common types to type page?
            {
                type: "input",
                name: "common",
                message: "Add common types?",
            },
        ],
        actions: [
            // ? create files => index + component + styles + types + tests
            {
                type: "addMany",
                destination: "../src/lib/components/{{ pascalCase name }}",
                templateFiles: "./templates/component/*.hbs",
                base: "./templates/component",
            },
            // ? create test file
            {
                type: "add",
                path: "../src/lib/components/{{ pascalCase name }}/__tests__/{{ pascalCase name }}.cy.tsx",
                templateFile: "./templates/component/__tests__/test.hbs",
            },
            // ? export from index
            {
                type: "modify",
                path: "../src/lib/index.ts",
                template:
                    'export * from "./components/{{ pascalCase name }}"\n$1',
                pattern: /(\/\/ prependHere)/g,
            },
            // ? export types from component-types
            {
                type: "modify",
                path: "../src/lib/types/components-props.ts",
                template:
                    'export * from "../components/{{ pascalCase name }}/types"\n$1',
                pattern: /(\/\/ prependHere)/g,
            },
            // ? create demo page
            {
                type: "add",
                path: "../src/pages/{{ category }}/{{ pascalCase name }}Page.tsx",
                templateFile: "./templates/page.hbs",
            },
            // ? import demo in routes
            {
                type: "modify",
                path: "../src/routes/index.tsx",
                template:
                    'import { {{ pascalCase name }}Page } from "../pages/{{ category }}/{{ pascalCase name }}Page"\n$1',
                pattern: /(\/\/ prependHere)/g,
            },
            // ? add demo to routes arr
            {
                type: "modify",
                path: "../src/routes/index.tsx",
                template:
                    '{ path: "/{{ kebabCase name }}", element: <{{ pascalCase name }}Page /> },\n$1',
                pattern: /(\/\/ prependRoute)/g,
            },
            // TODO: replace demo page by preview
        ],
    })

    setGenerator("preview", {
        description: "Component preview",
        prompts: [
            // ? name
            {
                type: "input",
                name: "name",
                message: "Enter component's name",
            },
            // ? category
            {
                type: "list",
                name: "category",
                message: "Which category?",
                choices: ["styles", "layouts", "components", "helpers"],
                default: "components",
            },
            {
                type: "confirm",
                name: "demo",
                message: "Generate only demo array",
                default: true,
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
                {
                    type: "add",
                    path: "../src/lib/components/{{ pascalCase name }}/__preview__/{{ pascalCase name }}.preview.tsx",
                    templateFile: data.demo
                        ? "./templates/__preview__/preview.hbs"
                        : "./templates/__preview__/preview-props.hbs",
                },
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
            ]

            return actions
        },
    })
}
