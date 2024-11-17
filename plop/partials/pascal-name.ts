/*=============================================== Name to PascalCase ===============================================*/

import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setPartial } = plop

    setPartial("pascalName", "{{ pascalCase name }}")
}
