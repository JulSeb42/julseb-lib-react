import { useParams } from "react-router-dom"
import { toKebabCase, toPascalCase } from "@julseb-lib/utils"
import { Page } from "../components"
import { NotFound } from "./NotFound"
import { previews } from "../data/components"
import { ComponentPreview } from "../components/ComponentPreview"

export const ComponentPage = () => {
	const { componentName } = useParams<{ componentName: string }>()

	const componentPreview = previews.find(
		demo => toKebabCase(demo.name) === toKebabCase(componentName ?? ""),
	)

	if (!componentPreview) return <NotFound />

	return (
		<Page title={toPascalCase(componentPreview.name)!}>
			{componentPreview.previews?.map((preview, i) => (
				<ComponentPreview
					component={componentPreview.component}
					noStretch={componentPreview.noStretch}
					{...preview}
					key={i}
				/>
			))}
		</Page>
	)
}
