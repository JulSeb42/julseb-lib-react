/*=============================================== Tiepicker demo ===============================================*/

import { useState } from "react"
import { Timepicker } from "../../../"
import type {
    LibTimepickerHours,
    LibTimepickerHalfTimes,
    LibTimepickerQuarterTimes,
    LibTimepickerMinutes,
} from "../../../types"
import type { ILibTimepicker } from "../types"

export const TimepickerPreview = (
    props: Partial<Exclude<ILibTimepicker, "value" | "setValue">>
) => {
    const [valueHour, setValueHour] = useState<LibTimepickerHours>("06:00")
    const [valueHalfHour, setValueHalfHour] =
        useState<LibTimepickerHalfTimes>("06:30")
    const [valueQuarterHour, setValueQuarterHour] =
        useState<LibTimepickerQuarterTimes>("06:45")
    const [valueMinute, setValueMinute] =
        useState<LibTimepickerMinutes>("03:12")

    if (props.step === "30min")
        return (
            <Timepicker
                {...props}
                data-testid="testid"
                className="className"
                step="30min"
                value={valueHalfHour}
                setValue={setValueHalfHour}
            />
        )

    if (props.step === "15min")
        return (
            <Timepicker
                {...props}
                data-testid="testid"
                className="className"
                step="15min"
                value={valueQuarterHour}
                setValue={setValueQuarterHour}
            />
        )

    if (props.step === "1min")
        return (
            <Timepicker
                {...props}
                data-testid="testid"
                className="className"
                step="1min"
                value={valueMinute}
                setValue={setValueMinute}
            />
        )

    return (
        <Timepicker
            {...(props as any)}
            data-testid="testid"
            className="className"
            step="1h"
            value={valueHour}
            setValue={setValueHour}
        />
    )
}
