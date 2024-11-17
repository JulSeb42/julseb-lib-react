/*=============================================== Add Closing Brackets ===============================================*/

import type { NodePlopAPI } from "plop"

/**
 * Use as {{addClosingBrackets}}
 */

export default (plop: NodePlopAPI) => {
    const { setHelper } = plop

    setHelper("addClosingBrackets", () => {
        return `}}`
    })
}
