/*=============================================== Rating component ===============================================*/

import { forwardRef, useCallback } from "react"
import { generateNumbers } from "ts-utils-julseb"
import { Flexbox } from "../../"
import { roundIconSize } from "../../lib-utils"
import { InputContainer } from "../InputComponents"
import { Star, StarFull } from "../../icons"
import { LibIcon } from "../LibIcon"
import { RatingButton, BUTTON_SIZE } from "./styles"
import type { ILibRating } from "./types"

/**
 * @description Returns a Rating component
 * @link https://documentation-components-react.vercel.app/components/rating
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLDivElement>
 * @prop rating: number
 * @prop setRating: Dispatch<SetStateAction<number>> => only if readOnly is not defined
 * @prop readOnly: boolean => only if setRating is not defined
 * @prop icons?: { default?: string | JSX.Element; checked?: string | JSX.Element }
 * @prop iconSizes?: { default?: number; checked?: number }
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }
 * @prop validation?: { status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }
 * @prop iconBaseUrl?: string
 * @prop containerStyle?: CSSProperties
 */
export const Rating = forwardRef<HTMLDivElement, ILibRating>(
    (
        {
            "data-testid": testid,
            className,
            rating,
            setRating,
            readOnly,
            iconSizes,
            icons,
            iconBaseUrl,
            label,
            labelComment,
            helper,
            helperBottom,
            id,
            validation,
            containerStyle,
            ...rest
        },
        ref
    ) => {
        const hasContainer = !!(
            label ||
            labelComment ||
            helper ||
            helperBottom ||
            validation
        )

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
                    className={className && "IconRatingDefault"}
                    size={iconSizes?.default || defaultIconSizes.default}
                />
            ),
            checked: (
                <StarFull
                    data-testid={
                        testid &&
                        `${testid}.RatingContainer.Button.Icon.Checked`
                    }
                    className={className && "IconRatingChecked"}
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
                labelComment={labelComment}
                helper={helper}
                helperBottom={helperBottom}
                validation={validation}
                value={rating}
                counter={false}
                maxLength={undefined}
                iconBaseUrl={iconBaseUrl}
                style={containerStyle}
                hasListOpen={undefined}
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
                            className={
                                className && n >= rating
                                    ? "ButtonRatingDefault"
                                    : "ButtonRatingChecked"
                            }
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
                                        ? "IconRatingDefault"
                                        : "IconRatingChecked")
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
                                baseUrl={iconBaseUrl}
                            />
                        </RatingButton>
                    ))}
                </Flexbox>
            </InputContainer>
        )
    }
)
