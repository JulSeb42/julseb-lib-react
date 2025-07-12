import { useEffect, useState } from "react"

/**
 * Hook to fetch data from a Promise with loading and error state management.
 *
 * @hook
 *
 * @example
 * const { response, error, loading } = useFetch(
 *   fetch('/api/users').then(res => res.json()),
 *   [userId]
 * )
 *
 * if (loading) return <div>Loading...</div>
 * if (error) return <div>Error: {error.message}</div>
 * return <div>{response?.name}</div>
 *
 * @template T - Type of the data returned by the fetch function
 * @param {Promise<T>} fetchFunction - Promise that resolves to the data to be fetched
 * @param {any} [dependencies] - Dependency array to trigger re-fetching when values change
 *
 * @returns {object} Object containing fetch state
 * @returns {T | null} returns.response - The fetched data, or null if not yet loaded or failed
 * @returns {any} returns.error - Error object if the fetch failed, undefined otherwise
 * @returns {boolean} returns.loading - Whether the fetch operation is currently in progress
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useFetch
 */
export const useFetch = <T,>(fetchFunction: Promise<T>, dependencies?: any) => {
	const [response, setResponse] = useState<T | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<any>(undefined)

	useEffect(() => {
		fetchFunction
			.then((res: T) => setResponse(res))
			.catch((err: any) => setError(err))
			.finally(() => setLoading(false))
	}, [dependencies])

	return { response, error, loading } as const
}
