/*=============================================== Step ===============================================*/

import { forwardRef, type ElementType } from "react"
import { Text } from "../../"
import { LibIcon } from "../LibIcon"
import { CheckCircle } from "../../icons"
import type {
    LibComponentBase,
    LibButtonLinkBlank,
    LibColorsHover,
    LibIcon as LibIconType,
    LibStepperDirection
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
 * @extends HTMLSpanElement
 * @prop data-testid?: string
 * @prop as?: ElementType
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
                    className={className && "NumberContainer__Icon"}
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
                className={className}
                ref={ref}
                as={getAs}
                to={to}
                onClick={onClick}
                href={href}
                target={blank ? "blank" : null}
                rel={blank ? "noreferrer noopener" : null}
                $direction={direction}
                $accentColor={accentColor}
                $isActive={isActive || isDone}
                $isLink={isLink}
                {...rest}
            >
                <NumberContainer
                    data-testid={testid && `${testid}.NumberContainer`}
                    className={className && `${className}__NumberContainer`}
                    $isActive={isActive || isDone}
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
                    className={className && `${className}__Text`}
                >
                    {children}
                </Text>
            </StyledStep>
        )
    }
)
