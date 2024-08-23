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
 * @prop ref?: ForwardedRef<SVGElement>
 */
export const ProgressCircle = forwardRef<SVGElement, ILibProgressCircle>(
    (
        {
            "data-testid": testid,
            value,
            noAnimation,
            showValue,
            icon,
            iconSize,
            iconBaseUrl,
            color = "primary",
            className,
            containerStyle,
            ...rest
        },
        ref
    ) => {
        const progressFnProps = {
            "data-testid":
                testid &&
                (showValue || icon ? `${testid}.ProgressCircle` : testid),
            ref,
            noAnimation,
            value,
            color,
            className: showValue || icon ? "ProgressCircle" : className,
            ...rest,
        }

        return showValue || icon ? (
            <ProgressCircleContainer
                data-testid={testid}
                className={className}
                style={containerStyle}
            >
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
                            size={iconSize ?? PROGRESS_CIRCLE_SIZE * 0.4}
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
