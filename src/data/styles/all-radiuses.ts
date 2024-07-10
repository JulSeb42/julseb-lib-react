/*=============================================== All radiuses ===============================================*/

import { RADIUSES, libTokens } from "../../lib"
import type { Variable } from "../types"

export const allRadiuses: Array<Variable> = [
    {
        name: "XXL",
        variable: "RADIUSES.XXL",
        css: RADIUSES.XXL,
        value: libTokens.radiuses.xxl,
    },
    {
        name: "XL",
        variable: "RADIUSES.XL",
        css: RADIUSES.XL,
        value: libTokens.radiuses.xl,
    },
    {
        name: "L",
        variable: "RADIUSES.L",
        css: RADIUSES.L,
        value: libTokens.radiuses.l,
    },
    {
        name: "M",
        variable: "RADIUSES.M",
        css: RADIUSES.M,
        value: libTokens.radiuses.m,
    },
    {
        name: "S",
        variable: "RADIUSES.S",
        css: RADIUSES.S,
        value: libTokens.radiuses.s,
    },
    {
        name: "XS",
        variable: "RADIUSES.XS",
        css: RADIUSES.XS,
        value: libTokens.radiuses.xs,
    },
    {
        name: "Round",
        variable: "RADIUSES.ROUND",
        css: RADIUSES.ROUND,
        value: libTokens.radiuses.round,
    },
    {
        name: "Circle",
        variable: "RADIUSES.CIRCLE",
        css: RADIUSES.CIRCLE,
        value: libTokens.radiuses.circle,
    },
]
