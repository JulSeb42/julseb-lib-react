/*=============================================== Options markdown container ===============================================*/

import { Text } from "../components/Text"
import { Table } from "../components/Table"
import type { LibMarkdownEditorOptions } from "../types"

export const optionsMarkdown = {
    forceBlock: true,
    wrapper: "div",
    overrides: {
        h1: {
            component: Text,
            props: {
                tag: "h1",
            },
        },

        h2: {
            component: Text,
            props: {
                tag: "h2",
            },
        },

        h3: {
            component: Text,
            props: {
                tag: "h3",
            },
        },

        h4: {
            component: Text,
            props: {
                tag: "h4",
            },
        },

        h5: {
            component: Text,
            props: {
                tag: "h5",
            },
        },

        h6: {
            component: Text,
            props: {
                tag: "h6",
            },
        },

        p: {
            component: Text,
            props: {
                tag: "p",
            },
        },

        strong: {
            component: Text,
            props: {
                tag: "strong",
            },
        },

        em: {
            component: Text,
            props: {
                tag: "em",
            },
        },

        ul: {
            component: Text,
            props: {
                tag: "ul",
            },
        },

        ol: {
            component: Text,
            props: {
                tag: "ol",
            },
        },

        dl: {
            component: Text,
            props: {
                tag: "dl",
            },
        },

        small: {
            component: Text,
            props: {
                tag: "small",
            },
        },

        blockquote: {
            component: Text,
            props: {
                tag: "blockquote",
            },
        },

        table: {
            component: Table,
        },
    },
}

export const markdownEditorOptions: LibMarkdownEditorOptions = {
    bold: true,
    italic: true,
    strikethrough: true,
    ul: true,
    ol: true,
    link: true,
    quote: true,
    hr: true,
    code: true,
    codeBlock: true,
    comment: true,
    image: true,
    editorCode: true,
    editorLive: true,
    editorPreview: true,
    titles: true,
}
