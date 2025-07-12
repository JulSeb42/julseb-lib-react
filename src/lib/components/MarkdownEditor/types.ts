import type {
	DispatchState,
	LibComponentBase,
	LibMdEditorViews,
	LibMdEditorOptions,
	ReactElement,
} from "../../types"
import type {
	ILibInputCommon,
	ILibInputWithValidation,
} from "../InputComponents"

export type ILibMarkdownEditor = Omit<
	LibComponentBase<HTMLTextAreaElement>,
	"element"
> &
	Omit<ILibInputCommon, "inputVariant"> &
	ILibInputWithValidation & {
		value: string
		setValue: DispatchState<string>
		onChange?: never
		defaultView?: LibMdEditorViews
		options?: LibMdEditorOptions
		textButtonTitles?: string
		icons?: {
			bold?: ReactElement
			italic?: ReactElement
			strikethrough?: ReactElement
			ul?: ReactElement
			ol?: ReactElement
			link?: ReactElement
			quote?: ReactElement
			hr?: ReactElement
			code?: ReactElement
			codeBlock?: ReactElement
			comment?: ReactElement
			image?: ReactElement
			editorCode?: ReactElement
			editorLive?: ReactElement
			editorPreview?: ReactElement
		}
	}
