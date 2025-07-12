import { BasePage } from "../../components"
import { Wrapper, Main, Aside, Text } from "../../lib"

export const AsideLeftDemo = () => {
	return (
		<BasePage title="Aside Left">
			<Wrapper className="bg-amber-200">
				<Aside className="bg-danger-200">
					<Text tag="h2">Aside</Text>
				</Aside>

				<Main className="bg-danger-200">
					<Text tag="h1">Main</Text>
				</Main>
			</Wrapper>
		</BasePage>
	)
}
