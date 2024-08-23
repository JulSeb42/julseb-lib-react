/*=============================================== ListInputItem component ===============================================*/

import { forwardRef } from "react"
import classNames from "classnames"
import { StyledListInputItem } from "../styles"
import type { ILibListInputItem } from "../types"

/**
 * @description Item for lists used in Inputs
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 */
export const ListInputItem = forwardRef<HTMLSpanElement, ILibListInputItem>(
    (
        {
            "data-testid": testid,
            className,
            validation,
            inputBackground,
            children,
            isActive,
            onClick,
            readOnly,
            isHovered,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledListInputItem
                data-testid={testid && `${testid}.ListItem`}
                ref={ref}
                className={classNames(
                    { ListItem: className },
                    { Active: isActive },
                    { Hovered: isHovered }
                )}
                onClick={onClick}
                $readOnly={readOnly}
                $validation={validation}
                $inputBackground={inputBackground}
                {...rest}
            >
                {children}
            </StyledListInputItem>
        )
    }
)
