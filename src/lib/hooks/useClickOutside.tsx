import { useEffect, type RefObject } from "react"

/**
 * Hook to trigger a function when clicking outside a referenced element.
 *
 * @hook
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null)
 * useClickOutside(ref, () => {
 *   console.log('Clicked outside!')
 *   setIsOpen(false)
 * })
 *
 * @template T - HTML element type that extends HTMLElement
 * @param {RefObject<T>} ref - React ref object pointing to the target element
 * @param {function} handler - Callback function to execute when clicking outside the element
 * @param {boolean} isActive - Whether the click outside detection is active (default: true)
 * @param {number} delay - Delay in milliseconds before activating the listener (default: 100ms)
 *
 * @returns {void} This hook doesn't return anything
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useClickOutside
 */

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: (e?: MouseEvent) => void,
	isActive: boolean = true,
	delay: number = 100,
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler()
			}
		}

		if (isActive) {
			const timeoutId = setTimeout(() => {
				document.addEventListener("mousedown", handleClickOutside)
			}, delay)

			return () => {
				clearTimeout(timeoutId)
				document.removeEventListener("mousedown", handleClickOutside)
			}
		}
	}, [ref, handler, isActive, delay])
}
