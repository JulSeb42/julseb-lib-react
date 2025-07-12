import { useState, useCallback, useRef, useEffect } from "react"
import type { DispatchState } from "../types"

interface ILibKeyboardNav<T> {
	data: T
	value: string
	setValue: DispatchState<string>
}

export const useKeyboardNavigation = <T,>({
	data,
	value,
	setValue,
}: ILibKeyboardNav<T>) => {
	const [isOpen, setIsOpen] = useState(false)
	const [cursor, setCursor] = useState(0)
	const listRef = useRef<HTMLDivElement>(null)

	const handleKeyboardNavigation = useCallback(
		(e: KeyboardEvent) => {
			const { key } = e
			const dataArr: Array<T> = data as Array<T>

			if (isOpen) {
				if (key === "ArrowDown") {
					e.preventDefault()

					if (dataArr.length) {
						setCursor(prev =>
							prev < dataArr.length ? prev + 1 : 0,
						)

						if (cursor === dataArr.length)
							listRef?.current?.scrollTo({ top: 0 })
						else listRef?.current?.scrollTo({ top: cursor * 40 })
					}
				}

				if (key === "ArrowUp") {
					e.preventDefault()

					if (dataArr.length) {
						setCursor(prev =>
							prev > 0 ? prev - 1 : dataArr.length,
						)

						if (cursor === 0)
							listRef?.current?.scrollTo({
								top: listRef?.current?.scrollHeight,
							})
						else listRef?.current?.scrollTo({ top: cursor * 40 })
					}
				}

				if (key === "Tab" || key === "Enter") {
					e.preventDefault()

					if (cursor === dataArr.length) {
						setValue(value)
						setIsOpen(false)
					} else {
						setValue((data as Array<any>)[cursor])
						setIsOpen(false)
					}
				}
			}
		},
		[isOpen, cursor, data, value, setValue],
	)

	useEffect(() => {
		document.addEventListener("keydown", handleKeyboardNavigation)

		return () =>
			document.removeEventListener("keydown", handleKeyboardNavigation)
	}, [handleKeyboardNavigation])

	return { isOpen, setIsOpen, cursor, listRef, handleKeyboardNavigation }
}
