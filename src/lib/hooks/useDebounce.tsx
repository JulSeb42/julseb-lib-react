import { useState, useEffect } from "react"

/**
 * @description Hook to delay a function
 * @link https://documentation-components-react.vercel.app/helpers/hooks#useDebounce
 * @argument value: <T> => type to define
 * @argument delay?: number
 */
export const useDebounce = <T,>(value: T, delay: number = 1000) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timedValue = setTimeout(() => setDebouncedValue(value), delay)

        return () => clearTimeout(timedValue)
    }, [value, delay])

    return debouncedValue
}
