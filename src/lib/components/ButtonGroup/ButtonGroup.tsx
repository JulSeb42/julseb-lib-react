import { useState, Fragment, type FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { ButtonGroupButton } from "./ButtonGroupButton"
import { ButtonGroupToggle } from "./ButtonGroupToggle"
import { StyledButtonGroup, Separator } from "./styles"
import type { ILibButtonGroup } from "./types"

/**
 * ButtonGroup component for grouping buttons or toggles with shared styles and optional separators.
 *
 * @component
 * @param {Object} props - ButtonGroup props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {string} [props.className] - Additional class names.
 * @param {Array<LibButtonGroupButtonItem>} [props.buttons] - Array of button items (used if toggles is not provided).
 * @param {Array<LibButtonGroupToggle>} [props.toggles] - Array of toggle items (used if buttons is not provided).
 * @param {"single" | "multi"} [props.toggleType="single"] - Toggle selection type (only if toggles is defined).
 * @param {string} [props.name] - Name for the toggle group (required when toggles is defined).
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.color="primary"] - Color of the group.
 * @param {"plain" | "transparent" | "ghost"} [props.variant="plain"] - Visual variant of the group.
 * @param {"default" | "small"} [props.size="default"] - Size of the group.
 * @param {"xxl" | "xl" | "l" | "m" | "s" | "xs" | "round" | "circle" | number | Object} [props.borderRadius] - Border radius for the group.
 * @param {string} [props.iconBaseUrl] - Base URL for icons.
 * @returns {JSX.Element} The rendered ButtonGroup component.
 *
 * @example
 * <ButtonGroup
 *   buttons={[
 *     { text: "Left", onClick: () => {} },
 *     { text: "Right", onClick: () => {} }
 *   ]}
 *   color="secondary"
 *   variant="transparent"
 * />
 * <ButtonGroup
 *   toggles={[
 *     { id: "a", text: "A" },
 *     { id: "b", text: "B" }
 *   ]}
 *   toggleType="multi"
 *   name="letters"
 * />
 */
export const ButtonGroup: FC<ILibButtonGroup> = ({
    "data-testid": testid,
    as,
    ref,
    className,
    buttons,
    color = "primary",
    variant = "plain",
    size = "default",
    borderRadius = size === "small" ? "s" : "m",
    toggles,
    toggleType = "single",
    name,
    iconBaseUrl,
    ...rest
}) => {
    const commonProps = {
        "data-testid": testid,
        className,
        color,
        variant,
        size,
    }

    const separatorProps = (i: number) => ({
        "data-testid": testid && `${testid}.Separator.${i}`,
        className: className && "Separator",
        $color: color,
    })

    const [allToggles, setAllToggles] = useState(
        toggles
            ? Object.assign(
                  {},
                  ...(toggles
                      ?.map(t => ({
                          [t.id]: t.value ?? false,
                      }))
                      ?.filter(v => v !== undefined) as any)
              )
            : null
    )

    return (
        <StyledButtonGroup
            data-testid={testid}
            ref={ref}
            as={as}
            className={className}
            $size={size}
            $borderRadius={borderRadius}
            $variant={variant}
            $color={color}
            {...rest}
        >
            {buttons?.map((button, i) => (
                <Fragment key={uuid()}>
                    <ButtonGroupButton
                        button={button}
                        index={i}
                        iconBaseUrl={iconBaseUrl}
                        {...(commonProps as any)}
                    />

                    {variant === "transparent" && i !== buttons.length - 1 && (
                        <Separator key={uuid()} {...separatorProps(i)} />
                    )}
                </Fragment>
            ))}

            {toggles?.map((toggle, i) => (
                <Fragment key={uuid()}>
                    <ButtonGroupToggle
                        {...(commonProps as any)}
                        toggle={toggle}
                        toggleType={toggleType}
                        name={name}
                        index={i}
                        toggles={allToggles}
                        setToggles={setAllToggles}
                        iconBaseUrl={iconBaseUrl}
                    />

                    {variant === "transparent" && i !== toggles.length - 1 && (
                        <Separator key={uuid()} {...separatorProps(i)} />
                    )}
                </Fragment>
            ))}
        </StyledButtonGroup>
    )
}
