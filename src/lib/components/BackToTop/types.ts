import type { ILibButtonIcon } from "../ButtonIcon/types"
import type { LibBackToTopPosition } from "../../types"

export type ILibBackToTop = Partial<ILibButtonIcon> & {
    position?: LibBackToTopPosition
}
