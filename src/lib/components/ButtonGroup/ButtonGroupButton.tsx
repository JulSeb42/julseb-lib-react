/*=============================================== ButtonGroupButtons ===============================================*/

import { forwardRef } from "react"
import { capitalize, filterObject } from "ts-utils-julseb"
import { Button, ButtonIcon } from "../.."
import type { ILibButton } from "../Button/types"
import type { ILibButtonIcon } from "../ButtonIcon/types"
import type { LibButtonGroupButtonItem } from "../../types"
import type { ILibButtonGroup } from "./types"

export const ButtonGroupButton = forwardRef<
    HTMLButtonElement,
    Pick<
        ILibButtonGroup,
        "variant" | "color" | "className" | "data-testid" | "size"
    > & { button: LibButtonGroupButtonItem; i: number }
>(
    (
        { "data-testid": testid, className, button, color, variant, size, i },
        ref
    ) => {
        const commonProps: Partial<
            (ILibButton | ILibButtonIcon) & LibButtonGroupButtonItem
        > = {
            "data-testid":
                button["data-testid"] || (testid && `${testid}.Button.${i}`),
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

        if (button.iconOnly)
            return (
                <ButtonIcon
                    {...(commonProps as any)}
                    icon={button.iconOnly}
                    borderRadius={0}
                    size={size === "small" ? 24 : (34 as any)}
                    aria-label={
                        button["aria-label"] ||
                        capitalize(
                            typeof button.iconOnly === "string"
                                ? button.iconOnly
                                : "button"
                        )
                    }
                    iconSize={button?.iconSizes?.only}
                    {...(filteredButtonRest as any)}
                />
            )

        return (
            <Button
                {...(commonProps as any)}
                borderRadius={0}
                size={size as any}
                icons={{
                    left: button.iconLeft,
                    right: button.iconRight,
                }}
                iconSizes={{
                    left: button?.iconSizes?.left,
                    right: button?.iconSizes?.right,
                }}
                aria-label={button["aria-label"] || button.text}
                {...(filteredButtonRest as any)}
            >
                {button.text}
            </Button>
        )
    }
)
