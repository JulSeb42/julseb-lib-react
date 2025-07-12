import { useEffect, type RefObject } from "react"

type Event = MouseEvent | TouchEvent

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
 * @param {Event} handler.event - The mouse or touch event that triggered the outside click
 *
 * @returns {void} This hook doesn't return anything
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useClickOutside
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: (event: Event) => void,
) => {
	useEffect(() => {
		const listener = (e: Event) => {
			const target = e.target as HTMLElement

			if (target.getAttribute("href")) return false

			const el = ref?.current
			if (!el || el.contains((e?.target as Node) || null)) {
				return
			}

			handler(e)
		}

		document.addEventListener("mousedown", listener)

		return () => {
			document.removeEventListener("mousedown", listener)
		}
	}, [ref, handler])
}
