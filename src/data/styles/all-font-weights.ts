import type { Variable } from "../types"

export const allFontWeights: Array<Variable> = [
    {
        name: "Regular",
        variable: "FontWeights.Regular",
        css: "var(--font-weight-regular)",
        value: 400,
    },
    {
        name: "Bold",
        variable: "FontWeights.Bold",
        css: "var(--font-weight-bold)",
        value: 700,
    },
    {
        name: "Black",
        variable: "FontWeights.Black",
        css: "var(--font-weight-black)",
        value: 900,
    },
]
