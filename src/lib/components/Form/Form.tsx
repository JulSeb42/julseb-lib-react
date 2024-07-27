/*=============================================== Form component ===============================================*/

import { forwardRef } from "react"
import { Flexbox, Button } from "../../"
import type { ILibButton } from "../Button/types"
import { StyledForm } from "./styles"
import type { ILibForm } from "./types"

/**
 * @description Returns a Form component
 * @link https://documentation-components-react.vercel.app/components/form
 * @extends HTMLFormElement
 * @prop data-testid?: string
 * @prop buttonPrimary?: string | { text: string; iconLeft?: string | JSX.Element; iconRight?: string | JSX.Element; iconLeftSize?: number; iconRightSize?: number }
 * @prop buttonSecondary?: ButtonLinkRequired & { text: string; iconLeft?: string | JSX.Element; iconRight?: string | JSX.Element; iconLeftSize?: number; iconRightSize?: number }
 * @prop isLoading?: boolean
 * @prop disabled?: boolean
 * @prop gap?: "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"
 * @prop maxWidth?: string | number
 */

export const Form = forwardRef<HTMLFormElement, ILibForm>(
    (
        {
            "data-testid": testid,
            className,
            children,
            buttonPrimary,
            buttonSecondary,
            isLoading,
            disabled,
            gap = "s",
            maxWidth = "100%",
            ...rest
        },
        ref
    ) => {
        const buttonSecondaryProps: Pick<
            ILibButton,
            | "variant"
            | "icons"
            | "iconSizes"
            | "children"
            | "data-testid"
            | "className"
        > = {
            variant: "transparent",
            icons: {
                left:
                    typeof buttonSecondary === "object"
                        ? buttonSecondary.iconLeft
                        : undefined,
                right:
                    typeof buttonSecondary === "object"
                        ? buttonSecondary.iconRight
                        : undefined,
            },
            iconSizes: {
                left:
                    typeof buttonSecondary === "object"
                        ? buttonSecondary.iconLeftSize
                        : undefined,
                right:
                    typeof buttonSecondary === "object"
                        ? buttonSecondary.iconRightSize
                        : undefined,
            },
            children: buttonSecondary?.text,
            "data-testid":
                testid && `${testid}.ButtonsContainer.ButtonSecondary`,
            className: className && "ButtonSecondary",
        }

        return (
            <StyledForm
                data-testid={testid}
                ref={ref}
                className={className}
                $gap={gap}
                $maxWidth={maxWidth}
                {...rest}
            >
                {children}

                {(buttonPrimary || buttonSecondary) && (
                    <Flexbox
                        gap="xxs"
                        data-testid={testid && `${testid}.ButtonsContainer`}
                        className={className && "ButtonsContainer"}
                    >
                        {buttonPrimary && (
                            <Button
                                data-testid={
                                    testid &&
                                    `${testid}.ButtonsContainer.ButtonSubmit`
                                }
                                className={className && "ButtonSubmit"}
                                type="submit"
                                isLoading={isLoading}
                                disabled={disabled}
                                icons={{
                                    left:
                                        typeof buttonPrimary === "object"
                                            ? buttonPrimary.iconLeft
                                            : undefined,
                                    right:
                                        typeof buttonPrimary === "object"
                                            ? buttonPrimary.iconRight
                                            : undefined,
                                }}
                                iconSizes={{
                                    left:
                                        typeof buttonPrimary === "object"
                                            ? buttonPrimary.iconLeftSize
                                            : undefined,
                                    right:
                                        typeof buttonPrimary === "object"
                                            ? buttonPrimary.iconRightSize
                                            : undefined,
                                }}
                            >
                                {typeof buttonPrimary === "object"
                                    ? buttonPrimary.text
                                    : buttonPrimary}
                            </Button>
                        )}

                        {buttonSecondary &&
                            (buttonSecondary.onClick ? (
                                <Button
                                    type="button"
                                    onClick={buttonSecondary.onClick}
                                    {...(buttonSecondaryProps as any)}
                                    {...buttonSecondary}
                                />
                            ) : (
                                <Button
                                    to={buttonSecondary.to}
                                    {...(buttonSecondaryProps as any)}
                                    {...buttonSecondary}
                                />
                            ))}
                    </Flexbox>
                )}
            </StyledForm>
        )
    }
)
