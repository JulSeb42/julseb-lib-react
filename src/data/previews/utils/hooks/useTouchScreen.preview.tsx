import { useTouchScreen, Text } from "../../../../lib"

export const PreviewUseTouchScreen = () => {
    const isTouchScreen = useTouchScreen()

    return <Text>Is touch screen: {isTouchScreen.toString()}</Text>
}
