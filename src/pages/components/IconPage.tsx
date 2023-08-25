/*=============================================== IconPage ===============================================*/

import styled from "styled-components"

import { Page } from "../../components"
import { Icon, Mixins, Text } from "../../lib"

const IconMixin = styled(Text)`
    &:before {
        ${Mixins.Icon({
            $name: "chevron-right",
            $size: 24,
            $color: "danger-700",
        })}
    }
`

export function IconPage() {
    return (
        <Page title="Icon">
            <Icon src="arrow-left" color="success" size={120} />
            <IconMixin>
                Hello World
            </IconMixin>
        </Page>
    )
}
