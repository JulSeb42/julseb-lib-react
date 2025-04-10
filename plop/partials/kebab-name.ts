import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setPartial } = plop

    setPartial("kebabName", "{{ kebabCase name }}")
}
