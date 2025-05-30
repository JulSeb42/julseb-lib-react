import { CodeContainer } from "../../../lib"
import type { ComponentPreview } from "../../components"

const optionsMarkdown = {
    forceBlock: true,
    wrapper: "div",
    overrides: {
        h1: {
            component: "Text",
            props: { tag: "h1" },
        },

        h2: {
            component: "Text",
            props: { tag: "h2" },
        },

        h3: {
            component: "Text",
            props: { tag: "h3" },
        },

        h4: {
            component: "Text",
            props: { tag: "h4" },
        },

        h5: {
            component: "Text",
            props: { tag: "h5" },
        },

        h6: {
            component: "Text",
            props: { tag: "h6" },
        },

        p: {
            component: "Text",
            props: { tag: "p" },
        },

        strong: {
            component: "Text",
            props: { tag: "strong" },
        },

        em: {
            component: "Text",
            props: { tag: "em" },
        },

        ul: {
            component: "Text",
            props: { tag: "ul" },
        },

        ol: {
            component: "Text",
            props: { tag: "ol" },
        },

        dl: {
            component: "Text",
            props: { tag: "dl" },
        },

        small: {
            component: "Text",
            props: { tag: "small" },
        },

        blockquote: {
            component: "Text",
            props: { tag: "blockquote" },
        },

        table: {
            component: "Table",
        },
    },
}

export const optionsMarkdownPreview: ComponentPreview<null> = {
    name: "OptionsMarkdown",
    category: "helpers",
    component: null,
    import: "optionsMarkdown",
    additionalImports: null,
    optionalImports: null,
    propsImport: null,
    additionalTypeImports: null,
    extends: null,
    previews: [
        {
            demo: (
                <CodeContainer highlighterProps={{ language: "typescript" }}>
                    {JSON.stringify(optionsMarkdown, null, "  ").replaceAll(
                        '],\n  "',
                        '],\n\n  "'
                    )}
                </CodeContainer>
            ),
        },
    ],
}
