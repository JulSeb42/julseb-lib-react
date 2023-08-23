/*=============================================== All overlays ===============================================*/

import { OVERLAYS } from "../../lib"

import type { Variable } from "../types"

export const allOverlays: Variable[] = [
    {
        name: "Plain Black 50",
        variable: "OVERLAYS.BLACK_50",
        css: OVERLAYS.BLACK_50,
        value: "rgba(0, 0, 0, 0.5)",
    },
    {
        name: "Plain Black 80",
        variable: "OVERLAYS.BLACK_80",
        css: OVERLAYS.BLACK_80,
        value: "rgba(0, 0, 0, 0.8)",
    },
    {
        name: "Plain White 50",
        variable: "OVERLAYS.WHITE_50",
        css: OVERLAYS.WHITE_50,
        value: "rgba(255, 255, 255, 0.5)",
    },
    {
        name: "Plain White 80",
        variable: "OVERLAYS.WHITE_80",
        css: OVERLAYS.WHITE_80,
        value: "rgba(255, 255, 255, 0.8)",
    },
    {
        name: "Gradient Black",
        variable: "OVERLAYS.GRADIENT_BLACK",
        css: OVERLAYS.GRADIENT_BLACK,
        value: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.56) 100%)",
    },
    {
        name: "Gradient White",
        variable: "OVERLAYS.GRADIENT_WHITE",
        css: OVERLAYS.GRADIENT_WHITE,
        value: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.35) 100%)",
    },
]
