/*=============================================== All radiuses ===============================================*/

import { RADIUSES, cssVariables } from "../../lib"
import type { Variable } from "../types"

export const allRadiuses: Array<Variable> = [
    {
        name: "XXL",
        variable: "RADIUSES.XXL",
        css: RADIUSES.XXL,
        value: cssVariables.radiuses.xxl,
    },
    {
        name: "XL",
        variable: "RADIUSES.XL",
        css: RADIUSES.XL,
        value: cssVariables.radiuses.xl,
    },
    {
        name: "L",
        variable: "RADIUSES.L",
        css: RADIUSES.L,
        value: cssVariables.radiuses.l,
    },
    {
        name: "M",
        variable: "RADIUSES.M",
        css: RADIUSES.M,
        value: cssVariables.radiuses.m,
    },
    {
        name: "S",
        variable: "RADIUSES.S",
        css: RADIUSES.S,
        value: cssVariables.radiuses.s,
    },
    {
        name: "XS",
        variable: "RADIUSES.XS",
        css: RADIUSES.XS,
        value: cssVariables.radiuses.xs,
    },
    {
        name: "Round",
        variable: "RADIUSES.ROUND",
        css: RADIUSES.ROUND,
        value: cssVariables.radiuses.round,
    },
    {
        name: "Circle",
        variable: "RADIUSES.CIRCLE",
        css: RADIUSES.CIRCLE,
        value: cssVariables.radiuses.circle,
    },
]
