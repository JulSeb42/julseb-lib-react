/*=============================================== All radiuses ===============================================*/

import { RADIUSES } from "../../lib"

import type { Variable } from "../types"

export const allRadiuses: Variable[] = [
    {
        name: "XXL",
        variable: "RADIUSES.XXL",
        css: RADIUSES.XXL,
        value: "24px",
    },
    {
        name: "XL",
        variable: "RADIUSES.XL",
        css: RADIUSES.XL,
        value: "16px",
    },
    {
        name: "L",
        variable: "RADIUSES.L",
        css: RADIUSES.L,
        value: "12px",
    },
    { name: "M", variable: "RADIUSES.M", css: RADIUSES.M, value: "8px" },
    { name: "S", variable: "RADIUSES.S", css: RADIUSES.S, value: "4px" },
    {
        name: "XS",
        variable: "RADIUSES.XS",
        css: RADIUSES.XS,
        value: "2px",
    },
    {
        name: "Round",
        variable: "RADIUSES.ROUND",
        css: RADIUSES.ROUND,
        value: "99em",
    },
    {
        name: "Circle",
        variable: "RADIUSES.CIRCLE",
        css: RADIUSES.CIRCLE,
        value: "50%",
    },
]
