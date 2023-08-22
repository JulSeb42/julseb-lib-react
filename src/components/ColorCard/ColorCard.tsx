/*=============================================== ColorCard ===============================================*/

import { StyledColorCard, Square, CardContent } from "./styles"
import type { ColorCardProps } from "./types"

export function ColorCard({
    color: { name, variable, css, hex, rgb },
}: ColorCardProps) {
    const items: { title: string; content: string }[] = [
        {
            title: "Variable",
            content: variable,
        },
        {
            title: "CSS",
            content: css,
        },
        {
            title: "Hex",
            content: hex,
        },
        {
            title: "RGB",
            content: rgb,
        },
    ]

    return (
        <StyledColorCard>
            <Square $background={css} />

            <CardContent>
                <h4>{name}</h4>

                {items.map(({ title, content }) => (
                    <p key={title}>
                        <strong>{title}: </strong>
                        {content}
                    </p>
                ))}
            </CardContent>
        </StyledColorCard>
    )
}
