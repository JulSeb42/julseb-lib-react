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

	const {
		name,
		component,
		previews: componentPreviews,
		noStretch,
	} = componentPreview

	return (
		<Page title={toPascalCase(name) ?? ""}>
			{componentPreviews?.map((preview, i) => (
				<ComponentPreview
					component={component}
					noStretch={noStretch}
					{...preview}
					key={i}
				/>
			))}
		</Page>
	)
}
