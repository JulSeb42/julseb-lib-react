import styled from "styled-components"
import { Icon, Text, Mixins } from "../../../"
import type { ILibIcon } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const IconMixin = styled(Text)`
    &:before {
        ${Mixins.Icon({
            $name: "arrow-right",
            $color: "danger-400",
            $size: 32,
        })}
    }
`

export const iconPreview: ComponentPreview<ILibIcon> = {
    name: "Icon",
    component: Icon,
    category: "components",
    import: "Icon",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibIcon",
    additionalTypeImports: null,
    extends: [{ name: "SVGProps", from: "react-inlinesvg" }],
    previews: [
        {
            previewTitle: "Default",
            props: {
                src: "arrow-left",
                color: "success",
                size: 120,
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With baseUrl",
            props: {
                src: "warning",
                baseURL: "icons-alt",
                color: "danger",
                size: 48,
                "data-testid": "testid",
                className: "className",
            },
        },
        {
            previewTitle: "With styled-components mixins",
            demo: <IconMixin>Hello World</IconMixin>,
        },
    ],
}
