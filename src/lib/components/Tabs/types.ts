import type { ButtonHTMLAttributes } from "react"
import type {
    LibComponentBase,
    LibTabVariant,
    LibTabJustify,
    LibTabItem,
} from "../../types"

export interface ILibTabsContainer extends LibComponentBase<HTMLDivElement> {}

export interface ILibTabsButtonsContainer
    extends LibComponentBase<HTMLDivElement> {
    justify?: LibTabJustify
    variant?: LibTabVariant
}

export interface ILibTabButton
    extends LibComponentBase<HTMLButtonElement>,
        ButtonHTMLAttributes<HTMLButtonElement> {
    isActive: boolean
    onClick: () => void
    justify?: LibTabJustify
    variant?: LibTabVariant
}

export interface ILibTabItem extends LibComponentBase<HTMLDivElement> {
    isActive: boolean
}

interface ILibTabsBase extends LibComponentBase<HTMLDivElement> {
    tabsItems: Array<LibTabItem>
    justify?: LibTabJustify
    active?: number
    variant?: LibTabVariant
    children?: never
}

interface TabsInUrl extends ILibTabsBase {
    showInUrl?: true
    queries?: Array<Array<string>>
}

interface TabsNotInUrl extends ILibTabsBase {
    showInUrl?: false | undefined | null | never
    queries?: never
}

export type ILibTabs = TabsInUrl | TabsNotInUrl
