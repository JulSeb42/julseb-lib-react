/*=============================================== Subtype ===============================================*/

import type { NodePlopAPI } from "plop"
import { allComponents } from "./all-components"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("subtype", {
        description: "Generates a sub-types.ts file for selected component",
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
