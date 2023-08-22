/*=============================================== useDebounce ===============================================*/

import { useState, useEffect } from "react"

export function useDebounce<T>(value: T, delay: number = 1000) {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timedValue = setTimeout(() => setDebouncedValue(value), delay)

        return () => clearTimeout(timedValue)
    }, [value, delay])

    return debouncedValue
}
