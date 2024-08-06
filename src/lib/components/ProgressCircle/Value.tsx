/*=============================================== Value ===============================================*/

import { SrOnly } from "../../"
import { Value as StyledValue } from "./styles"
import type { ILibProgressCircleValue } from "./subtypes"

export function Value({
    "data-testid": testid,
    className,
    showValue,
    value,
}: ILibProgressCircleValue) {
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
