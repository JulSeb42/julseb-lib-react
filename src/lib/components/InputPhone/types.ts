import type { InputHTMLAttributes } from "react"
import type {
    CountryCode,
    LibInputListDirection,
    LibCountry,
    LibIcon,
    DispatchState,
} from "../../types"
import type {
    ILibInputBase,
    LibInputWithValidation,
} from "../InputComponents/types"

export type ILibInputPhone = InputHTMLAttributes<HTMLInputElement> &
    ILibInputBase &
    LibInputWithValidation & {
        selectedCountry: LibCountry | undefined
        setSelectedCountry: DispatchState<LibCountry | undefined>
        defaultCountry?: CountryCode
        type?: never
        icons?: {
            search?: LibIcon
            caret?: LibIcon
        }
        iconSizes?: {
            search?: number
            caret?: number
        }
        searchPlaceholder?: string
        listDirection?: LibInputListDirection
        countryButtonAriaLabel?: string
        textNoResult?: string
    }
