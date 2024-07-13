/*=============================================== InputValidationHelper component ===============================================*/

import { getIconSizeFromFont } from "../../../lib-utils"
import { LibIcon } from "../../LibIcon"
import { CloseCircle, CheckCircle } from "../../../icons"
import {
    HelperBottomContainer,
    HelperBottomIconContainer,
    HelperBottom,
} from "../styles"
import type { ILibInputValidationHelper } from "../types"

/**
 * @description Returns a component for input validation, showing under the input
 * @access Only for building library, do not export
 * @prop data-testid: string | undefined
 * @prop className: string | undefined
 * @prop validation: ValidationHelper
 */

export function InputValidationHelper({
    "data-testid": testid,
    className,
    validation: {
        status,
        message,
        iconNotPassed = (
            <CloseCircle
                data-testid={
                    testid && `${testid}.ValidationHelper.IconContainer.Icon`
                }
                className={className && "ValidationHelper__IconContainer__Icon"}
                size={getIconSizeFromFont("small")}
                color="danger"
            />
        ),
        iconNotPassedSize = getIconSizeFromFont("small"),
        iconPassed = (
            <CheckCircle
                data-testid={
                    testid && `${testid}.ValidationHelper.IconContainer.Icon`
                }
                className={className && "ValidationHelper__IconContainer__Icon"}
                size={getIconSizeFromFont("small")}
                color="success"
            />
        ),
        iconPassedSize = getIconSizeFromFont("small"),
    },
}: ILibInputValidationHelper) {
    return (
        <HelperBottomContainer
            data-testid={testid && `${testid}.ValidationHelper`}
            className={className && "ValidationHelper"}
        >
            <HelperBottomIconContainer
                data-testid={
                    testid && `${testid}.ValidationHelper.IconContainer`
                }
                className={className && "ValidationHelper__IconContainer"}
            >
                <LibIcon
                    data-testid={
                        testid &&
                        `${testid}.ValidationHelper.IconContainer.Icon`
                    }
                    className={
                        className && "ValidationHelper__IconContainer__Icon"
                    }
                    icon={status === "not-passed" ? iconNotPassed : iconPassed}
                    size={
                        status === "not-passed"
                            ? iconNotPassedSize
                            : iconPassedSize
                    }
                    color={status === "not-passed" ? "danger" : "success"}
                />
            </HelperBottomIconContainer>

            <HelperBottom
                data-testid={testid && `${testid}.ValidationHelper.Text`}
                className={className && "ValidationHelper__Text"}
            >
                {message}
            </HelperBottom>
        </HelperBottomContainer>
    )
}
