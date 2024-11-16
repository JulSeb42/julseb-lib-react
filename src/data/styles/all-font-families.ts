import type { Variable } from "../types"

export const allFontFamilies: Array<Variable> = [
    {
        name: "Font family body",
        variable: "FontFamilies.Body",
        css: "var(--font-family-body)",
        value: '"Lato", sans-serif',
    },
    {
        name: "Font family code",
        variable: "FontFamilies.Code",
        css: "var(--font-family-code)",
        value: "monospace",
    },
]
