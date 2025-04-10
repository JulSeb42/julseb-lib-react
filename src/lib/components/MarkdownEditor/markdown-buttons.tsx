import { roundIconSize } from "../../lib-utils"
import {
    Bold,
    Italic,
    Strikethrough,
    UnorderedList,
    OrderedList,
    Link,
    Quote,
    Separator,
    Code,
    CodeBlock,
    Comment,
    Image,
    EditorCode,
    EditorLive,
    EditorPreview,
    Underline,
} from "../../icons"
import type {
    LibMdEditorTitle,
    LibMdEditorButton,
    LibMdEditorEditor,
    LibIcon,
} from "../../types"

const DEFAULT_ICON_SIZE = roundIconSize(24)

export type ButtonBase = {
    name: LibMdEditorButton | LibMdEditorEditor | LibMdEditorTitle
    displayName?: string
}

export type ButtonWithIcon = ButtonBase & {
    defaultIcon: LibIcon
}

export type ButtonWithCode = ButtonBase & {
    code: string
}

export const mdButtons: Array<ButtonWithCode & ButtonWithIcon> = [
    {
        name: "bold",
        code: "** **",
        defaultIcon: <Bold size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "italic",
        code: "* *",
        defaultIcon: <Italic size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "strikethrough",
        code: "~~ ~~",
        defaultIcon: <Strikethrough size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "underline",
        code: "<u> </u>",
        defaultIcon: <Underline size={DEFAULT_ICON_SIZE} />,
    },
    {
        displayName: "Unordered list",
        name: "ul",
        code: "\n- ",
        defaultIcon: <UnorderedList size={DEFAULT_ICON_SIZE} />,
    },
    {
        displayName: "Ordered list",
        name: "ol",
        code: "\n1. ",
        defaultIcon: <OrderedList size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "link",
        code: "[](URL here)",
        defaultIcon: <Link size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "quote",
        displayName: "Blockquote",
        code: "\n> ",
        defaultIcon: <Quote size={DEFAULT_ICON_SIZE} />,
    },
    {
        displayName: "Separator",
        name: "hr",
        code: "\n\n---\n\n",
        defaultIcon: <Separator size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "code",
        code: "``",
        defaultIcon: <Code size={DEFAULT_ICON_SIZE} />,
    },
    {
        displayName: "Code block",
        name: "codeBlock",
        code: "\n```\n\n```\n",
        defaultIcon: <CodeBlock size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "comment",
        code: "\n<!--  -->\n",
        defaultIcon: <Comment size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "image",
        code: "![](https://example.com/your-image.png)",
        defaultIcon: <Image size={DEFAULT_ICON_SIZE} />,
    },
]

export const mdEditorButtons: Array<ButtonWithIcon> = [
    {
        name: "editorCode",
        defaultIcon: <EditorCode size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "editorLive",
        defaultIcon: <EditorLive size={DEFAULT_ICON_SIZE} />,
    },
    {
        name: "editorPreview",
        defaultIcon: <EditorPreview size={DEFAULT_ICON_SIZE} />,
    },
]

export const mdTitlesButtons: Array<ButtonBase & ButtonWithCode> = [
    {
        displayName: "Title 1",
        name: "h1",
        code: "\n# ",
    },
    {
        displayName: "Title 2",
        name: "h2",
        code: "\n## ",
    },
    {
        displayName: "Title 3",
        name: "h3",
        code: "\n### ",
    },
    {
        displayName: "Title 4",
        name: "h4",
        code: "\n#### ",
    },
    {
        displayName: "Title 5",
        name: "h5",
        code: "\n##### ",
    },
    {
        displayName: "Title 6",
        name: "h6",
        code: "\n###### ",
    },
]

export function getFontSizeButton(tag: LibMdEditorTitle): number | null {
    switch (tag) {
        case "h1":
            return 17
        case "h2":
            return 16
        case "h3":
            return 15
        case "h4":
            return 14
        case "h5":
            return 13
        case "h6":
            return 12
        default:
            return null
    }
}
