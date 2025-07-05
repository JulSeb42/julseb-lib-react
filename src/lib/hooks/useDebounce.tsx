import { useState, useEffect } from "react"

/**
 * Hook to delay the update of a value until after a specified delay period has passed without changes.
 *
 * @hook
 *
 * @example
 * const [searchTerm, setSearchTerm] = useState('')
 * const debouncedSearchTerm = useDebounce(searchTerm, 500)
 *
 * useEffect(() => {
 *   if (debouncedSearchTerm) {
 *     // Perform search API call
 *     searchAPI(debouncedSearchTerm)
 *   }
 * }, [debouncedSearchTerm])
 *
 * @template T - Type of the value being debounced
 * @param {T} value - The value to debounce
 * @param {number} [delay=1000] - Delay in milliseconds before updating the debounced value
 *
 * @returns {T} The debounced value that updates after the delay period
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useDebounce
 */
export const useDebounce = <T,>(value: T, delay: number = 1000) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const timedValue = setTimeout(() => setDebouncedValue(value), delay)

		return () => clearTimeout(timedValue)
	}, [value, delay])

	return debouncedValue
}
