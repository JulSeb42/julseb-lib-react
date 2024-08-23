/*=============================================== ListInput component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { StyledListInput } from "../styles"
import type { ILibListInput } from "../types"

/**
 * @description Lists used in Inputs
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 */
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
                className={classNames(
                    { ListInput: className },
                    { Open: isOpen }
                )}
                ref={ref}
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
