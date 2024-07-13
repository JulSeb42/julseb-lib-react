/*=============================================== BurgerPreview ===============================================*/

import { useState } from "react"
import { Burger, Flexbox } from "../../../"
import type { LibColorsHover } from "../../../types"
import type { ILibBurger } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const burgerPreview: ComponentPreview<ILibBurger> = {
    name: "Burger",
    component: Burger,
    category: "components",
    import: "Burger",
    additionalImports: null,
    optionalImports: null,
    propsImport: "ILibBurger",
    additionalTypeImports: null,
    extends: ["HTMLButtonElement"],
    previews: [{ demo: <BurgerPreview /> }],
}

function BurgerPreview() {
    type MappedColors = Exclude<
        LibColorsHover,
        "white" | "background" | "font" | "gray"
    >

    const burgerColors: Array<MappedColors> = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
    ]

    const [isOpen, setIsOpen] = useState<{
        [colorName in MappedColors]: boolean
    }>({
        primary: false,
        secondary: false,
        success: false,
        danger: false,
        warning: false,
    })

    return (
        <Flexbox gap="s">
            {burgerColors.map((c, i) => (
                <Burger
                    color={c}
                    isOpen={isOpen[c]}
                    onClick={() => setIsOpen({ ...isOpen, [c]: !isOpen[c] })}
                    key={i}
                />
            ))}
        </Flexbox>
    )
}
