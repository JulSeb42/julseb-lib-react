/*=============================================== Plopfile ===============================================*/

import { NodePlopAPI } from "plop"
import {
    previewGenerator,
    componentGenerator,
    subtypeGenerator,
} from "./generators"
import chalk from "chalk"
import figlet from "figlet"

export default (plop: NodePlopAPI) => {
    console.log(
        chalk.blueBright(
            figlet.textSync("JulSeb CLI", { horizontalLayout: "full" })
        )
    )

    previewGenerator(plop)
    componentGenerator(plop)
    subtypeGenerator(plop)
}
