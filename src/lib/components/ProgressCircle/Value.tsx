import type { FC } from "react"
import { SrOnly } from "../../"
import { Value as StyledValue } from "./styles"
import type { ILibProgressCircleValue } from "./subtypes"

export const Value: FC<ILibProgressCircleValue> = ({
    "data-testid": testid,
    className,
    showValue,
    value,
}) => {
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
