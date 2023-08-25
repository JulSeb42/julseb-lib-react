/*=============================================== ColorCard ===============================================*/

import { Text } from "../../lib"

import { StyledColorCard, Square, CardContent } from "./styles"
import type { ColorCardProps } from "./types"

export function ColorCard({ color, overlay }: ColorCardProps) {
    const name = color?.name || overlay?.name
    const variable = color?.variable || overlay?.name
    const css = color?.css || overlay?.css

    const hex = color?.hex
    const rgb = color?.rgb

    const value = overlay?.value

    // @ts-expect-error
    const items: { title: string; content: string }[] = [
        { title: "Variable", content: variable! },
        { title: "CSS", content: css! },
        hex ? { title: "Hex", content: hex } : undefined,
        rgb ? { title: "RGB", content: rgb } : undefined,
        value ? { title: "Value", content: value } : undefined,
    ].filter(v => v !== undefined)

    return (
        <StyledColorCard>
            <Square $background={css!} />

            <CardContent>
                <Text tag="h5">{name}</Text>

                {items.map(({ title, content }) => (
                    <Text key={title}>
                        <strong>{title}: </strong>
                        {content}
                    </Text>
                ))}
            </CardContent>
        </StyledColorCard>
    )
}
