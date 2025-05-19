import type { FC } from "react"
import { capitalize, filterObject } from "@julseb-lib/utils"
import { Button, ButtonIcon } from "../.."
import type { ILibButton } from "../Button/types"
import type { ILibButtonIcon } from "../ButtonIcon/types"
import type { LibButtonGroupButtonItem } from "../../types"
import type { ILibButtonGroupButton } from "./subtypes"

export const ButtonGroupButton: FC<ILibButtonGroupButton> = ({
    "data-testid": testid,
    ref,
    className,
    button,
    color,
    variant,
    size,
    index,
    iconBaseUrl,
}) => {
    const commonProps: Partial<
        (ILibButton | ILibButtonIcon) & LibButtonGroupButtonItem
    > = {
        "data-testid":
            button["data-testid"] || (testid && `${testid}.Button.${index}`),
        className: button.className || (className && "Button"),
        id: button.id,
        ref: (ref || button.ref) as any,
        color,
        variant: variant as any,
    }

    // @ts-ignore
    const filteredButtonRest = filterObject(button, ([n]) => n !== "iconOnly")

    if (button.icons && button.icons.only)
        return (
            <ButtonIcon
                {...(commonProps as any)}
                icon={button.icons.only}
                borderRadius={0}
                size={size === "small" ? 24 : (34 as any)}
                aria-label={
                    button["aria-label"] ||
                    capitalize(
                        typeof button.icons.only === "string"
                            ? button.icons.only
                            : "button"
                    )
                }
                iconSize={button?.iconSizes?.only}
                iconBaseUrl={iconBaseUrl}
                {...(filteredButtonRest as any)}
            />
        )

    return (
        <Button
            {...(commonProps as any)}
            borderRadius={0}
            size={size as any}
            icons={{
                left: button.icons?.left,
                right: button.icons?.right,
            }}
            iconSizes={{
                left: button?.iconSizes?.left,
                right: button?.iconSizes?.right,
            }}
            aria-label={button["aria-label"] || button.text}
            iconBaseUrl={iconBaseUrl}
            {...(filteredButtonRest as any)}
        >
            {button.text}
        </Button>
    )
}
