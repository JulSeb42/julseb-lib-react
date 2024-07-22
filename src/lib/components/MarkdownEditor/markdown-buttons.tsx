/*=============================================== MarkdownEditor buttons ===============================================*/

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
} from "../../icons"
import {
    type LibMdEditorTitle,
    type LibMdEditorButton,
    type LibMdEditorEditor,
    type LibIcon,
    typeValues,
} from "../../types"

const ICON_SIZE = roundIconSize(16)

type ButtonBase = {
    name: LibMdEditorButton | LibMdEditorEditor | LibMdEditorTitle
    displayName?: string
}

type ButtonWithIcon = ButtonBase & {
    defaultIcon: LibIcon
}

type ButtonWithCode = ButtonBase & {
    code: string
}

export const mdButtons: Array<ButtonWithCode & ButtonWithIcon> = [
    {
        name: "bold",
        code: "** **",
        defaultIcon: <Bold size={ICON_SIZE} />,
    },
    {
        name: "italic",
        code: "* *",
        defaultIcon: <Italic size={ICON_SIZE} />,
    },
    {
        name: "strikethrough",
        code: "~~ ~~",
        defaultIcon: <Strikethrough size={ICON_SIZE} />,
    },
    {
        displayName: "unordered list",
        name: "ul",
        code: "- ",
        defaultIcon: <UnorderedList size={ICON_SIZE} />,
    },
    {
        displayName: "ordered-list",
        name: "ol",
        code: "1. ",
        defaultIcon: <OrderedList size={ICON_SIZE} />,
    },
    {
        name: "link",
        code: "[](URL here)",
        defaultIcon: <Link size={ICON_SIZE} />,
    },
    {
        name: "quote",
        displayName: "blockquote",
        code: "> ",
        defaultIcon: <Quote size={ICON_SIZE} />,
    },
    {
        name: "hr",
        code: "\n\n---\n\n",
        defaultIcon: <Separator size={ICON_SIZE} />,
    },
    {
        name: "code",
        code: "``",
        defaultIcon: <Code size={ICON_SIZE} />,
    },
    {
        displayName: "code block",
        name: "codeBlock",
        code: "```\n\n```",
        defaultIcon: <CodeBlock size={ICON_SIZE} />,
    },
    {
        name: "comment",
        code: "<!--  -->",
        defaultIcon: <Comment size={ICON_SIZE} />,
    },
    {
        name: "image",
        code: "![](https://example.com/your-image.png)",
        defaultIcon: <Image size={ICON_SIZE} />,
    },
]

export const mdEditorButtons: Array<ButtonWithIcon> = [
    {
        name: "editorCode",
        defaultIcon: <EditorCode size={ICON_SIZE} />,
    },
    {
        name: "editorLive",
        defaultIcon: <EditorLive size={ICON_SIZE} />,
    },
    {
        name: "editorPreview",
        defaultIcon: <EditorPreview size={ICON_SIZE} />,
    },
]

export const mdTitlesButtons: Array<ButtonBase & ButtonWithCode> = [
    {
        displayName: "Title 1",
        name: "h1",
        code: "# ",
    },
    {
        displayName: "Title 2",
        name: "h2",
        code: "## ",
    },
    {
        displayName: "Title 3",
        name: "h3",
        code: "### ",
    },
    {
        displayName: "Title 4",
        name: "h4",
        code: "#### ",
    },
    {
        displayName: "Title 5",
        name: "h5",
        code: "##### ",
    },
    {
        displayName: "Title 6",
        name: "h6",
        code: "###### ",
    },
]

export const titleNames = Object.keys(typeValues.markdownEditorTitles)

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
