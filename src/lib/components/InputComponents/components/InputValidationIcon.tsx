/*=============================================== InputValidation component ===============================================*/

import { CheckCircle, CloseCircle } from "../../../icons"
import { LibIcon } from "../../LibIcon"
import { StyledInputValidationIcon } from "../styles"
import type { ILibInputValidationIcon } from "../types"

const DEFAULT_ICON_SIZE = 16

/**
 * @description Returns a icon on the right of an input when there's validation
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop inputBackground: "light" | "dark" | undefined
 * @prop validation: { status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }
 */
export function InputValidationIcon({
    "data-testid": testid,
    className,
    validation,
    inputBackground,
}: ILibInputValidationIcon) {
    const commonIconProps = {
        className: className && "ValidationIcon",
        size: DEFAULT_ICON_SIZE,
    }

    const {
        status,
        iconPassed = (
            <CheckCircle
                data-testid={testid && `${testid}.Validation.Passed.Icon`}
                {...commonIconProps}
            />
        ),
        iconPassedSize = DEFAULT_ICON_SIZE,
        iconNotPassed = (
            <CloseCircle
                data-testid={testid && `${testid}.Validation.NotPassed.Icon`}
                {...commonIconProps}
            />
        ),
        iconNotPassedSize = DEFAULT_ICON_SIZE,
        iconBaseUrl,
    } = validation

    if (status === undefined) return null

    return (
        <StyledInputValidationIcon
            data-testid={testid && `${testid}.ValidationIconContainer`}
            className={className && "ValidationIconContainer"}
            $inputBackground={inputBackground}
            $validationStatus={status}
        >
            <LibIcon
                data-testid={testid && `${testid}.ValidationIconContainer.Icon`}
                className={className && "Icon"}
                icon={status === false ? iconNotPassed : iconPassed}
                size={status === false ? iconNotPassedSize : iconPassedSize}
                baseUrl={iconBaseUrl}
            />
        </StyledInputValidationIcon>
    )
}
