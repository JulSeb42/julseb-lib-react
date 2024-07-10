/*=============================================== Paginator types ===============================================*/

import type { LibColorsHover, LibIcon } from "../../types"
import type { FlexboxProps } from "../Flexbox/types"

export interface PaginatorProps extends FlexboxProps {
    totalPages: number
    accentColor?: LibColorsHover
    isInputEditable?: boolean
    texts?: { page?: string; of?: string }
    icons?: { prev?: LibIcon; next?: LibIcon }
    iconSizes?: { prev?: number; next?: number }
    labels?: { prev?: string; next?: string; show?: boolean }
    queries?: Array<Array<string>>
}
