import {
	useMemo,
	type Ref,
	type RefCallback,
	type MutableRefObject,
} from "react"

/**
 * @description Hook to add possibility to add multiple refs to an element
 * @link https://doc-julseb-lib-react.vercel.app/helpers/hooks#useMergeRefs
 * @argument refs: Array<Ref<Instance> | undefined>
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
