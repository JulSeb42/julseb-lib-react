/*=============================================== InputImage component ===============================================*/

import { forwardRef, useCallback, useState } from "react"
import { InputContainer } from "../InputComponents"
import { EmptyContainer } from "./EmptyContainer"
import { HoverContainer } from "./HoverContainer"
import { StyledInputImage, StyledImage, StyledInput } from "./styles"
import type { ILibInputImage } from "./types"

/**
 * @description Returns a InputImage component
 * @link https://documentation-components-react.vercel.app/components/input-image
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop ref?: ForwardedRef<HTMLInputElement>
 * @prop id: string
 * @prop value: string
 * @prop width?: string | number
 * @prop height?: string | number
 * @prop size?: string | number
 * @prop borderRadius?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | { topLeft?: LibRadiuses; topRight?: LibRadiuses; bottomLeft?: LibRadiuses; bottomRight?: LibRadiuses }
 * @prop icons?: { empty?: string | JSX.Element; hover?: string | JSX.Element }
 * @prop iconSizes?: { empty?: number; hover?: number }
 * @prop iconBaseUrl?: string
 * @prop label?: string
 * @prop labelComment?: string
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string => only if element is not defined; element: ReactChildren => only if text is not defined; textColor?: Any color from the library; fontStyle?: CssFontStyle; icon?: string | JSX.Element; iconColor?: Any color from the library; iconSize?: number }
 * @prop validation?: { status: LibValidationStatus; message?: string; iconNotPassed?: LibIcon; iconNotPassedSize?: number; iconPassed?: LibIcon; iconPassedSize?: number; iconBaseUrl?: string }
 * @prop iconBaseUrl?: string
 * @prop containerStyle?: CSSProperties
 */
export const InputImage = forwardRef<HTMLInputElement, ILibInputImage>(
    (
        {
            "data-testid": testid,
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
        },
        ref
    ) => {
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
                    className={
                        hasContainer && className ? "InputLabel" : className
                    }
                    htmlFor={id}
                    $width={size ?? width}
                    $height={size ?? height}
                    $borderRadius={borderRadius}
                    $disabled={disabled}
                    $validationStatus={validation?.status}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {value === "" ? (
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
)
