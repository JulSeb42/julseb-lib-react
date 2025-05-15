import { NodePlopAPI } from "plop"
import {
	generatorGenerator,
	previewGenerator,
	componentGenerator,
	subtypeGenerator,
	generateDemo,
	/* Prepend import - DO NOT REMOVE */
} from "./generators"
import { kebabName, pascalName } from "./partials"
import chalk from "chalk"
import figlet from "figlet"

export default (plop: NodePlopAPI) => {
	console.log(
		chalk.blueBright(
			figlet.textSync("JulSeb CLI", { horizontalLayout: "full" }),
		),
	)

	// Partials
	kebabName(plop)
	pascalName(plop)

	// Generators
	generatorGenerator(plop) // yarn plop:g
	previewGenerator(plop) // yarn plop:p
	componentGenerator(plop) // yarn plop:c
	subtypeGenerator(plop) // yarn plop:st
	generateDemo(plop) // yarn plop:d
	/* Prepend function - DO NOT REMOVE */
}
