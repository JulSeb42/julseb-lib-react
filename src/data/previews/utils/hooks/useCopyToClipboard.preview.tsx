import { useCopyToClipboard, Flexbox, Button, Text } from "../../../../lib"

export const PreviewUseCopyToClipboard = () => {
    const [value, copy] = useCopyToClipboard()

    return (
        <Flexbox
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Button onClick={() => copy("Prout")}>Copy this text</Button>

            <Text>Copied: {value}</Text>
        </Flexbox>
    )
}
