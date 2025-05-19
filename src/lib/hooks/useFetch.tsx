import { useEffect, useState } from "react"

/**
 * useFetch is a hook to fetch data asynchronously and manage loading and error states.
 *
 * @function
 * @template T
 * @param {Promise<T>} fetchFunction - The promise to fetch data.
 * @param {any} [dependencies] - Optional dependencies array for the effect.
 * @returns {{ response: T | null, error: any, loading: boolean }} An object containing the response, error, and loading state.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#useFetch
 *
 * @example
 * const { response, error, loading } = useFetch(fetchDataPromise, [dependency])
 */
export const useFetch = <T,>(fetchFunction: Promise<T>, dependencies?: any) => {
    const [response, setResponse] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(undefined)

    useEffect(() => {
        fetchFunction
            .then((res: T) => setResponse(res))
            .catch((err: any) => setError(err))

        setLoading(false)
    }, [dependencies])

    return { response, error, loading } as const
}
