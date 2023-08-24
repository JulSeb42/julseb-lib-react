/*=============================================== All overlays ===============================================*/

import { OVERLAYS, cssVariables } from "../../lib"
import type { Variable } from "../types"

export const allOverlays: Variable[] = [
    {
        name: "Overlay Black 50",
        variable: "OVERLAYS.BLACK_50",
        css: OVERLAYS.BLACK_50,
        value: cssVariables.overlays["black-50"],
    },
    {
        name: "Overlay Black 80",
        variable: "OVERLAYS.BLACK_80",
        css: OVERLAYS.BLACK_80,
        value: cssVariables.overlays["black-80"],
    },
    {
        name: "Overlay White 50",
        variable: "OVERLAYS.WHITE_50",
        css: OVERLAYS.WHITE_50,
        value: cssVariables.overlays["white-50"],
    },
    {
        name: "Overlay White 80",
        variable: "OVERLAYS.WHITE_80",
        css: OVERLAYS.WHITE_80,
        value: cssVariables.overlays["white-80"],
    },
    {
        name: "Overlay Gradient black",
        variable: "OVERLAYS.GRADIENT_BLACK",
        css: OVERLAYS.GRADIENT_BLACK,
        value: cssVariables.overlays["gradient-black"],
    },
    {
        name: "Overlay Gradient white",
        variable: "OVERLAYS.GRADIENT_WHITE",
        css: OVERLAYS.GRADIENT_WHITE,
        value: cssVariables.overlays["gradient-white"],
    },
]
