/*=============================================== Value ===============================================*/

import { SrOnly } from "../../"
import { Value as StyledValue } from "./styles"

interface ILibValue {
    "data-testid": string | undefined
    className: string | undefined
    showValue: boolean | undefined
    value: number
}

export function Value({
    "data-testid": testid,
    className,
    showValue,
    value,
}: ILibValue) {
    if (!showValue)
        return (
            <SrOnly
                data-testid={testid && `${testid}.SrOnly`}
                className={className && "SrOnly"}
            >
                {value}%
            </SrOnly>
        )

    return (
        <StyledValue
            data-testid={testid && `${testid}.Value`}
            className={className && "Value"}
        >
            {value}%
        </StyledValue>
    )
}
