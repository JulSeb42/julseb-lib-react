import type { FC } from "react"
import { Flexbox, Button } from "../../"
import type { ILibButton } from "../Button/types"
import { StyledForm } from "./styles"
import type { ILibForm } from "./types"

/**
 * Form component for rendering a styled form with optional primary and secondary buttons.
 *
 * @component
 * @extends HTMLFormElement
 * @param {Object} props - Form props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ForwardedRef<HTMLFormElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string|Object} [props.buttonPrimary] - Primary button: string for label or object with { text, iconLeft, iconRight, iconLeftSize, iconRightSize }.
 * @param {Object} [props.buttonSecondary] - Secondary button: object with { onClick, disabled, to, href, text, iconLeft, iconRight, iconLeftSize, iconRightSize }.
 * @param {boolean} [props.isLoading] - Show loading indicator on the primary button.
 * @param {boolean} [props.disabled] - Disable the primary button.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs" | number | "0px"} [props.gap="s"] - Gap between form elements.
 * @param {string|number} [props.maxWidth="100%"] - Maximum width of the form.
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Form content.
 * @returns {JSX.Element} The rendered Form component.
 *
 * @example
 * <Form
 *   buttonPrimary="Submit"
 *   buttonSecondary={{ text: "Cancel", onClick: handleCancel }}
 *   gap="m"
 *   maxWidth={400}
 * >
 *   <Input label="Email" />
 *   <Input label="Password" />
 * </Form>
 */
export const Form: FC<ILibForm> = ({
    "data-testid": testid,
    ref,
    className,
    children,
    buttonPrimary,
    buttonSecondary,
    isLoading,
    disabled,
    gap = "s",
    maxWidth = "100%",
    ...rest
}) => {
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
        "data-testid": testid && `${testid}.ButtonsContainer.ButtonSecondary`,
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
