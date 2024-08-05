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
 * @prop validation: { status: boolean | undefined; message: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number } | undefined
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
                className={className && "ValidationIconBottom"}
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
                className={className && "ValidationIconBottom"}
                size={getIconSizeFromFont("small")}
                color="success"
            />
        ),
        iconPassedSize = getIconSizeFromFont("small"),
    },
    iconBaseUrl,
}: ILibInputValidationHelper) {
    if (!message) return null

    return (
        <HelperBottomContainer
            data-testid={testid && `${testid}.ValidationHelper`}
            className={className && "ValidationHelper"}
        >
            <HelperBottomIconContainer
                data-testid={
                    testid && `${testid}.ValidationHelper.IconContainer`
                }
                className={className && "ValidationIconContainerBottom"}
            >
                <LibIcon
                    data-testid={
                        testid &&
                        `${testid}.ValidationHelper.IconContainer.Icon`
                    }
                    className={className && "ValidationIconBottom"}
                    icon={status === false ? iconNotPassed : iconPassed}
                    size={status === false ? iconNotPassedSize : iconPassedSize}
                    color={status === false ? "danger" : "success"}
                    baseUrl={iconBaseUrl}
                />
            </HelperBottomIconContainer>

            <HelperBottom
                data-testid={testid && `${testid}.ValidationHelper.Text`}
                className={className && "ValidationTextBottom"}
            >
                {message}
            </HelperBottom>
        </HelperBottomContainer>
    )
}
