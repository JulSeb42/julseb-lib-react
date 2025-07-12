import {
	BiBold,
	BiItalic,
	BiStrikethrough,
	BiUnderline,
	BiListUl,
	BiListOl,
	BiLink,
	BiSolidQuoteAltLeft,
	BiCode,
	BiCodeBlock,
	BiComment,
	BiImage,
} from "react-icons/bi"
import { IconSeparator, IconCode, IconLive, IconPreview } from "./icons"
import type {
	ReactElement,
	LibMdEditorViews,
	LibMdEditorTitles,
	LibMdEditorButtons,
} from "../../../types"

const DEFAULT_ICON_SIZE = 16

type LibMdButtonBase = {
	name: LibMdEditorViews | LibMdEditorTitles | LibMdEditorButtons
	displayName?: string
}

type LibMdButtonWithIcon = LibMdButtonBase & {
	defaultIcon: ReactElement
}

type LibMdButtonWithCode = LibMdButtonBase & {
	code: string
}

export const libMdButtons: Array<LibMdButtonWithIcon & LibMdButtonWithCode> = [
	{
		name: "bold",
		code: "** **",
		defaultIcon: <BiBold size={DEFAULT_ICON_SIZE} />,
	},
	{
		name: "italic",
		code: "* *",
		defaultIcon: <BiItalic size={DEFAULT_ICON_SIZE} />,
	},
	{
		name: "strikethrough",
		code: "~~ ~~",
		defaultIcon: <BiStrikethrough size={DEFAULT_ICON_SIZE} />,
	},
	{
		name: "underline",
		code: "<u> </u>",
		defaultIcon: <BiUnderline size={DEFAULT_ICON_SIZE} />,
	},
	{
		displayName: "Unordered list",
		name: "ul",
		code: "\n- ",
		defaultIcon: <BiListUl size={DEFAULT_ICON_SIZE} />,
	},
	{
		displayName: "Ordered list",
		name: "ol",
		code: "\n1. ",
		defaultIcon: <BiListOl size={DEFAULT_ICON_SIZE} />,
	},
	{
		name: "link",
		code: "[](URL here)",
		defaultIcon: <BiLink size={DEFAULT_ICON_SIZE} />,
	},
	{
		name: "quote",
		displayName: "Blockquote",
		code: "\n> ",
		defaultIcon: <BiSolidQuoteAltLeft size={DEFAULT_ICON_SIZE} />,
	},
	{
		displayName: "Separator",
		name: "hr",
		code: "\n\n---\n\n",
		defaultIcon: <IconSeparator size={DEFAULT_ICON_SIZE} />,
	},
	{
		name: "code",
		code: "``",
		defaultIcon: <BiCode size={DEFAULT_ICON_SIZE} />,
	},
	{
		displayName: "Code block",
		name: "codeBlock",
		code: "\n```\n\n```\n",
		defaultIcon: <BiCodeBlock size={DEFAULT_ICON_SIZE} />,
	},
	{
		name: "comment",
		code: "\n<!--  -->\n",
		defaultIcon: <BiComment size={DEFAULT_ICON_SIZE} />,
	},
	{
		name: "image",
		code: "![](https://example.com/your-image.png)",
		defaultIcon: <BiImage size={DEFAULT_ICON_SIZE} />,
	},
]

export const libMdViewButtons: Array<LibMdButtonWithIcon> = [
	{
		name: "code",
		defaultIcon: <IconCode size={DEFAULT_ICON_SIZE} />,
	},
	{
		name: "live",
		defaultIcon: <IconLive size={DEFAULT_ICON_SIZE} />,
	},
	{
		name: "preview",
		defaultIcon: <IconPreview size={DEFAULT_ICON_SIZE} />,
	},
]

export const libMdTitleButtons: Array<LibMdButtonWithCode> = [
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

export const getFontSizeButton = (tag: LibMdEditorTitles): number | null => {
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
