/*=============================================== Burger tests previews ===============================================*/

import { useState } from "react"
import { Burger } from "../../../"
import type { BurgerProps } from "../types"

export function BurgerPreview(props: Omit<BurgerProps, "isOpen" | "onClick">) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} {...props} />
    )
}
