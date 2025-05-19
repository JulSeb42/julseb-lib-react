import { useCallback, useState, type FC } from "react"
import { InputContainer } from "../InputComponents"
import { EmptyContainer } from "./EmptyContainer"
import { HoverContainer } from "./HoverContainer"
import { StyledInputImage, StyledImage, StyledInput } from "./styles"
import type { ILibInputImage } from "./types"

/**
 * InputImage component for rendering an image upload input with preview, custom icons, flexible size, border radius, and validation.
 *
 * @component
 * @extends HTMLInputElement
 * @param {Object} props - InputImage props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 *  * @param {Ref<HTMLInputElement>} [props.ref] - Ref forwarded to the input element.
 * @param {string} props.id - Input id.
 * @param {string} props.value - Image source value.
 * @param {string|number} [props.width=64] - Width of the image/input.
 * @param {string|number} [props.height=64] - Height of the image/input.
 * @param {string|number} [props.size] - Size for both width and height (overrides width/height if set).
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.borderRadius="m"] - Border radius for the image/input.
 * @param {{ empty?: string | JSX.Element; hover?: string | JSX.Element }} [props.icons] - Custom icons for empty and hover states.
 * @param {{ empty?: number; hover?: number }} [props.iconSizes] - Icon sizes for empty and hover states.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @param {string} [props.label] - Label for the input.
 * @param {string} [props.labelComment] - Additional comment for the label.
 * @param {string} [props.helper] - Helper text above the input.
 * @param {string|Object} [props.helperBottom] - Helper text or element below the input.
 * @param {Object} [props.validation] - Validation status and message.
 *  * @param {CSSProperties} [props.containerStyle] - Style for the input container.
 * @param {boolean} [props.disabled] - Disable the input.
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the input.
 * @returns {JSX.Element} The rendered InputImage component.
 *
 * @see https://documentation-components-react.vercel.app/components/input-image
 * @example
 * <InputImage
 *   id="profile"
 *   value={imageUrl}
 *   label="Profile picture"
 *   icons={{ empty: <Icon src="user" />, hover: <Icon src="edit" /> }}
 *   borderRadius="circle"
 *   size={80}
 *   validation={{ status: "success", message: "Image uploaded!" }}
 * />
 */
export const InputImage: FC<ILibInputImage> = ({
    "data-testid": testid,
    ref,
    className,
    id,
    label,
    labelComment,
    helper,
    helperBottom,
    validation,
    value,
    icons,
    iconSizes,
    iconBaseUrl,
    size,
    width = 64,
    height = 64,
    borderRadius = "m",
    disabled,
    containerStyle,
    ...rest
}) => {
    const hasContainer: boolean = !!(
        label ||
        labelComment ||
        helper ||
        helperBottom ||
        validation
    )

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true)
    }, [])
    const handleMouseLeave = useCallback(() => {
        setIsHovered(false)
    }, [])

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
            counter={undefined}
            maxLength={undefined}
            value={undefined}
            iconBaseUrl={iconBaseUrl}
            style={containerStyle}
            hasListOpen={undefined}
        >
            <StyledInputImage
                data-testid={
                    hasContainer && testid ? `${testid}.InputLabel` : testid
                }
                className={hasContainer && className ? "InputLabel" : className}
                htmlFor={id}
                $width={size ?? width}
                $height={size ?? height}
                $borderRadius={borderRadius}
                $disabled={disabled}
                $validationStatus={validation?.status}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {value === "" || !value ? (
                    <EmptyContainer
                        data-testid={testid}
                        className={className}
                        validation={validation}
                        icons={icons}
                        iconSizes={iconSizes}
                        iconBaseUrl={iconBaseUrl}
                    />
                ) : (
                    <StyledImage
                        data-testid={testid && `${testid}.Image`}
                        className={className && "Image"}
                        src={value}
                        alt="Image input"
                        $disabled={disabled}
                    />
                )}

                <HoverContainer
                    data-testid={testid}
                    className={className}
                    validation={validation}
                    icons={icons}
                    iconSizes={iconSizes}
                    isVisible={isHovered}
                    disabled={disabled}
                    iconBaseUrl={iconBaseUrl}
                />

                <StyledInput
                    data-testid={testid && `${testid}.Input`}
                    className={className && "Input"}
                    ref={ref}
                    id={id}
                    disabled={disabled}
                    type="file"
                    {...rest}
                />
            </StyledInputImage>
        </InputContainer>
    )
}
