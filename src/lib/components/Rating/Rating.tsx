/*=============================================== Rating component ===============================================*/

import { forwardRef, useCallback } from "react"
import { generateNumbers } from "ts-utils-julseb"
import { Flexbox, roundIconSize } from "../../"
import { InputContainer } from "../InputComponents"
import { Star, StarFull } from "../../icons"
import { LibIcon } from "../LibIcon"
import { RatingButton, BUTTON_SIZE } from "./styles"
import type { RatingProps } from "./types"

/**
 * @description Returns a Rating component
 * @link https://documentation-components-react.vercel.app/components/rating
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop rating: number
 * @prop setRating: Dispatch<SetStateAction<number>>
 * @prop readOnly?: boolean => only if `setRating` is not defined
 * @prop icons?: { default?: string | JSX.Element; checked?: string | JSX.Element }
 * @prop iconSizes?: { default?: number; checked?: number }
 * @prop label?: string | JSX.Element
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string; textColor?: LibAllColors; fontStyle?: FontStyle; icon?: string | JSX.Element; iconColor?: LibAllColors; iconSize?: number }
 * @prop validation?: { status: LibValidationStatus; message: string; iconNotPassed?: string | JSX.Element; iconNotPassedSize?: number; iconPassed?: string | JSX.Element; iconPassedSize?: number }
 */

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
    (
        {
            "data-testid": testid,
            className,
            rating,
            setRating,
            readOnly,
            iconSizes,
            icons,
            label,
            helper,
            helperBottom,
            id,
            validation,
            ...rest
        },
        ref
    ) => {
        const hasContainer = !!(label || helper || helperBottom || validation)

        const defaultIconSizes = {
            default: roundIconSize(BUTTON_SIZE),
            checked: roundIconSize(BUTTON_SIZE),
        }

        const defaultIcons = {
            default: (
                <Star
                    data-testid={
                        testid &&
                        `${testid}.RatingContainer.Button.Icon.Default`
                    }
                    className={
                        className && "RatingContainer__Button__Icon__Default"
                    }
                    size={iconSizes?.default || defaultIconSizes.default}
                />
            ),
            checked: (
                <StarFull
                    data-testid={
                        testid &&
                        `${testid}.RatingContainer.Button.Icon.Checked`
                    }
                    className={
                        className && "RatingContainer__Button__Icon__Checked"
                    }
                    size={iconSizes?.checked || defaultIconSizes.checked}
                />
            ),
        }

        const handleClick = useCallback(
            (n: number) => {
                setRating!(n + 1)
            },
            [setRating]
        )

        return (
            <InputContainer
                data-testid={testid}
                className={className}
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                validation={validation}
                value={rating}
                counter={false}
                maxLength={undefined}
            >
                <Flexbox
                    data-testid={
                        hasContainer ? `${testid}.RatingContainer` : testid
                    }
                    className={hasContainer ? "RatingContainer" : className}
                    alignItems="center"
                    justifyContent="flex-start"
                    gap="xs"
                    ref={ref}
                    {...rest}
                >
                    {generateNumbers(0, 4).map(n => (
                        <RatingButton
                            data-testid={
                                testid && `${testid}.RatingContainer.Button`
                            }
                            className={className && "RatingContainer__Button"}
                            as={readOnly ? "span" : "button"}
                            onClick={
                                !readOnly ? () => handleClick(n) : undefined
                            }
                            type="button"
                            $isReadOnly={readOnly || false}
                            $validationStatus={validation?.status}
                            key={n}
                        >
                            <LibIcon
                                data-testid={
                                    testid &&
                                    (n >= rating
                                        ? `${testid}.RatingContainer.Button.Icon.Default`
                                        : `${testid}.RatingContainer.Button.Icon.Checked`)
                                }
                                className={
                                    className &&
                                    (n >= rating
                                        ? "RatingContainer__Button__Icon__Default"
                                        : "RatingContainer__Button__Icon__Checked")
                                }
                                icon={
                                    n >= rating
                                        ? icons?.default || defaultIcons.default
                                        : icons?.checked || defaultIcons.checked
                                }
                                size={
                                    n >= rating
                                        ? iconSizes?.default ||
                                          defaultIconSizes.default
                                        : iconSizes?.checked ||
                                          defaultIconSizes?.checked
                                }
                            />
                        </RatingButton>
                    ))}
                </Flexbox>
            </InputContainer>
        )
    }
)
