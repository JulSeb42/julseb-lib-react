/*=============================================== StylesCard ===============================================*/

import { capitalize } from "@julseb-lib/utils"
import { Text } from "../../lib"
import { StyledStylesCard, Square, Content } from "./styles"
import type { StylesCardProps } from "./types"

type Item = {
    name: string
    value: string
}

export const StylesCard = ({
    variable: { name, variable, css, value },
    type,
}: StylesCardProps) => {
    const items: Array<Item> = [
        {
            name: "Variable",
            value: variable,
        },
        {
            name: "CSS",
            value: css,
        },
        {
            name: "Value",
            value: value.toString(),
        },
    ]

    return (
        <StyledStylesCard>
            <Square $css={css} $type={type} />

            <Content>
                <Text tag="h5">
                    {capitalize(type)} {name}
                </Text>

                {items.map(({ name, value }) => (
                    <Text key={name}>
                        <Text tag="strong">{name}: </Text>
                        {value}
                    </Text>
                ))}
            </Content>
        </StyledStylesCard>
    )
}
