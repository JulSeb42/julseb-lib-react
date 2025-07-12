import { BasePage } from "../../components"
import { Wrapper, Main, Aside, Text } from "../../lib"

export const AsideBothDemo = () => {
	return (
		<BasePage title="AsideBoth">
			<Wrapper backgroundColor="warning-200">
				<Aside backgroundColor="danger-200" size="small">
					<Text tag="h2">Aside</Text>
				</Aside>

				<Main backgroundColor="danger-200">
					<Text tag="h1">Main</Text>
				</Main>

				<Aside backgroundColor="danger-200" size="small">
					<Text tag="h2">Aside</Text>
				</Aside>
			</Wrapper>
		</BasePage>
	)
}
