import { useMaxWidth, Text } from "../../../../lib"

export function PreviewUseMaxWidth() {
    const isMobile = useMaxWidth(900)

    return <Text>Is mobile: {isMobile.toString()}</Text>
}
