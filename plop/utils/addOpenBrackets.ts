import type { NodePlopAPI } from "plop"

/**
 * Use as {{addOpenBrackets}}
 */

export default (plop: NodePlopAPI) => {
    const { setHelper } = plop

    setHelper("addOpenBrackets", () => {
        return `{{`
    })
}
