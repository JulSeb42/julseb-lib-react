/*=============================================== ButtonIconPreview ===============================================*/

import { ButtonIcon, Flexbox } from "../../../"
import {
    type LibButtonIconVariant,
    type ReactChildren,
    typeValues,
} from "../../../types"
import type { ILibButtonIcon } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const buttonVariants: Array<LibButtonIconVariant> = [
    "plain",
    "transparent",
    "ghost",
]

export const buttonIconPreview: ComponentPreview<ILibButtonIcon> = {
    name: "ButtonIcon",
    component: ButtonIcon,
    category: "components",
    import: "ButtonIcon",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibButtonIcon",
    additionalTypeImports: null,
    extends: ["HTMLButtonElement"],
    previews: [
        { previewTitle: "Default", props: { icon: "mail" } },
        ...buttonVariants.map(variant => ({
            previewTitle: `Variant ${variant}`,
            demo: <ButtonsMap icon="mail" variant={variant} />,
        })),
        {
            previewTitle: "With a different size",
            props: { icon: "mail", variant: "ghost", size: 48 },
        },
        {
            previewTitle: "As link",
            demo: (
                <FlexPreview>
                    <ButtonIcon
                        icon="mail"
                        variant="plain"
                        color="primary"
                        to="/"
                    />
                    <ButtonIcon
                        icon="mail"
                        variant="ghost"
                        color="secondary"
                        href="#"
                    />
                </FlexPreview>
            ),
        },
        {
            previewTitle: "With tooltip",
            props: { icon: "mail", tooltip: "Hello", showTooltip: true },
        },
        { previewTitle: "Disabled", props: { icon: "mail", disabled: true } },
        { previewTitle: "Loading", props: { icon: "mail", isLoading: true } },
    ],
}

function FlexPreview({ children }: { children?: ReactChildren }) {
    return (
        <Flexbox gap="s" flexWrap="wrap">
            {children}
        </Flexbox>
    )
}

function ButtonsMap(props: ILibButtonIcon) {
    const colors = Object.values(typeValues.colorsHover)

    return (
        <FlexPreview>
            {colors.map((c, i) => (
                <ButtonIcon key={i} color={c} {...props} />
            ))}
        </FlexPreview>
    )
}
