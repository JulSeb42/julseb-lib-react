/*=============================================== useKeyPress ===============================================*/

import { useEffect } from "react"

export function useKeyPress(
    callback: () => void,
    keyCodes: string | string[]
): void {
    useEffect(() => {
        const singleHandler = ({ code }: KeyboardEvent) => {
            if (keyCodes.includes(code)) {
                callback()
            }
        }

        const multiHandler = (e: KeyboardEvent) => {
            if (typeof keyCodes !== "string") {
                const metaKey =
                    keyCodes[0] === "Command" ? e.metaKey : undefined
                const ctrlKey =
                    keyCodes[0] === "Control" ? e.ctrlKey : undefined
                const shiftKey =
                    keyCodes[0] === "Shift" ? e.shiftKey : undefined
                const altKey = keyCodes[0] === "Alt" ? e.altKey : undefined

                if (
                    (metaKey || ctrlKey || shiftKey || altKey) &&
                    e.code === keyCodes[1]
                ) {
                    callback()
                }
            }
        }

        window.addEventListener(
            "keydown",
            typeof keyCodes !== "string" && keyCodes.length > 1
                ? multiHandler
                : singleHandler
        )

        return () =>
            window.removeEventListener(
                "keydown",
                typeof keyCodes !== "string" && keyCodes.length > 1
                    ? multiHandler
                    : singleHandler
            )
    }, [callback, keyCodes])
}
