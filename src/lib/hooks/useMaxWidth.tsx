import { useState, useEffect } from "react"

/**
 * @description Hook to detect if an element is smaller than a set width
 * @link https://doc-julseb-lib-react.vercel.app/helpers/hooks#useMaxWidth
 * @argument width: number
 */
export const useMaxWidth = (width: number): boolean => {
	const [isMax, setIsMax] = useState<boolean>(false)

	useEffect(() => {
		const detectSize = () => {
			if (window.innerWidth <= width) {
				setIsMax(true)
			} else {
				setIsMax(false)
			}
		}

		detectSize()

		window.addEventListener("resize", () => detectSize())
	}, [width])

	return isMax
}
