import type { FC, ForwardRefExoticComponent, RefAttributes } from "react"
import { Flexbox, Text } from "../lib"

interface IComponentPreviewContent {
    component: FC | ForwardRefExoticComponent<any & RefAttributes<any>> | null
    props?: any
    demo?: JSX.Element
}

const ComponentPreviewContent = ({
    component,
    props,
    demo,
}: IComponentPreviewContent) => {
    const Component = component as any

    if (demo) return demo
    if (props) return <Component {...props} />

    return null
}

interface IComponentPreview extends IComponentPreviewContent {
    previewTitle?: string
    noStretch?: boolean
}

export const ComponentPreview = ({
    previewTitle,
    noStretch,
    ...rest
}: IComponentPreview) => {
    return previewTitle ? (
        <Flexbox
            flexDirection="column"
            gap="s"
            alignItems={noStretch ? "flex-start" : "stretch"}
        >
            <Text tag="h4">{previewTitle}</Text>
            <ComponentPreviewContent {...rest} />
        </Flexbox>
    ) : (
        <ComponentPreviewContent {...rest} />
    )
}
