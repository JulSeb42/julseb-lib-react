/*=============================================== useClickOutside ===============================================*/

import { useEffect } from "react"
import type { RefObject } from "react"

type Event = MouseEvent | TouchEvent

export function useClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void
) {
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
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    }, [ref, handler])
}
