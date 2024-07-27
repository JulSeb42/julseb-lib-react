import { useTouchScreen, Text } from "../../../../lib"

export function PreviewUseTouchScreen() {
    const isTouchScreen = useTouchScreen()

    return <Text>Is touch screen: {isTouchScreen.toString()}</Text>
}
