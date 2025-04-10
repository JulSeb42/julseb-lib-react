import type { LibColorsHover, LibIcon } from "../../types"
import type { ILibFlexbox } from "../Flexbox/types"

export interface ILibPaginator extends ILibFlexbox {
    totalPages: number
    accentColor?: LibColorsHover
    inputNotEditable?: boolean
    texts?: { page?: string; of?: string }
    icons?: { prev?: LibIcon; next?: LibIcon }
    iconSizes?: { prev?: number; next?: number }
    iconsBaseUrl?: string
    labels?: { prev?: string; next?: string; show?: boolean }
    queries?: Array<Array<string>>
}
