/*=============================================== ComponentPage ===============================================*/

import { useParams } from "react-router-dom"
import { toPascalCase } from "ts-utils-julseb"
import { Page } from "../../components"
import { Text, Flexbox } from "../../lib"
import { previews } from "../../data/components"

export function ComponentPage() {
    const { componentName } = useParams<{ componentName: string }>()

    const componentPreview = previews.find(
        demo => toPascalCase(demo.name) === toPascalCase(componentName || "")
    )

    if (!componentPreview)
        return (
            <Page title="404">
                <Text>Component not found</Text>
            </Page>
        )

    const { name, component, props, demos } = componentPreview
    const Component = component

    console.log(componentPreview)

    return (
        <Page title={name}>
            {props?.map((prop, i) =>
                prop.previewTitle ? (
                    <Flexbox
                        flexDirection="column"
                        gap="s"
                        alignItems="flex-start"
                        key={i}
                    >
                        <Text tag="h4">{prop.previewTitle}</Text>
                        <Component {...prop} />
                    </Flexbox>
                ) : (
                    <Component key={i} {...prop} />
                )
            )}

            {demos?.map((preview, i) =>
                preview.previewTitle ? (
                    <Flexbox
                        flexDirection="column"
                        gap="s"
                        alignItems="flex-start"
                        key={i}
                    >
                        {preview.previewTitle && (
                            <Text tag="h4">{preview.previewTitle}</Text>
                        )}
                        {preview.element}
                    </Flexbox>
                ) : (
                    preview.element
                )
            )}
        </Page>
    )
}
