/*=============================================== useFetch ===============================================*/

import { useEffect, useState } from "react"

/**
 * @description Hook to fetch data
 * @link https://documentation-components-react.vercel.app/helpers/hooks#useFetch
 * @prop fetchFunction: Promise<T> => to define
 * @prop dependencies?: any
 */

export function useFetch<T>(fetchFunction: Promise<T>, dependencies?: any) {
    const [response, setResponse] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(undefined)

    useEffect(() => {
        fetchFunction
            .then((res: T) => setResponse(res))
            .catch((err: any) => setError(err))

        setLoading(false)
    }, [fetchFunction, dependencies])

    return { response, error, loading } as const
}
