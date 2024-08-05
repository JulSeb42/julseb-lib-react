/*=============================================== ProgressCircle component ===============================================*/

import { forwardRef } from "react"
import { LibIcon } from "../LibIcon"
import { ProgressCircleFn } from "./ProgressCircleFn"
import { Value } from "./Value"
import {
    ProgressCircleContainer,
    Content,
    PROGRESS_CIRCLE_SIZE,
} from "./styles"
import type { ILibProgressCircle } from "./types"

/**
 * @description Returns a ProgressCircle component
 * @link https://documentation-components-react.vercel.app/components/progress-circle
 * @extends SVGElement
 * @prop data-testid?: string
 * @prop value: number
 * @prop animated?: boolean
 * @prop color?: Any color from the library
 * @prop showValue?: boolean => only if icon is not defined
 * @prop icon?: string | JSX.Element => only if showValue is not defined
 */

export const ProgressCircle = forwardRef<SVGElement, ILibProgressCircle>(
    (
        {
            "data-testid": testid,
            value,
            animated = true,
            showValue,
            icon,
            iconBaseUrl,
            color = "primary",
            className,
            ...rest
        },
        ref
    ) => {
        const progressFnProps = {
            "data-testid":
                testid &&
                (showValue || icon ? `${testid}.ProgressCircle` : testid),
            ref,
            animated,
            value,
            color,
            className: showValue || icon ? "ProgressCircle" : className,
            ...rest,
        }

        return showValue || icon ? (
            <ProgressCircleContainer data-testid={testid} className={className}>
                <ProgressCircleFn {...progressFnProps} />

                <Content
                    data-testid={testid && `${testid}.Content`}
                    className={className && "Content"}
                >
                    {icon && (
                        <LibIcon
                            data-testid={testid && `${testid}.Icon`}
                            className={className && "ProgressIcon"}
                            icon={icon}
                            size={PROGRESS_CIRCLE_SIZE * 0.4}
                            color="gray"
                            baseUrl={iconBaseUrl}
                        />
                    )}

                    <Value
                        data-testid={testid}
                        className={className}
                        value={value}
                        showValue={showValue}
                    />
                </Content>
            </ProgressCircleContainer>
        ) : (
            <ProgressCircleFn {...progressFnProps} />
        )
    }
)
