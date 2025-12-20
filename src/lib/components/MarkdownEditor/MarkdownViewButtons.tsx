import { type FC } from "react"
import { toSentenceCase } from "@julseb-lib/utils"
import { clsx } from "../../utils"
import { ButtonIcon } from "../ButtonIcon"
import { libMdViewButtons } from "./buttons/markdown-buttons"
import type { DispatchState, LibMdEditorViews, ReactElement } from "../../types"
import type { ILibMarkdownEditor } from "./types"

export const MarkdownViewButtons: FC<IMarkdownViewButtons> = ({
	options,
	icons,
	view,
	setView,
}) => {
	return libMdViewButtons.map(button => {
		if (options && options[button.name as keyof typeof options] === false) {
			return null
		}

		const icon =
			icons && icons[button.name as keyof typeof icons]
				? icons[button.name as keyof typeof icons]
				: button.defaultIcon

		return (
			<ButtonIcon
				key={button.name}
				className={clsx(
					"size-6",
					view === button.name && "",
					"button-view",
				)}
				variant={view === button.name ? "plain" : "transparent"}
				icon={icon as ReactElement}
				onClick={() => setView(button.name as LibMdEditorViews)}
				aria-label={button.displayName ?? toSentenceCase(button.name)}
				tooltip={button.displayName ?? toSentenceCase(button.name)}
				showTooltip={{ offset: "2xs" }}
			/>
		)
	})
}

interface IMarkdownViewButtons extends Pick<
	ILibMarkdownEditor,
	"options" | "icons"
> {
	view: LibMdEditorViews
	setView: DispatchState<LibMdEditorViews>
}
