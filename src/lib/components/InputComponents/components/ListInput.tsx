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
 * @prop validation: boolean | undefined
 * @prop inputBackground: "light" | "dark" | undefined
 * @prop children?: ReactChildren
 * @prop isActive: boolean
 * @prop isHovered?: boolean => only if isActive is defined
 * @prop onClick: MouseEventHandler<HTMLSpanElement> => only if isActive is defined
 * @prop readOnly?: boolean => only if isActive is not defined
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
