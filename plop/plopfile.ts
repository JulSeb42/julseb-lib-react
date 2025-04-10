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

    previewGenerator(plop) // yarn plop:p
    componentGenerator(plop) // yarn plop:c
    subtypeGenerator(plop) // yarn plop:st
}
