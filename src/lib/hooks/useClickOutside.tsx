import { useEffect, type RefObject } from "react"

type Event = MouseEvent | TouchEvent

/**
 * @description Hook to trigger a function on click outside an element
 * @link https://documentation-components-react.vercel.app/helpers/hooks#useClickOutside
 * @argument ref: RefObject<T>,
 * @argument handler: (event: Event) => void
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void
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
