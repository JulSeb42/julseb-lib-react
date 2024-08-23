/*=============================================== InputButton component ===============================================*/

import { LibIcon } from "../../LibIcon"
import { StyledInputButton } from "../styles"
import type { ILibInputButton } from "../types"

/**
 * @description Returns a button used on the right of an input
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 */
export function InputButton({
    "data-testid": testid,
    "aria-label": ariaLabel,
    onClick,
    icon,
    iconSize = 16,
    iconBaseUrl,
    text,
    disabled,
    inputBackground,
    validationStatus,
    className,
}: ILibInputButton) {
    return (
        <StyledInputButton
            aria-label={ariaLabel}
            data-testid={testid && `${testid}.Button`}
            className={className && "InputButton"}
            onClick={onClick}
            disabled={disabled}
            as={onClick ? "button" : "span"}
            type="button"
            $inputBackground={inputBackground}
            $validationStatus={validationStatus}
            $isSpan={!onClick}
            $disabled={disabled}
        >
            {icon ? (
                <LibIcon
                    icon={icon}
                    size={iconSize}
                    data-testid={testid && `${testid}.Button.Icon`}
                    className={className && "Icon"}
                    baseUrl={iconBaseUrl}
                />
            ) : (
                text
            )}
        </StyledInputButton>
    )
}
