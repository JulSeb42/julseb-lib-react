import { BasePage } from "../../components"
import { PageLoading } from "../../lib"

export const PageLoadingDemo = () => {
	return (
		<BasePage title="PageLoading">
			<PageLoading loaderVariant={3} backgroundColor="secondary" />
		</BasePage>
	)
}
