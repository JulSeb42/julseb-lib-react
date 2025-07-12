import { BasePage } from "../../components"
import { Wrapper, Main, Text } from "../../lib"

export const MainFormDemo = () => {
	return (
		<BasePage title="Main form">
			<Wrapper className="bg-amber-200">
				<Main className="bg-danger-200" size="form">
					<Text tag="h1">Main form</Text>
				</Main>
			</Wrapper>
		</BasePage>
	)
}
