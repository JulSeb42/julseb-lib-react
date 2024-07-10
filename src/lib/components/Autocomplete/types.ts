/*=============================================== Autocomplete types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type { IFuseOptions } from "fuse.js"
import type { LibIcon, LibListDirection, DispatchState } from "../../types"
import type {
    InputBaseProps,
    InputValidationIcon,
} from "../InputComponents/types"

interface AutocompletePropsBase
    extends InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps,
        InputValidationIcon {
    value: string
    setValue: DispatchState<string>
    listResults: Array<string>
    emptyText?: string
    listDirection?: LibListDirection
    fuzzyOptions?: IFuseOptions<string> | undefined
    icons?: {
        iconLeft?: LibIcon
        clear?: LibIcon
    }
    iconSizes?: {
        iconLeft?: number
        clear?: number
    }
    counter?: never
    maxLength?: never
}

interface AutocompletePropsWithKeys extends AutocompletePropsBase {
    focusKeys?: Array<string>
    showKeys?: boolean
}

interface AutocompletePropsNoKeys extends AutocompletePropsBase {
    focusKeys?: undefined
    showKeys?: never
}

export type AutocompleteProps =
    | AutocompletePropsWithKeys
    | AutocompletePropsNoKeys
