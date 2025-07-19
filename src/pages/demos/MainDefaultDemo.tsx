import { BasePage } from "../../components"
import { Wrapper, Main, Text } from "../../lib"

export const MainDefaultDemo = () => {
	return (
		<BasePage title="MainDefault">
			<Wrapper
				backgroundColor="warning-200"
				// className=""
			>
				<Main className="bg-danger-200">
					<Text tag="h1">Main default</Text>
				</Main>
			</Wrapper>
		</BasePage>
	)
}
