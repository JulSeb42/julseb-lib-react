/*=============================================== All shadows ===============================================*/

import { SHADOWS, LIB_TOKENS } from "../../lib"
import type { Variable } from "../types"

export const allShadows: Array<Variable> = [
    {
        name: "XXL",
        variable: "SHADOWS.XXL",
        css: SHADOWS.XXL,
        value: LIB_TOKENS.shadows.xxl,
    },
    {
        name: "XL",
        variable: "SHADOWS.XL",
        css: SHADOWS.XL,
        value: LIB_TOKENS.shadows.xl,
    },
    {
        name: "L",
        variable: "SHADOWS.L",
        css: SHADOWS.L,
        value: LIB_TOKENS.shadows.l,
    },
    {
        name: "M",
        variable: "SHADOWS.M",
        css: SHADOWS.M,
        value: LIB_TOKENS.shadows.m,
    },
    {
        name: "S",
        variable: "SHADOWS.S",
        css: SHADOWS.S,
        value: LIB_TOKENS.shadows.s,
    },
    {
        name: "XS",
        variable: "SHADOWS.XS",
        css: SHADOWS.XS,
        value: LIB_TOKENS.shadows.xs,
    },
]
