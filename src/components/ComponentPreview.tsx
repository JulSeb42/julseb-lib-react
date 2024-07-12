/*=============================================== ComponentPreview ===============================================*/

import type { FC, ForwardRefExoticComponent, RefAttributes } from "react"
import { Flexbox, Text } from "../lib"

interface IComponentPreviewContent {
    component: FC | ForwardRefExoticComponent<any & RefAttributes<any>> | null
    props?: any
    demo?: JSX.Element
}

function ComponentPreviewContent({
    component,
    props,
    demo,
}: IComponentPreviewContent) {
    const Component = component as any

    if (demo) return demo
    if (props) return <Component {...props} />

    return null
}

interface IComponentPreview extends IComponentPreviewContent {
    previewTitle?: string
}

export function ComponentPreview({ previewTitle, ...rest }: IComponentPreview) {
    return previewTitle ? (
        <Flexbox flexDirection="column" gap="s" alignItems="flex-start">
            <Text tag="h4">{previewTitle}</Text>
            <ComponentPreviewContent {...rest} />
        </Flexbox>
    ) : (
        <ComponentPreviewContent {...rest} />
    )
}
