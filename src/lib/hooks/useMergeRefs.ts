import { useMemo, type Ref, type RefCallback, type RefObject } from "react"

/**
 * useMergeRefs is a hook to merge multiple refs into a single ref callback.
 *
 * @function
 * @template Instance
 * @param {Array<Ref<Instance> | undefined>} refs - Array of refs to merge.
 * @returns {RefCallback<Instance> | null} A ref callback that assigns the value to all provided refs, or null if all refs are undefined.
 * @see https://documentation-components-react.vercel.app/helpers/hooks#useMergeRefs
 *
 * @example
 * const ref1 = useRef(null)
 * const ref2 = useRef(null)
 * const mergedRef = useMergeRefs([ref1, ref2])
 * <div ref={mergedRef} />
 */
export const useMergeRefs = <Instance>(
    refs: Array<Ref<Instance> | undefined>
): RefCallback<Instance> | null => {
    return useMemo(() => {
        if (refs.every(ref => ref == null)) {
            return null
        }

        return value => {
            refs.forEach(ref => {
                if (typeof ref === "function") {
                    ref(value)
                } else if (ref != null) {
                    ;(ref as RefObject<Instance | null>).current = value
                }
            })
        }
    }, refs)
}
