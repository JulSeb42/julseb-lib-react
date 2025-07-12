import { useEffect, useRef, type ReactNode } from "react"

export function useEventListener(
	eventNames: keyof GlobalEventHandlersEventMap,
	handler: () => void,
	element = globalThis,
) {
	const savedHandler = useRef<() => void>(null)
	useEffect(() => (savedHandler.current = handler), [handler])

	useEffect(() => {
		if (!element.addEventListener) return

		const listener = (e: EventListenerOrEventListenerObject) =>
			(savedHandler as any).current(e!)

		for (const e of eventNames as any) element.addEventListener(e, listener)

		return () => {
			for (const e of eventNames as any)
				element.removeEventListener(e, listener)
		}
	}, [element, eventNames])
}

export function fillCols(children: Array<ReactNode>, cols: Array<any>) {
	children.forEach((child, i) => cols[i % cols.length].push(child))
}
