import { BasePage } from "../../components"
import { Wrapper, Main, Text } from "../../lib"

export const MainDefaultDemo = () => {
	return (
		<BasePage title="MainDefault">
			<Wrapper className="bg-amber-200">
				<Main className="bg-red-200">
					<Text tag="h1">Main default</Text>
				</Main>
			</Wrapper>
		</BasePage>
	)
}
