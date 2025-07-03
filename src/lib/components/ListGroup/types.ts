import type { Ref } from "react"
import type {
	ClassNames,
	LibComponentBase,
	LibListGroupItem,
	LibShadows,
	ReactChildren,
} from "../../types"

/*====================== ListGroup ======================*/

interface ILibListGroupBase
	extends Omit<LibComponentBase<HTMLDivElement>, "title"> {
	title?:
		| string
		| {
				text: string
				isFixed?: boolean
				className?: ClassNames
				ref?: Ref<HTMLDivElement>
				shadowOnScroll?: LibShadows
		  }
	noSeparator?: boolean
	showNumbers?: boolean
}

interface ListGroupWithItems extends ILibListGroupBase {
	items: Array<LibListGroupItem>
	children?: never
}

interface ListGroupWithChildren extends ILibListGroupBase {
	items?: never
	children?: ReactChildren
}

export type ILibListGroup = ListGroupWithItems | ListGroupWithChildren

/*====================== ListGroupTitle ======================*/

interface ILibListGroupTitleBase extends LibComponentBase<HTMLDivElement> {
	isFixed?: boolean
	noSeparator?: boolean
}

interface ListGroupTitleWithShadow extends ILibListGroupTitleBase {
	shadow?: LibShadows
	listRef: Ref<HTMLDivElement>
}

interface ListGroupTitleWithoutShadow extends ILibListGroupTitleBase {
	shadow?: null | undefined
	listRef?: Ref<HTMLDivElement>
}

export type ILibListGroupTitle =
	| ListGroupTitleWithShadow
	| ListGroupTitleWithoutShadow

/*====================== ListGroupItem ======================*/

export interface ILibListGroupItem
	extends Omit<LibComponentBase<HTMLDivElement>, "title"> {
	title: ReactChildren
	body?: ReactChildren
	contentRight?: ReactChildren
	noSeparator?: boolean
	number?: number
}
