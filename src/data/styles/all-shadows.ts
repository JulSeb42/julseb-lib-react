/*=============================================== All shadows ===============================================*/

import { SHADOWS, cssVariables } from "../../lib"
import type { Variable } from "../types"

export const allShadows: Variable[] = [
    {
        name: "XXL",
        variable: "SHADOWS.XXL",
        css: SHADOWS.XXL,
        value: cssVariables.shadows.xxl,
    },
    {
        name: "XL",
        variable: "SHADOWS.XL",
        css: SHADOWS.XL,
        value: cssVariables.shadows.xl,
    },
    {
        name: "L",
        variable: "SHADOWS.L",
        css: SHADOWS.L,
        value: cssVariables.shadows.l,
    },
    {
        name: "M",
        variable: "SHADOWS.M",
        css: SHADOWS.M,
        value: cssVariables.shadows.m,
    },
    {
        name: "S",
        variable: "SHADOWS.S",
        css: SHADOWS.S,
        value: cssVariables.shadows.s,
    },
    {
        name: "XS",
        variable: "SHADOWS.XS",
        css: SHADOWS.XS,
        value: cssVariables.shadows.xs,
    },
]
