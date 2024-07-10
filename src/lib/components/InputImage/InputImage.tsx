/*=============================================== InputImage component ===============================================*/

import { forwardRef, useCallback, useState } from "react"
import { LibIcon } from "../LibIcon"
import { Image, Edit } from "../../icons"
import { InputContainer } from "../InputComponents"
import {
    StyledInputImage,
    StyledEmptyContainer,
    StyledHoverContainer,
    StyledImage,
    StyledInput,
} from "./styles"
import type { InputImageProps } from "./types"
import type { ContainerProps } from "./other-types"

/**
 * @description Returns a InputImage component
 * @link https://documentation-components-react.vercel.app/components/input-image
 * @extends HTMLInputElement
 * @prop data-testid?: string
 * @prop label?: string | JSX.Element
 * @prop helper?: string
 * @prop helperBottom?: string | { text: string; textColor?: LibAllColors; fontStyle?: FontStyle; icon?: string | JSX.Element; iconColor?: LibAllColors; iconSize?: number }
 * @prop validation?: { status: LibValidationStatus; message: string; iconNotPassed?: string | JSX.Element; iconNotPassedSize?: number; iconPassed?: string | JSX.Element; iconPassedSize?: number }
 * @prop id: string
 * @prop value: string
 * @prop width?: string | number
 * @prop height?: string | number
 * @prop borderRadius?: LibRadiusProps
 * @prop icons?: { empty?: string | JSX.Element; hover?: string | JSX.Element; sizeEmpty?: number; sizeHover?: number }
 */

function EmptyContainer({
    "data-testid": testid,
    className,
    validation,
    iconSize = 48,
    icon = (
        <Image
            data-testid={testid && `${testid}.EmptyContainer.Icon`}
            className={className && "EmptyContainer__Icon"}
            size={iconSize}
        />
    ),
}: ContainerProps) {
    return (
        <StyledEmptyContainer
            data-testid={testid && `${testid}.EmptyContainer`}
            className={className && "EmptyContainer"}
            $validation={validation}
        >
            <LibIcon icon={icon} size={iconSize} />
        </StyledEmptyContainer>
    )
}

function HoverContainer({
    "data-testid": testid,
    className,
    validation,
    iconSize = 32,
    icon = (
        <Edit
            data-testid={testid && `${testid}.HoverContainer.Icon`}
            className={className && "HoverContainer__Icon"}
            size={iconSize}
        />
    ),
    isVisible,
    disabled = false,
}: ContainerProps & {
    isVisible: boolean
    disabled: boolean | undefined
}) {
    return (
        <StyledHoverContainer
            data-testid={testid && `${testid}.HoverContainer`}
            className={className && "HoverContainer"}
            $validation={validation}
            $isVisible={isVisible}
            $disabled={disabled}
        >
            <LibIcon icon={icon} size={iconSize} />
        </StyledHoverContainer>
    )
}

export const InputImage = forwardRef<HTMLInputElement, InputImageProps>(
    (
        {
            "data-testid": testid,
            className,
            id,
            label,
            helper,
            helperBottom,
            validation,
            value,
            icons,
            iconSizes,
            width = 64,
            height = 64,
            borderRadius = "m",
            disabled,
            ...rest
        },
        ref
    ) => {
        const hasContainer: boolean = !!(
            label ||
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
                helper={helper}
                helperBottom={helperBottom}
                validation={validation}
                counter={undefined}
                maxLength={undefined}
                value={undefined}
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
                    $validation={validation?.status}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {value === "" ? (
                        <EmptyContainer
                            data-testid={testid}
                            className={className}
                            validation={validation?.status}
                            icon={icons?.empty}
                            iconSize={iconSizes?.empty}
                        />
                    ) : (
                        <StyledImage
                            src={value}
                            alt="Image input"
                            data-testid={testid && `${testid}.Image`}
                            className={className && "Image"}
                            $disabled={disabled}
                        />
                    )}

                    <HoverContainer
                        data-testid={testid}
                        className={className}
                        validation={validation?.status}
                        icon={icons?.hover}
                        iconSize={iconSizes?.hover}
                        isVisible={isHovered}
                        disabled={disabled}
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
