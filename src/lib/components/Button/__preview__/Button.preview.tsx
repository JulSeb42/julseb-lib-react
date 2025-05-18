import { Button, Flexbox } from "../../../"
import {
    designTokens,
    type LibColorsHover,
    type ReactChildren,
} from "../../../types"
import type { ILibButton } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const PreviewFlex = ({ children }: { children?: ReactChildren }) => {
    return (
        <Flexbox gap="s" alignItems="flex-start" flexWrap="wrap">
            {children}
        </Flexbox>
    )
}

const ButtonPreview = (props: ILibButton) => {
    const colors: Array<LibColorsHover> = Object.values(
        designTokens.colorsHover
    )

    return (
        <PreviewFlex>
            {colors.map((c, i) => (
                <Button
                    key={i}
                    color={c}
                    {...props}
                    data-testid="testid"
                    className="className"
                />
            ))}
        </PreviewFlex>
    )
}

export const buttonPreview: ComponentPreview<ILibButton> = {
    name: "Button",
    component: Button,
    category: "components",
    import: "Button",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibButton",
    additionalTypeImports: null,
    extends: [
        "HTMLButtonElement & HTMLAnchorElement",
        "ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement>",
    ],
    previews: [
        ...Object.values(designTokens.buttonSizes).map((size, i) => ({
            previewTitle: `Size ${size}`,
            demo: (
                <ButtonPreview size={size} key={i}>
                    Button
                </ButtonPreview>
            ),
        })),
        ...Object.values(designTokens.buttonVariants).map((variant, i) => ({
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
                    <Button
                        shadow="s"
                        data-testid="testid"
                        className="className"
                    >
                        Button
                    </Button>
                    <Button
                        variant="plain"
                        color="secondary"
                        shadow={{
                            default: "m",
                            hover: "xl",
                            active: "l",
                        }}
                        data-testid="testid"
                        className="className"
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
                    {Object.values(designTokens.buttonVariants).map(
                        (variant, i) => (
                            <Button
                                key={i}
                                variant={variant}
                                disabled
                                data-testid="testid"
                                className="className"
                            >
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
                    <Button to="/" data-testid="testid" className="className">
                        Button with to
                    </Button>
                    <Button href="#" data-testid="testid" className="className">
                        Button with href
                    </Button>
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
                        data-testid="testid"
                        className="className"
                    >
                        Button
                    </Button>
                    <Button
                        variant="transparent"
                        color="secondary"
                        icons={{ right: "chevron-down" }}
                        size="small"
                        data-testid="testid"
                        className="className"
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
                        data-testid="testid"
                        className="className"
                    >
                        Button
                    </Button>
                    <Button
                        variant="transparent"
                        color="secondary"
                        icons={{ right: "chevron-down" }}
                        size="small"
                        isLoading
                        data-testid="testid"
                        className="className"
                    >
                        Button
                    </Button>
                </PreviewFlex>
            ),
        },
    ],
}
