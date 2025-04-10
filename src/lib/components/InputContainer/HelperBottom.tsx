import type { FC } from "react"
import { LibIcon } from "../LibIcon"
import { getIconSizeFromFont } from "../../lib-utils"
import {
    StyledHelperBottom,
    HelperBottomContainer,
    HelperBottomIconContainer,
} from "./styles"
import type { ILibHelperBottom } from "./subtypes"

export const HelperBottom: FC<ILibHelperBottom> = ({
    "data-testid": testid,
    className,
    helperBottom,
    iconBaseUrl,
}) => {
    if (typeof helperBottom === "string") {
        return <StyledHelperBottom>{helperBottom}</StyledHelperBottom>
    }

    if (typeof helperBottom === "object") {
        const {
            element,
            text,
            textColor,
            fontStyle,
            icon,
            iconColor = "primary",
            iconSize = getIconSizeFromFont("small") as number,
            linkColor,
        } = helperBottom

        if (element)
            return (
                <StyledHelperBottom linkColor={linkColor}>
                    {element}
                </StyledHelperBottom>
            )

        if (icon)
            return (
                <HelperBottomContainer
                    data-testid={testid && `${testid}.HelperBottomContainer`}
                    className={className && "HelperBottomContainer"}
                >
                    <HelperBottomIconContainer
                        data-testid={
                            testid && `${testid}.HelperBottom.IconContainer`
                        }
                        className={className && "BottomIconContainer"}
                        $iconSize={iconSize}
                    >
                        <LibIcon
                            data-testid={
                                testid &&
                                `${testid}.HelperBottom.IconContainer.Icon`
                            }
                            className={className && "HelperBottomIcon"}
                            icon={icon}
                            color={iconColor}
                            size={iconSize || getIconSizeFromFont("small")}
                            baseUrl={iconBaseUrl}
                        />
                    </HelperBottomIconContainer>

                    <StyledHelperBottom
                        data-testid={testid && `${testid}.HelperBottom.Text`}
                        className={className && "HelperBottomText"}
                        color={textColor}
                        linkColor={linkColor}
                        $fontStyle={fontStyle}
                        $iconSize={iconSize}
                        $hasIcon
                    >
                        {helperBottom.text}
                    </StyledHelperBottom>
                </HelperBottomContainer>
            )

        return (
            <StyledHelperBottom
                data-testid={testid && `${testid}.HelperBottom`}
                className={className && "HelperBottom"}
                color={textColor}
                $fontStyle={fontStyle}
                $hasIcon={false}
            >
                {text}
            </StyledHelperBottom>
        )
    }

    return null
}
