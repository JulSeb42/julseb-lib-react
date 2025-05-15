import { BasePage } from "../../components"
import { Wrapper, Main, Text } from "../../lib"

export const MainLargeDemo = () => {
	return (
		<BasePage title="Main large">
			<Wrapper className="bg-amber-200">
				<Main className="bg-red-200" size="large">
					<Text tag="h1">Main large</Text>
				</Main>
			</Wrapper>
		</BasePage>
	)
}
