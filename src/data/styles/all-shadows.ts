/*=============================================== All shadows ===============================================*/

import { SHADOWS, libTokens } from "../../lib"
import type { Variable } from "../types"

export const allShadows: Array<Variable> = [
    {
        name: "XXL",
        variable: "SHADOWS.XXL",
        css: SHADOWS.XXL,
        value: libTokens.shadows.xxl,
    },
    {
        name: "XL",
        variable: "SHADOWS.XL",
        css: SHADOWS.XL,
        value: libTokens.shadows.xl,
    },
    {
        name: "L",
        variable: "SHADOWS.L",
        css: SHADOWS.L,
        value: libTokens.shadows.l,
    },
    {
        name: "M",
        variable: "SHADOWS.M",
        css: SHADOWS.M,
        value: libTokens.shadows.m,
    },
    {
        name: "S",
        variable: "SHADOWS.S",
        css: SHADOWS.S,
        value: libTokens.shadows.s,
    },
    {
        name: "XS",
        variable: "SHADOWS.XS",
        css: SHADOWS.XS,
        value: libTokens.shadows.xs,
    },
]
