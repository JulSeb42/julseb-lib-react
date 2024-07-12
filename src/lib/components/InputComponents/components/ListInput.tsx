/*=============================================== ListInput ===============================================*/

import { forwardRef } from "react"
import { StyledListInput, StyledListInputItem } from "../styles"
import type { ILibListInput, ILibListInputItem } from "../types"

export function ListInputItem({
    "data-testid": testid,
    className,
    validation,
    inputBackground,
    children,
    isActive,
    onClick,
    readOnly,
    ...rest
}: ILibListInputItem) {
    return (
        <StyledListInputItem
            data-testid={testid && `${testid}.ListItem`}
            className={className && "ListItem"}
            onClick={onClick}
            $isActive={isActive}
            $readOnly={readOnly}
            $validation={validation}
            $inputBackground={inputBackground}
            {...rest}
        >
            {children}
        </StyledListInputItem>
    )
}

export const ListInput = forwardRef<HTMLDivElement, ILibListInput>(
    (
        {
            "data-testid": testid,
            className,
            children,
            direction = "down",
            inputBackground,
            validation,
            isOpen,
            inputVariant,
        },
        ref
    ) => {
        return (
            <StyledListInput
                data-testid={testid && `${testid}.ListInput`}
                className={className && "ListInput"}
                ref={ref}
                $isOpen={isOpen}
                $direction={direction}
                $inputBackground={inputBackground}
                $validation={validation}
                $inputVariant={inputVariant}
            >
                {children}
            </StyledListInput>
        )
    }
)
