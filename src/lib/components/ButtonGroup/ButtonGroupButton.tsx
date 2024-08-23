/*=============================================== ButtonGroupButtons ===============================================*/

import { forwardRef } from "react"
import { capitalize, filterObject } from "ts-utils-julseb"
import { Button, ButtonIcon } from "../.."
import type { ILibButton } from "../Button/types"
import type { ILibButtonIcon } from "../ButtonIcon/types"
import type { LibButtonGroupButtonItem } from "../../types"
import type { ILibButtonGroupButton } from "./subtypes"

export const ButtonGroupButton = forwardRef<
    HTMLButtonElement,
    ILibButtonGroupButton
>(
    (
        {
            "data-testid": testid,
            className,
            button,
            color,
            variant,
            size,
            index,
            iconBaseUrl,
        },
        ref
    ) => {
        const commonProps: Partial<
            (ILibButton | ILibButtonIcon) & LibButtonGroupButtonItem
        > = {
            "data-testid":
                button["data-testid"] ||
                (testid && `${testid}.Button.${index}`),
            className: button.className || (className && "Button"),
            id: button.id,
            ref: ref || button.ref,
            color,
            variant: variant as any,
        }

        const filteredButtonRest = filterObject(
            button,
            // @ts-expect-error
            ([n]) => n !== "iconOnly"
        )

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
)
