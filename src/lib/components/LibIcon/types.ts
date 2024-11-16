/*=============================================== LibIcon types ===============================================*/

import type { ILibIcon } from "../Icon/types"
import type { LibIcon as LibIconType } from "../../types"

export interface ILibLibIcon extends Omit<ILibIcon, "src"> {
    icon: LibIconType
    baseUrl: string | undefined
}
