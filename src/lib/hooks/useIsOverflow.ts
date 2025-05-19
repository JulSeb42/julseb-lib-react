import { useState, useLayoutEffect, type RefCallback, type Ref } from "react"

/**
 * useIsOverflow is a hook to detect if an element is overflowing its container in width or height.
 *
 * @function
 * @param {Ref<HTMLElement>} ref - Ref to the target HTML element.
 * @param {Object} [options] - Optional configuration.
 * @param {RefCallback<boolean>} [options.callback] - Callback function called with the overflow state.
 * @param {"width" | "height"} [options.check="width"] - Whether to check for overflow in width or height.
 * @returns {boolean | undefined} Returns true if the element is overflowing, false if not, or undefined if not yet determined.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#useIsOverflow
 *
 * @example
 * const ref = useRef<HTMLDivElement>(null)
 * const isOverflow = useIsOverflow(ref, { check: "height" })
 */
export const useIsOverflow = (
    ref: Ref<HTMLElement>,
    options?: {
        callback: RefCallback<boolean>
        check?: "width" | "height"
    }
) => {
    const [isOverflow, setIsOverflow] = useState<undefined | boolean>(undefined)

    useLayoutEffect(() => {
        const { current } = ref as any

        const trigger = () => {
            if (current) {
                const hasOverflow =
                    options?.check === "height"
                        ? current.scrollHeight > current.clientHeight
                        : current.scrollWidth > current.clientWidth
                setIsOverflow(hasOverflow)

                if (options?.callback) options.callback(hasOverflow)
            }
        }

        trigger()
    }, [ref, options])

    return isOverflow
}
