import { useState, useRef, type FC } from "react"
import Markdown from "markdown-to-jsx"
import { InputContainer } from "../InputContainer"
import { MarkdownEditorTitles } from "./MarkdownEditorTitles"
import { MarkdownButtons } from "./MarkdownButtons"
import { MarkdownViewButtons } from "./MarkdownViewButtons"
import { useMergeRefs } from "../../hooks"
import { clsx, libOptionsMarkdown } from "../../utils"
import type { ILibMarkdownEditor } from "./types"
import type { LibMdEditorViews } from "../../types"

/**
 * MarkdownEditor component for creating rich text content with live preview and customizable toolbar.
 *
 * @component
 *
 * @example
 * <MarkdownEditor
 *   value={content}
 *   setValue={setContent}
 *   label="Article Content"
 *   defaultView="live"
 *   options={{
 *     bold: true,
 *     italic: true,
 *     code: true,
 *     editorPreview: true
 *   }}
 * />
 *
 * @extends HTMLTextAreaElement
 *
 * @prop {string} [props.className] - Additional CSS classes to apply to the textarea.
 * @prop {React.Ref<HTMLTextAreaElement>} [props.ref] - Ref to the textarea element.
 * @prop {string} [props.value] - Current markdown content value.
 * @prop {function} [props.setValue] - Function to update the markdown content.
 * @prop {string} [props.label] - Label text for the editor.
 * @prop {string} [props.labelComment] - Additional comment text for the label.
 * @prop {string} [props.helper] - Helper text displayed above the editor.
 * @prop {string} [props.helperBottom] - Helper text displayed below the editor.
 * @prop {LibValidation} [props.validation] - Validation state and messages.
 * @prop {"light" | "dark"} [props.inputBackground] - Background theme for the editor.
 * @prop {string} [props.id] - HTML id attribute for the textarea.
 * @prop {"code" | "live" | "preview"} [props.defaultView="live"] - Initial view mode for the editor.
 * @prop {LibMarkdownEditorOptions} [props.options] - Configuration for which toolbar buttons to show.
 * @prop {string} [props.textButtonTitles="Titles"] - Text for the titles dropdown button.
 * @prop {object} [props.icons] - Custom icons for toolbar buttons.
 * @prop {string} [containerClassName] - Additional CSS classes for the container.
 *
 * @returns {JSX.Element} The rendered MarkdownEditor component.
 *
 * @see https://doc-julseb-lib-react.vercel.app/components/markdown-editor
 */
export const MarkdownEditor: FC<ILibMarkdownEditor> = ({
	className,
	ref,
	value,
	setValue,
	label,
	labelComment,
	helper,
	helperBottom,
	validation,
	inputBackground,
	id,
	defaultView = "live",
	options,
	textButtonTitles = "Titles",
	icons,
	containerClassName,
	...rest
}) => {
	const [view, setView] = useState<LibMdEditorViews>(defaultView)
	const [isTitlesOpen, setIsTitlesOpen] = useState(false)

	const el = useRef<HTMLTextAreaElement>(null)

	const addCode = (code: string) => {
		setValue(`${value}${code}`)
		el?.current?.focus()
	}

	return (
		<InputContainer
			label={label}
			labelComment={labelComment}
			helper={helper}
			helperBottom={helperBottom}
			validation={validation}
			hasListOpen={isTitlesOpen}
			className={containerClassName}
		>
			<div
				className={clsx(
					"border border-gray-200 rounded-lg w-full",
					isTitlesOpen && "z-20",
					inputBackground === "dark"
						? "bg-black text-white"
						: inputBackground === "light"
							? "bg-white text-black"
							: "bg-background text-font",
					validation?.status === false && "bg-danger-50 text-black",
					"has-[textarea:focus]:border-primary-500",
					"md-editor-wrapper",
				)}
			>
				<div
					className={clsx(
						"flex justify-between gap-2 p-2 border-b border-b-gray-200",
						"md-buttons-container",
					)}
				>
					<div
						className={clsx(
							"flex items-center gap-2",
							"md-buttons",
						)}
					>
						<MarkdownEditorTitles
							options={options}
							textButtonTitles={textButtonTitles}
							addCode={addCode}
							inputBackground={inputBackground}
							isOpen={isTitlesOpen}
							setIsOpen={setIsTitlesOpen}
						/>

						<MarkdownButtons
							options={options}
							icons={icons}
							addCode={addCode}
						/>
					</div>

					<div className={clsx("flex gap-1", "md-views")}>
						<MarkdownViewButtons
							options={options}
							icons={icons}
							view={view}
							setView={setView}
						/>
					</div>
				</div>

				<div
					className={clsx(
						"grid min-h-[150px]",
						view === "live"
							? "grid-cols-[1fr_2px_1fr]"
							: "grid-cols-1",
						"md-editor-content",
					)}
				>
					<textarea
						ref={useMergeRefs([ref, el])}
						className={clsx(
							"p-2 outline-none h-fit field-sizing-content resize-none",
							view === "preview" && "hidden",
							"md-editor-input",
							className,
						)}
						value={value}
						onChange={e => setValue(e.target.value)}
						id={id}
						{...rest}
					/>

					{view === "live" && (
						<span
							className={clsx(
								"bg-gray-200 w-0.5 h-full",
								"separator",
							)}
						/>
					)}

					{(view === "live" || view === "preview") && (
						<Markdown
							options={libOptionsMarkdown}
							className={clsx("p-2", "md-editor-markdown")}
						>
							{value}
						</Markdown>
					)}
				</div>
			</div>
		</InputContainer>
	)
}
