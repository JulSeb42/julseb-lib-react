/*=============================================== Autocomplete types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type { IFuseOptions } from "fuse.js"
import type { LibIcon, LibListDirection, DispatchState } from "../../types"
import type {
    ILibInputBase,
    ILibInputValidationIconComponent,
} from "../InputComponents/types"

interface ILibAutocompleteBase
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibInputBase,
        ILibInputValidationIconComponent {
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

interface AutocompleteWithKeys extends ILibAutocompleteBase {
    focusKeys?: Array<string>
    showKeys?: boolean
}

interface AutocompleteNoKeys extends ILibAutocompleteBase {
    focusKeys?: undefined
    showKeys?: never
}

export type ILibAutocomplete = AutocompleteWithKeys | AutocompleteNoKeys
