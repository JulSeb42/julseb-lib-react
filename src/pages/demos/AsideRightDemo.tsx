import { BasePage } from "../../components"
import { Wrapper, Main, Aside, Text } from "../../lib"

export const AsideRightDemo = () => {
	return (
		<BasePage title="AsideRight">
			<Wrapper className="bg-amber-200">
				<Main className="bg-danger-200">
					<Text tag="h1">Main</Text>
				</Main>

				<Aside className="bg-danger-200">
					<Text tag="h2">Aside</Text>
				</Aside>
			</Wrapper>
		</BasePage>
	)
}
