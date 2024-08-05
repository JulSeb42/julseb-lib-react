/*=============================================== InputValidation component ===============================================*/

import { CheckCircle, CloseCircle } from "../../../icons"
import { LibIcon } from "../../LibIcon"
import { StyledInputValidationIcon } from "../styles"
import type { ILibInputValidationIcon } from "../types"

/**
 * @description Returns a icon on the right of an input when there's validation
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop inputBackground: LibInputBackground | undefined
 * @prop validation: { status: LibValidationStatus }
 * @prop validationIcon: { iconValidationNotPassed?: string | JSX.Element; iconValidationNotPassedSize?: number; iconValidationPassed?: string | JSX.Element; iconValidationPassedSize?: number } | undefined
 */

export function InputValidationIcon({
    "data-testid": testid,
    className,
    validation: { status },
    validationIcon,
    inputBackground,
    iconBaseUrl,
}: ILibInputValidationIcon) {
    const commonIconProps = {
        className: className && "ValidationIcon",
        size: 16,
    }

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
                icon={
                    status === false
                        ? validationIcon?.iconValidationNotPassed || (
                              <CloseCircle
                                  data-testid={
                                      testid &&
                                      `${testid}.Validation.NotPassed.Icon`
                                  }
                                  {...commonIconProps}
                              />
                          )
                        : validationIcon?.iconValidationPassed || (
                              <CheckCircle
                                  data-testid={
                                      testid &&
                                      `${testid}.Validation.Passed.Icon`
                                  }
                                  {...commonIconProps}
                              />
                          )
                }
                size={
                    status === false
                        ? validationIcon?.iconValidationNotPassedSize || 16
                        : validationIcon?.iconValidationPassedSize || 16
                }
                baseUrl={iconBaseUrl}
            />
        </StyledInputValidationIcon>
    )
}
