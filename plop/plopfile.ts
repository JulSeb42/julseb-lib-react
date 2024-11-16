/*=============================================== Plopfile ===============================================*/

import { NodePlopAPI } from "plop"
import {
    previewGenerator,
    componentGenerator,
    subtypeGenerator,
} from "./generators"

export default (plop: NodePlopAPI) => {
    componentGenerator(plop)
    previewGenerator(plop)
    componentGenerator(plop)
    subtypeGenerator(plop)
}
