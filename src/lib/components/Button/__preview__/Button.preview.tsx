/*=============================================== ButtonPreview ===============================================*/

import { Button, Flexbox } from "../../../"
import {
    typeValues,
    type LibColorsHover,
    type ReactChildren,
} from "../../../types"
import type { ButtonProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const buttonPreview: ComponentPreview<ButtonProps> = {
    name: "Button",
    component: Button,
    category: "components",
    imports: ["Button"],
    typeImports: ["ButtonProps"],
    extends: [
        "HTMLButtonElement & HTMLAnchorElement",
        "ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement>",
    ],
    previews: [
        ...Object.values(typeValues.buttonSizes).map((size, i) => ({
            previewTitle: `Size ${size}`,
            demo: (
                <ButtonPreview size={size} key={i}>
                    Button
                </ButtonPreview>
            ),
        })),
        ...Object.values(typeValues.buttonVariants).map((variant, i) => ({
            previewTitle: `Variant ${variant}`,
            demo: (
                <ButtonPreview variant={variant} key={i}>
                    Button
                </ButtonPreview>
            ),
        })),
        {
            previewTitle: "With shadow",
            demo: (
                <PreviewFlex>
                    <Button shadow="s">Button</Button>
                    <Button
                        variant="plain"
                        color="secondary"
                        shadow={{
                            default: "m",
                            hover: "xl",
                            active: "l",
                        }}
                    >
                        Button
                    </Button>
                </PreviewFlex>
            ),
        },
        {
            previewTitle: "Disabled",
            demo: (
                <PreviewFlex>
                    {Object.values(typeValues.buttonVariants).map(
                        (variant, i) => (
                            <Button key={i} variant={variant} disabled>
                                Button disabled
                            </Button>
                        )
                    )}
                </PreviewFlex>
            ),
        },
        {
            previewTitle: "As link",
            demo: (
                <PreviewFlex>
                    <Button to="/">Button with to</Button>
                    <Button href="#">Button with href</Button>
                </PreviewFlex>
            ),
        },
        {
            previewTitle: "With icon",
            demo: (
                <PreviewFlex>
                    <Button
                        variant="plain"
                        color="primary"
                        icons={{ left: "mail", right: "chevron-right" }}
                    >
                        Button
                    </Button>
                    <Button
                        variant="transparent"
                        color="secondary"
                        icons={{ right: "chevron-down" }}
                        size="small"
                    >
                        Button
                    </Button>
                </PreviewFlex>
            ),
        },
        {
            previewTitle: "Loading",
            demo: (
                <PreviewFlex>
                    <Button
                        variant="plain"
                        color="primary"
                        icons={{ left: "mail", right: "chevron-right" }}
                        isLoading
                    >
                        Button
                    </Button>
                    <Button
                        variant="transparent"
                        color="secondary"
                        icons={{ right: "chevron-down" }}
                        size="small"
                        isLoading
                    >
                        Button
                    </Button>
                </PreviewFlex>
            ),
        },
    ],
}

function ButtonPreview(props: ButtonProps) {
    const colors: Array<LibColorsHover> = Object.values(typeValues.colorsHover)

    return (
        <PreviewFlex>
            {colors.map((c, i) => (
                <Button key={i} color={c} {...props} />
            ))}
        </PreviewFlex>
    )
}

function PreviewFlex({ children }: { children?: ReactChildren }) {
    return (
        <Flexbox gap="s" alignItems="flex-start">
            {children}
        </Flexbox>
    )
}
