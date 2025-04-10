import type { NodePlopAPI } from "plop"

/**
 * Use as {{surroundBrackets "your text"}}
 */
export default (plop: NodePlopAPI) => {
    const { setHelper } = plop

    setHelper("surroundBrackets", text => {
        return `{{ ${text} }}`
    })
}
