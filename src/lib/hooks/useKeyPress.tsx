import { useEffect } from "react"

/**
 * @description Hook to trigger functions on key press
 * @link https://documentation-components-react.vercel.app/helpers/hooks#useKeyPress
 * @argument keyCodes: string | Array<string>
 * @argument callback: () => void
 */
export const useKeyPress = (
    keyCodes: string | Array<string>,
    callback: () => void,
    excludeKeys?: Array<string>
): void => {
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

                const excludedMetaKey =
                    excludeKeys && excludeKeys[0] === "Command"
                        ? e.metaKey
                        : undefined
                const excludedCtrlKey =
                    excludeKeys && excludeKeys[0] === "Control"
                        ? e.ctrlKey
                        : undefined
                const excludedShiftKey =
                    excludeKeys && excludeKeys[0] === "Shift"
                        ? e.shiftKey
                        : undefined
                const excludedAltKey =
                    excludeKeys && excludeKeys[0] === "Alt"
                        ? e.altKey
                        : undefined

                if (
                    keyCodes.length === 1 &&
                    !(
                        excludedMetaKey ||
                        excludedCtrlKey ||
                        excludedShiftKey ||
                        excludedAltKey
                    )
                ) {
                    singleHandler(e)
                }

                if (
                    excludedMetaKey ||
                    excludedCtrlKey ||
                    excludedShiftKey ||
                    excludedAltKey
                ) {
                    return
                }

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
            typeof keyCodes !== "string" || (keyCodes && excludeKeys)
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
