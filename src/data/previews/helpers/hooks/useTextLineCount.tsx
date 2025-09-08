import { useState } from "react"
import { clsx, Input, useTextLineCount } from "../../../../lib"

export const PreviewUseTextLineCount = () => {
	const [text, setText] = useState("")
	const { visualLines, elementRef } = useTextLineCount(text)

	return (
		<Input
			type="textarea"
			placeholder="Type your comment here"
			className={clsx(
				"px-4 w-[calc(100%-32px-8px)] min-h-[30px] max-h-[150px] overflow-y-scroll resize-none",
				visualLines > 1 ? "rounded-2xl" : "rounded-full",
			)}
			value={text}
			onChange={e => setText(e.target.value)}
			ref={elementRef as any}
		/>
	)
}
