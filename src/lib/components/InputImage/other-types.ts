/*=============================================== Input images types not to be exported ===============================================*/

import type { LibIcon, LibValidationStatus } from "../../types"

export interface ContainerProps {
    "data-testid": string | undefined
    className: string | undefined
    validation: LibValidationStatus
    icon?: LibIcon
    iconSize?: number
}
