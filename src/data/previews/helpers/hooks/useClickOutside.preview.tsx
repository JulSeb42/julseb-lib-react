import { useRef, useState } from "react"
import { useClickOutside, Button } from "../../../../lib"

export const PreviewUseClickOutside = () => {
	const [click, setClick] = useState<"nowhere" | "inside" | "outside">(
		"nowhere",
	)
	const ref = useRef<HTMLButtonElement>(null)
	useClickOutside(ref as any, () => setClick("outside"))

	return (
		<div>
			<Button ref={ref as any} onClick={() => setClick("inside")}>
				You clicked {click}
			</Button>
		</div>
	)
}
