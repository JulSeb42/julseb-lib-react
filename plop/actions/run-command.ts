/*=============================================== Run command action ===============================================*/

import type { NodePlopAPI } from "plop"
import { exec } from "child_process"

export default (plop: NodePlopAPI) => {
    const { setActionType } = plop

    setActionType(
        "runCommand",
        (_, config) =>
            new Promise((resolve, reject) => {
                exec(config.command, (error, stdout) => {
                    if (error) {
                        console.error(error.message)
                        reject(error)
                    }

                    resolve(stdout)
                })
            })
    )
}
