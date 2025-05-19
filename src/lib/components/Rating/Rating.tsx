import { useCallback, type FC } from "react"
import { generateNumbers } from "@julseb-lib/utils"
import { Flexbox } from "../../"
import { roundIconSize } from "../../lib-utils"
import { InputContainer } from "../InputComponents"
import { Star, StarFull } from "../../icons"
import { LibIcon } from "../LibIcon"
import { RatingButton, BUTTON_SIZE } from "./styles"
import type { ILibRating } from "./types"

/**
 * Rating component for displaying a star-based rating input or read-only indicator with customizable icons, sizes, and labels.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Rating props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {number} props.rating - Current rating value.
 * @param {Dispatch<React.SetStateAction<number>>} [props.setRating] - Setter for the rating value (only if readOnly is not defined).
 * @param {boolean} [props.readOnly] - If true, disables interaction (only if setRating is not defined).
 * @param {{ default?: string | JSX.Element; checked?: string | JSX.Element }} [props.icons] - Custom icons for default and checked states.
 * @param {{ default?: number; checked?: number }} [props.iconSizes] - Icon sizes for default and checked states.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {string} [props.label] - Label for the rating input.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the rating input.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the rating input.
 * @param {Object} [props.validation] - Validation status and message.
 * @param {string} [props.id] - ID for the rating input.
 * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Rating component.
 *
 * @see https://documentation-components-react.vercel.app/components/rating
 * @example
 * <Rating rating={3} setRating={setRating} label="Rate this" />
 * <Rating rating={4} readOnly />
 */
export const Rating: FC<ILibRating> = ({
    "data-testid": testid,
    ref,
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
}) => {
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
                    testid && `${testid}.RatingContainer.Button.Icon.Default`
                }
                className={className && "IconRatingDefault"}
                size={iconSizes?.default || defaultIconSizes.default}
            />
        ),
        checked: (
            <StarFull
                data-testid={
                    testid && `${testid}.RatingContainer.Button.Icon.Checked`
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
                        onClick={!readOnly ? () => handleClick(n) : undefined}
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
