import { useMinWidth, Text } from "../../../../lib"

export const PreviewUseMinWidth = () => {
    const isDesktop = useMinWidth(900)

    return <Text>Is desktop: {isDesktop.toString()}</Text>
}
