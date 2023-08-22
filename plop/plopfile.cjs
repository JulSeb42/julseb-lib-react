/*=============================================== Plopfile ===============================================*/

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
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
                default: "styles",
            },
            // ? tag
            {
                type: "input",
                name: "tag",
                message: "Enter HTML tag",
            },
            // ? HTMLAttribute => HTMLDivElement
            {
                type: "input",
                name: "attribute",
                message: "Enter HTML attribute",
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
                path: "../src/lib/types/components-types.ts",
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
                    'import { {{ pascalCase name }}Page } from "../pages/{{ category }}/{{ pascalCase name }}Page.tsx"\n$1',
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
        ],
    })
}
