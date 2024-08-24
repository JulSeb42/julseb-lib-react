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
            >
                <StyledInputImage
                    data-testid={
                        hasContainer && testid ? `${testid}.InputLabel` : testid
                    }
                    className={
                        hasContainer && className ? "InputLabel" : className
                    }
                    htmlFor={id}
                    $width={width}
                    $height={height}
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
