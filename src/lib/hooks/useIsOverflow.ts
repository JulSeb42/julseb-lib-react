import {
    useState,
    useLayoutEffect,
    type RefCallback,
    type RefObject,
} from "react"

/**
 * @description Hook to detect if an element is overflowing
 * @link https://documentation-components-react.vercel.app/helpers/hooks#useIsOverflow
 * @argument ref: RefObject<HTMLElement>,
 * @argument options?: { callback: RefCallback<boolean>; check?: "width" | "height" }
 */
export const useIsOverflow = (
    ref: RefObject<HTMLElement>,
    options?: {
        callback: RefCallback<boolean>
        check?: "width" | "height"
    }
) => {
    const [isOverflow, setIsOverflow] = useState<undefined | boolean>(undefined)

    useLayoutEffect(() => {
        const { current } = ref

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
