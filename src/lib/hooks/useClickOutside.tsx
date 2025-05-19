import { useEffect, type Ref } from "react"

type Event = MouseEvent | TouchEvent

/**
 * useClickOutside is a hook to trigger a function when a click occurs outside the referenced element.
 *
 * @function
 * @template T
 * @param {Ref<T>} ref - Ref to the target element.
 * @param {(event: MouseEvent | TouchEvent) => void} handler - Function to call when a click outside is detected.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#useClickOutside
 *
 * @example
 * const ref = useRef(null)
 * useClickOutside(ref, () => setOpen(false))
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: Ref<T>,
    handler: (event: Event) => void
) => {
    useEffect(() => {
        const listener = (e: Event) => {
            const target = e.target as HTMLElement

            if (target.getAttribute("href")) return false

            const el = (ref as any)?.current
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
