/*=============================================== InputPhone types ===============================================*/

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
    ILibInputValidationIconComponent,
} from "../InputComponents/types"

export interface ILibInputPhone
    extends InputHTMLAttributes<HTMLInputElement>,
        ILibInputBase,
        ILibInputValidationIconComponent {
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
