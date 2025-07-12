import { type FC } from "react"
import { toSentenceCase } from "@julseb-lib/utils"
import { clsx } from "../../utils"
import { libMdButtons } from "./buttons/markdown-buttons"
import { ButtonIcon } from "../ButtonIcon"
import type { ILibMarkdownEditor } from "./types"
import type { ReactElement } from "../../types"

export const MarkdownButtons: FC<IMarkdownButtons> = ({
	options,
	icons,
	addCode,
}) => {
	return libMdButtons.map(button => {
		if (options && options[button.name as keyof typeof options] === false) {
			return null
		}

		const icon =
			icons && icons[button.name as keyof typeof icons]
				? icons[button.name as keyof typeof icons]
				: button.defaultIcon

		return (
			<ButtonIcon
				className={clsx("size-6", "md-button")}
				key={button.name}
				icon={icon as ReactElement}
				onClick={() => addCode(button.code)}
				tooltip={button.displayName ?? toSentenceCase(button.name)}
				aria-label={button.displayName ?? toSentenceCase(button.name)}
				variant="transparent"
				showTooltip={{ offset: "2xs" }}
			/>
		)
	})
}

interface IMarkdownButtons
	extends Pick<ILibMarkdownEditor, "options" | "icons"> {
	addCode: (code: string) => void
}
