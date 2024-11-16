/*=============================================== Burger tests previews ===============================================*/

import { useState } from "react"
import { Burger } from "../../../"
import type { ILibBurger } from "../types"

export const BurgerPreview = (props: Omit<ILibBurger, "isOpen" | "onClick">) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} {...props} />
    )
}
