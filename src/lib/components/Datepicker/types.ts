/*=============================================== Datepicker types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type {
    DispatchState,
    LibComponentBase,
    LibIcon,
    LibInputListDirection,
    LibInputPrefixAndSuffix,
    LibInputVariant,
} from "../../types"
import type {
    ILibInputBase,
    LibInputWithValidation,
} from "../InputComponents/types"

export type ILibDatepicker = Exclude<LibComponentBase<HTMLDivElement>, "as"> &
    InputHTMLAttributes<HTMLInputElement> &
    ILibInputBase &
    LibInputWithValidation & {
        minDate?: string
        maxDate?: string
        texts?: {
            weekDays?: {
                mon?: string
                tue?: string
                wed?: string
                thu?: string
                fri?: string
                sat?: string
                sun?: string
            }
            months?: {
                jan?: string
                feb?: string
                mar?: string
                apr?: string
                may?: string
                jun?: string
                jul?: string
                aug?: string
                sep?: string
                oct?: string
                nov?: string
                dec?: string
            }
        }
        value: string
        setValue: DispatchState<string>
        icons?: {
            prev?: LibIcon
            next?: LibIcon
            calendar?: LibIcon
            left?: LibIcon
        }
        iconsSizes?: {
            prev?: number
            next?: number
            calendar?: number
            left?: number
        }
        iconsBaseUrl?: string
        calendarDirection?: LibInputListDirection
        inputVariant?: LibInputVariant
        disabled?: boolean
        tabIndex?: number
        prefix?: LibInputPrefixAndSuffix
    }
