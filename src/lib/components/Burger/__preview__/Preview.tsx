import { useState, type FC } from "react"
import { Burger } from "../Burger"
import type { ILibBurger } from "../types"

export const BurgerPreview: FC<Omit<ILibBurger, "isOpen">> = props => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} {...props} />
	)
}
