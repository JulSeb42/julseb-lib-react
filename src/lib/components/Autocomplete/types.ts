import type { InputHTMLAttributes, Ref } from "react"
import type { IFuseOptions } from "fuse.js"
import type { LibIcon, LibInputListDirection, DispatchState } from "../../types"
import type {
    ILibInputBase,
    LibInputWithValidation,
} from "../InputComponents/types"

type ILibAutocompleteBase = InputHTMLAttributes<HTMLInputElement> &
    ILibInputBase &
    LibInputWithValidation & {
        ref?: Ref<HTMLInputElement>
        value: string
        setValue: DispatchState<string>
        listResults: Array<string>
        emptyText?: string
        listDirection?: LibInputListDirection
        fuzzyOptions?: IFuseOptions<string>
        icons?: {
            left?: LibIcon
            clear?: LibIcon
        }
        iconSizes?: {
            left?: number
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
