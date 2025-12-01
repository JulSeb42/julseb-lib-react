import { useCopyToClipboard, Flexbox, Button, Text } from "../../../../lib"

export const PreviewUseCopyToClipboard = () => {
	const [value, copy] = useCopyToClipboard()

	return (
		<Flexbox flexDirection="col" justifyContent="start" alignItems="start">
			<Button onClick={() => copy("Prout")}>Copy this text</Button>

			<Text>Copied: {value}</Text>
		</Flexbox>
	)
}
