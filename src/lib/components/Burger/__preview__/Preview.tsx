import { useState, lazy, type FC } from "react"
import type { ILibBurger } from "../types"

const Burger = lazy(() => import("../Burger"))

export const BurgerPreview: FC<Omit<ILibBurger, "isOpen">> = props => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} {...props} />
	)
}
