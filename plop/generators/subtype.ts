import type { NodePlopAPI } from "plop"
import { allComponents } from "../utils"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("subtype", {
        description: "Generates a subtypes.ts file for selected component",
        prompts: [
            {
                name: "name",
                message: "Select your component",
                type: "list",
                choices: allComponents,
            },
        ],
        actions: [
            {
                type: "add",
                path: "../src/lib/components/{{ pascalCase name }}/subtypes.ts",
                templateFile: "./templates/subtypes.hbs",
            },
        ],
    })
}
