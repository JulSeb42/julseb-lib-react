import type {
	FunctionComponent,
	ReactNode,
	ReactElement as ReactEl,
} from "react"

declare global {
	type FC<T> = FunctionComponent<T>
	type Children = ReactNode | Array<ReactNode>
	type ReactElement = ReactEl
}
