import { Text } from "../components/Text"
import { Table } from "../components/Table"
import type { LibMdEditorOptions } from "../types"
import type { Components } from "react-markdown"

export const libMarkdownComponents: Components = {
	h1: props => <Text tag="h1" {...(props as any)} />,
	h2: props => <Text tag="h2" {...(props as any)} />,
	h3: props => <Text tag="h3" {...(props as any)} />,
	h4: props => <Text tag="h4" {...(props as any)} />,
	h5: props => <Text tag="h5" {...(props as any)} />,
	h6: props => <Text tag="h6" {...(props as any)} />,
	p: props => <Text tag="p" {...(props as any)} />,
	small: props => <Text tag="small" {...(props as any)} />,
	strong: props => <Text tag="strong" {...(props as any)} />,
	em: props => <Text tag="em" {...(props as any)} />,
	blockquote: props => <Text tag="blockquote" {...(props as any)} />,
	ul: props => <Text tag="ul" {...(props as any)} />,
	ol: props => <Text tag="ol" {...(props as any)} />,
	dl: props => <Text tag="dl" {...(props as any)} />,
	table: props => <Table {...(props as any)} />,
}

export const libMarkdownEditorOptions: LibMdEditorOptions = {
	bold: true,
	italic: true,
	strikethrough: true,
	underline: true,
	ul: true,
	ol: true,
	link: true,
	quote: true,
	hr: true,
	code: true,
	codeBlock: true,
	comment: true,
	image: true,
	viewCode: true,
	viewLive: true,
	viewPreview: true,
	titles: true,
}
