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

    return (
        <Page title={name}>
            {props?.map((prop, i) => (
                <Flexbox flexDirection="column" gap="s" key={i}>
                    {prop.demoName && <Text tag="h3">{prop.demoName}</Text>}

                    <Component {...prop} />
                </Flexbox>
            ))}

            {demos && demos?.length > 1
                ? demos.map((preview: any, i: number) => (
                      <Flexbox flexDirection="column" gap="s" key={i}>
                          {preview.previewTitle && (
                              <Text tag="h4">{preview.previewTitle}</Text>
                          )}
                          {preview.element}
                      </Flexbox>
                  ))
                : demos
                ? demos[0].element
                : null}

            {/* {allDemos?.length > 1
                ? allDemos?.map((demo, i) => (
                      <Flexbox flexDirection="column" gap="s" key={i}>
                          {demo.demoName && (
                              <Text tag="h4">{demo.demoName}</Text>
                          )}
                          {demo.element}
                      </Flexbox>
                  ))
                : allDemos[0]} */}
        </Page>
    )
}
