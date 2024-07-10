/*=============================================== AccordionPreview ===============================================*/

import styled from "styled-components"
import { Icon, Text, Mixins } from "../../../"
import type { IconProps } from "../../../types/components-props"
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

export const iconPreview: ComponentPreview<IconProps, typeof Icon> = {
    name: "Icon",
    component: Icon,
    category: "components",
    props: [
        {
            previewTitle: "Default",
            src: "arrow-left",
            color: "success",
            size: 120,
        },
        {
            previewTitle: "With baseUrl",
            src: "warning",
            baseURL: "icons-alt",
            color: "danger",
            size: 48,
        },
    ],
    demos: [
        {
            previewTitle: "With styled-components mixins",
            element: <IconMixin>Hello World</IconMixin>,
        },
    ],
}
