/*=============================================== ComponentPage ===============================================*/

import { useParams } from "react-router-dom"
import { toKebabCase } from "ts-utils-julseb"
import { Page } from "../../components"
import { Text, Flexbox } from "../../lib"
import { previews } from "../../data/components"

export function ComponentPage() {
    const { componentName } = useParams<{ componentName: string }>()

    const componentPreview = previews.find(
        demo => toKebabCase(demo.name) === toKebabCase(componentName || "")
    )

    if (!componentPreview)
        return (
            <Page title="404">
                <Text>Component not found</Text>
            </Page>
        )

    const { name, component, props, demos } = componentPreview
    const Component = component

    return (
        <Page title={name}>
            {props?.map((prop, i) => {
                const { previewTitle, ...rest } = prop as any

                return previewTitle ? (
                    <Flexbox
                        flexDirection="column"
                        gap="s"
                        alignItems="flex-start"
                        key={i}
                    >
                        <Text tag="h4">{previewTitle}</Text>
                        <Component {...rest} />
                    </Flexbox>
                ) : (
                    <Component key={i} {...rest} />
                )
            })}

            {demos?.map((preview, i) => {
                return preview.previewTitle ? (
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
            })}
        </Page>
    )
}
