import {
	useMemo,
	type Ref,
	type RefCallback,
	type MutableRefObject,
} from "react"

/**
 * Hook to merge multiple refs into a single ref callback for use on a single element.
 *
 * @hook
 *
 * @example
 * const ref1 = useRef<HTMLDivElement>(null)
 * const ref2 = useRef<HTMLDivElement>(null)
 * const mergedRef = useMergeRefs([ref1, ref2])
 *
 * return <div ref={mergedRef}>Content</div>
 *
 * @template Instance - Type of the element instance being referenced
 * @param {Array<Ref<Instance> | undefined>} refs - Array of refs to merge together
 *
 * @returns {RefCallback<Instance> | null} Merged ref callback or null if all refs are null/undefined
 *
 * @see https://doc-julseb-lib-react.vercel.app/helpers/hooks#useMergeRefs
 */
export const useMergeRefs = <Instance>(
	refs: Array<Ref<Instance> | undefined>,
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
					;(ref as MutableRefObject<Instance | null>).current = value
				}
			})
		}
	}, refs)
}
