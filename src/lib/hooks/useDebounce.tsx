import { useState, useEffect } from "react"

/**
 * useDebounce is a hook to delay updating a value until after a specified delay.
 *
 * @function
 * @template T
 * @param {T} value - The value to debounce.
 * @param {number} [delay=1000] - Delay in milliseconds before updating the debounced value.
 * @returns {T} The debounced value.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#useDebounce
 *
 * @example
 * const debouncedValue = useDebounce(searchTerm, 500)
 */
export const useDebounce = <T,>(value: T, delay: number = 1000) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timedValue = setTimeout(() => setDebouncedValue(value), delay)

        return () => clearTimeout(timedValue)
    }, [value, delay])

    return debouncedValue
}
