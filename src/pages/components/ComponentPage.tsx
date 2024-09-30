/*=============================================== ComponentPage ===============================================*/

import { useParams } from "react-router-dom"
import { toKebabCase, toTitleCase } from "ts-utils-julseb"
import { Page, ComponentPreview } from "../../components"
import { NotFoundPage } from "../404"
import { previews } from "../../data/components"

export const ComponentPage = () => {
    const { componentName } = useParams<{ componentName: string }>()

    const componentPreview = previews.find(
        demo => toKebabCase(demo.name) === toKebabCase(componentName || "")
    )

    if (!componentPreview) return <NotFoundPage />

    const {
        name,
        component,
        previews: componentPreviews,
        noStretch,
    } = componentPreview

    return (
        <Page title={pascalToTitle(name)}>
            {componentPreviews?.map((preview, i) => (
                <ComponentPreview
                    key={i}
                    component={component}
                    noStretch={noStretch}
                    {...preview}
                />
            ))}
        </Page>
    )
}

function pascalToTitle(str: string) {
    const splitted = str
        .split(/\.?(?=[A-Z])/)
        .join(" ")
        .toLowerCase()

    return toTitleCase(splitted)
}
