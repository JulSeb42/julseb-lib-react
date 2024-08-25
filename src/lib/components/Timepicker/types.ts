/*=============================================== Timepicker types ===============================================*/

import type { InputHTMLAttributes } from "react"
import type {
    LibComponentBase,
    LibIcon,
    LibInputListDirection,
    LibTimepickerHours,
    LibTimepickerHalfTimes,
    LibTimepickerQuarterTimes,
    LibTimepickerMinutes,
    DispatchState,
    LibTimepickerSteps,
    LibInputPrefixAndSuffix,
} from "../../types"
import type {
    ILibInputBase,
    ILibInputIcon,
    LibInputWithValidation,
} from "../InputComponents/types"

type ILibTimepickerBase = Exclude<LibComponentBase<HTMLInputElement>, "as"> &
    InputHTMLAttributes<HTMLInputElement> &
    ILibInputBase &
    ILibInputIcon &
    LibInputWithValidation & {
        iconClock?: LibIcon
        iconClockSize?: number
        listDirection?: LibInputListDirection
        prefix?: LibInputPrefixAndSuffix
    }

type TimepickerWithHourStep = ILibTimepickerBase & {
    step?: Extract<LibTimepickerSteps, "1h">
    minTime?: LibTimepickerHours
    maxTime?: LibTimepickerHours
    value: LibTimepickerHours
    setValue: (value: LibTimepickerHours) => void
}

type TimepickerWithHalfHourStep = ILibTimepickerBase & {
    step?: Extract<LibTimepickerSteps, "30min">
    minTime?: LibTimepickerHalfTimes
    maxTime?: LibTimepickerHalfTimes
    value: LibTimepickerHalfTimes
    setValue: DispatchState<LibTimepickerHalfTimes>
}

type TimepickerWithQuarterHourStep = ILibTimepickerBase & {
    step?: Extract<LibTimepickerSteps, "15min">
    minTime?: LibTimepickerQuarterTimes
    maxTime?: LibTimepickerQuarterTimes
    value: LibTimepickerQuarterTimes
    setValue: DispatchState<LibTimepickerQuarterTimes>
}

type TimepickerWithMinuteStep = ILibTimepickerBase & {
    step?: Extract<LibTimepickerSteps, "1min">
    minTime?: LibTimepickerMinutes
    maxTime?: LibTimepickerMinutes
    value: LibTimepickerMinutes
    setValue: DispatchState<LibTimepickerMinutes>
}

export type ILibTimepicker =
    | TimepickerWithHourStep
    | TimepickerWithHalfHourStep
    | TimepickerWithQuarterHourStep
    | TimepickerWithMinuteStep
