/*=============================================== Step ===============================================*/

import { forwardRef, type ElementType } from "react"
import classNames from "classnames"
import { Text } from "../../"
import { LibIcon } from "../LibIcon"
import { CheckCircle } from "../../icons"
import type {
    LibComponentBase,
    LibButtonLinkBlank,
    LibColorsHover,
    LibIcon as LibIconType,
    LibStepperDirection,
} from "../../types"
import { StyledStep, NumberContainer } from "./styles"
import { Link } from "react-router-dom"

type ILibStep = LibComponentBase<HTMLSpanElement> &
    LibButtonLinkBlank & {
        direction?: LibStepperDirection
        accentColor?: LibColorsHover
        isActive?: boolean
        isDone?: boolean
        iconActive?: LibIconType
        iconActiveSize?: number
        number?: number
    }

/**
 * @description Returns a Step component
 * @link https://documentation-components-react.vercel.app/components/stepper
 * @extends HTMLSpanElement & LibButtonLinkBlank
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop direction?: "column" | "row"
 * @prop accentColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"
 * @prop isActive?: boolean
 * @prop isDone?: boolean
 * @prop iconActive?: string | JSX.ElementType
 * @prop iconActiveSize?: number
 * @prop number?: number
 */

export const Step = forwardRef<HTMLSpanElement, ILibStep>(
    (
        {
            "data-testid": testid,
            as,
            children,
            className,
            direction = "row",
            accentColor = "primary",
            isActive,
            isDone,
            iconActiveSize = 16,
            iconActive = (
                <CheckCircle
                    data-testid={testid && `${testid}.NumberContainer.Icon`}
                    className={className && "Icon"}
                    size={iconActiveSize}
                />
            ),
            number,
            to,
            href,
            blank,
            onClick,
            ...rest
        },
        ref
    ) => {
        const getAs: ElementType = as
            ? as
            : to
            ? Link
            : onClick
            ? "button"
            : href
            ? "a"
            : "span"

        const isLink: boolean = !!(to || href || onClick)

        return (
            <StyledStep
                data-testid={testid}
                className={classNames(className, { StepLink: isLink })}
                ref={ref}
                as={getAs}
                to={to}
                onClick={onClick}
                href={href}
                target={blank ? "blank" : null}
                rel={blank ? "noreferrer noopener" : null}
                $direction={direction}
                $accentColor={accentColor}
                {...rest}
            >
                <NumberContainer
                    data-testid={testid && `${testid}.NumberContainer`}
                    className={classNames(
                        { NumberContainer: className },
                        { Active: isActive }
                    )}
                    $accentColor={accentColor}
                >
                    {isActive && isDone ? (
                        <LibIcon icon={iconActive} size={iconActiveSize} />
                    ) : (
                        number
                    )}
                </NumberContainer>

                <Text
                    tag="small"
                    data-testid={testid && `${testid}.Text`}
                    className={className && "Text"}
                >
                    {children}
                </Text>
            </StyledStep>
        )
    }
)
