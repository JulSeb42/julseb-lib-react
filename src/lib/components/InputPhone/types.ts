/*=============================================== InputPhone types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type {
    CountryCode,
    LibListDirection,
    LibCountry,
    LibIcon,
    DispatchState,
} from "../../types"
import type {
    InputBaseProps,
    InputValidationIcon,
} from "../InputComponents/types"

export interface InputPhoneProps
    extends InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps,
        InputValidationIcon {
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
    listDirection?: LibListDirection
    countryButtonAriaLabel?: string
    textNoResult?: string
}
