import { useRef, type FC, type MouseEvent } from "react"
import { clsx } from "../../utils"
import { Button } from "../Button"
import { useClickOutside } from "../../hooks"
import {
	getFontSizeButton,
	libMdTitleButtons,
} from "./buttons/markdown-buttons"
import type { ILibMarkdownEditor } from "./types"
import type { DispatchState } from "../../types"

export const MarkdownEditorTitles: FC<IMarkdownEditorTitles> = ({
	options,
	textButtonTitles,
	addCode,
	inputBackground,
	isOpen,
	setIsOpen,
}) => {
	if (options?.titles === false) return null

	const el = useRef<HTMLDivElement>(null)
	useClickOutside(el as any, () => setIsOpen(false))

	return (
		<div className={clsx("relative", "dropdown-container")} ref={el}>
			<Button
				className={clsx("", "button-titles")}
				onClick={(e: MouseEvent<HTMLButtonElement>) => {
					e.stopPropagation()
					setIsOpen(!isOpen)
				}}
				size="small"
				variant="transparent"
			>
				{textButtonTitles}
			</Button>

			<div
				className={clsx(
					"left-2 absolute flex flex-col rounded-md w-fit min-w-37.5 overflow-hidden font-bold transition-all duration-200 ease-in-out",
					inputBackground === "dark"
						? "bg-black text-white"
						: inputBackground === "light"
							? "bg-white"
							: "bg-background",
					isOpen && "open",
					"max-h-0 [&.open]:max-h-44.75 [&.open]:shadow-sm",
					"titles-dropdown",
				)}
			>
				{libMdTitleButtons.map(button => (
					<button
						key={button.name}
						className={clsx(
							"px-2 py-1 w-full text-left whitespace-nowrap",
							"hover:bg-primary-300 active:bg-primary-600 hover:text-white",
							"title-button",
						)}
						onClick={() => {
							addCode(button.code)
							setIsOpen(false)
						}}
						style={{
							fontSize: getFontSizeButton(
								button.name as any,
							) as number,
						}}
					>
						{button.displayName ?? button.name}
					</button>
				))}
			</div>
		</div>
	)
}

interface IMarkdownEditorTitles extends Pick<
	ILibMarkdownEditor,
	"options" | "textButtonTitles" | "inputBackground"
> {
	addCode: (code: string) => void
	isOpen: boolean
	setIsOpen: DispatchState<boolean>
}
