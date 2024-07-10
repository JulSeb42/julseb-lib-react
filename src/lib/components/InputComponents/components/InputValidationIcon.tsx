/*=============================================== InputValidation component ===============================================*/

import { CheckCircle, CloseCircle } from "../../../icons"
import { LibIcon } from "../../LibIcon"
import { StyledInputValidationIcon } from "../styles"
import type { InputValidationIconProps } from "../types"

/**
 * @description Returns a icon on the right of an input when there's validation
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
}: InputValidationIconProps) {
    return (
        <StyledInputValidationIcon
            data-testid={testid && `${testid}.ValidationIconContainer`}
            className={className && "ValidationIconContainer"}
            $inputBackground={inputBackground}
            $validationStatus={status}
        >
            <LibIcon
                data-testid={testid && `${testid}.ValidationIconContainer.Icon`}
                className={className && "ValidationIconContainer__Icon"}
                icon={
                    status === "not-passed"
                        ? validationIcon?.iconValidationNotPassed || (
                              <CloseCircle
                                  data-testid={
                                      testid &&
                                      `${testid}.Validation.NotPassed.Icon`
                                  }
                                  className={
                                      className && "Validation__NotPassed__Icon"
                                  }
                                  size={16}
                              />
                          )
                        : validationIcon?.iconValidationPassed || (
                              <CheckCircle
                                  data-testid={
                                      testid &&
                                      `${testid}.Validation.Passed.Icon`
                                  }
                                  className={
                                      className && "Validation__Passed__Icon"
                                  }
                                  size={16}
                              />
                          )
                }
                size={
                    status === "not-passed"
                        ? validationIcon?.iconValidationNotPassedSize || 16
                        : validationIcon?.iconValidationPassedSize || 16
                }
            />
        </StyledInputValidationIcon>
    )
}
