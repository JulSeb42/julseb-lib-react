import { useState } from "react"
import { useKeyPress, Flexbox, Text } from "../../../../lib"

export const PreviewUseKeyPress = () => {
	const [isVisible, setIsVisible] = useState(false)
	const keys = ["Command", "KeyJ"]
	useKeyPress(keys, () => setIsVisible(!isVisible))

	return (
		<Flexbox flexDirection="col" alignItems="start">
			<Text>Visible: {isVisible ? "Visible" : "Not visible"}</Text>
			<Text>{keys.join(", ")}</Text>
		</Flexbox>
	)
}
