import type { Variable } from "../types"

export const allLayouts: Array<Variable & { valueTablet: string }> = [
    {
        name: "Main default",
        variable: "Layouts.Main.Default",
        css: "var(--main-default)",
        value: "600px",
        valueTablet: "100%",
    },
    {
        name: "Main large",
        variable: "Layouts.Main.Large",
        css: "var(--main-large)",
        value: "800px",
        valueTablet: "100%",
    },
    {
        name: "Main form",
        variable: "Layouts.Main.Form",
        css: "var(--main-form)",
        value: "400px",
        valueTablet: "100%",
    },
    {
        name: "Aside default",
        variable: "Layouts.Aside.Default",
        css: "var(--aside-default)",
        value: "250px",
        valueTablet: "100%",
    },
    {
        name: "Aside small",
        variable: "Layouts.Aside.Small",
        css: "var(--aside-small)",
        value: "200px",
        valueTablet: "100%",
    },
    {
        name: "Wrapper 1 col",
        variable: "Layouts.Wrapper.OneCol",
        css: "var(--wrapper-1-col)",
        value: "1fr auto 1fr",
        valueTablet: "5vw 1fr 5vw",
    },
    {
        name: "Wrapper 2 cols",
        variable: "Layouts.Wrapper.TwoCols",
        css: "var(--wrapper-2-cols)",
        value: "1fr auto auto 1fr",
        valueTablet: "5vw 1fr 5vw",
    },
    {
        name: "Wrapper 3 cols",
        variable: "Layouts.Wrapper.ThreeCols",
        css: "var(--wrapper-3-cols)",
        value: "1fr auto auto auto 1fr",
        valueTablet: "5vw 1fr 5vw",
    },
]
