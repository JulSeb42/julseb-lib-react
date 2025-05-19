import type { ElementType, FC } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import { Text } from "../../"
import { LibIcon } from "../LibIcon"
import { CheckCircle } from "../../icons"
import { StyledStep, NumberContainer } from "./styles"
import type { ILibStep } from "./types"

/**
 * Step component for rendering a single step in a stepper, supporting links, buttons, icons, and customizable appearance.
 *
 * @component
 * @extends HTMLSpanElement & LibButtonLinkBlank
 * @param {Object} props - Step props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLSpanElement>} [props.ref] - Ref forwarded to the root element.
 * @param {"column" | "row"} [props.direction="row"] - Direction of the step layout.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.accentColor="primary"] - Accent color for the step.
 * @param {boolean} [props.isActive] - Whether the step is active.
 * @param {boolean} [props.isDone] - Whether the step is completed.
 * @param {string | JSX.Element} [props.iconActive] - Icon to display when the step is active and done.
 * @param {number} [props.iconActiveSize=16] - Size of the active icon.
 * @param {number} [props.number] - Step number to display.
 * @param {string} [props.iconBaseUrl] - Base URL for the icon.
 * @param {() => void} [props.onClick] - Click handler (only if to or href are not defined).
 * @param {boolean} [props.disabled] - Whether the step is disabled (only if onClick is defined).
 * @param {string} [props.to] - Link target (only if onClick and href are not defined).
 * @param {string} [props.href] - Href for anchor (only if onClick and to are not defined).
 * @param {boolean} [props.blank] - Open link in new tab (only if to or href are defined).
 * @param {string} [props.className] - Additional class names.
 * @param {ReactNode} [props.children] - Step label/content.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Step component.
 *
 * @see https://documentation-components-react.vercel.app/components/stepper
 * @example
 * <Step number={1} isActive>Step 1</Step>
 */
export const Step: FC<ILibStep> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    className,
    direction = "row",
    accentColor = "primary",
    isActive,
    isDone,
    iconActiveSize = 16,
    iconActive = (
        <CheckCircle
            data-testid={testid && `${testid}.NumberContainer.Icon`}
            className={className && "Icon"}
            size={iconActiveSize}
        />
    ),
    iconBaseUrl,
    number,
    to,
    href,
    blank,
    onClick,
    ...rest
}) => {
    const getAs: ElementType = as
        ? as
        : to
        ? Link
        : onClick
        ? "button"
        : href
        ? "a"
        : "span"

    const isLink: boolean = !!(to || href || onClick)

    return (
        <StyledStep
            data-testid={testid}
            className={classNames(className, { StepLink: isLink })}
            ref={ref}
            as={getAs}
            to={to}
            onClick={onClick}
            href={href}
            target={blank ? "blank" : null}
            rel={blank ? "noreferrer noopener" : null}
            $direction={direction}
            $accentColor={accentColor}
            {...rest}
        >
            <NumberContainer
                data-testid={testid && `${testid}.NumberContainer`}
                className={classNames(
                    { NumberContainer: className },
                    { Active: isActive }
                )}
                $accentColor={accentColor}
            >
                {isActive && isDone ? (
                    <LibIcon
                        icon={iconActive}
                        size={iconActiveSize}
                        baseUrl={iconBaseUrl}
                    />
                ) : (
                    number
                )}
            </NumberContainer>

            <Text
                tag="small"
                data-testid={testid && `${testid}.Text`}
                className={className && "Text"}
            >
                {children}
            </Text>
        </StyledStep>
    )
}
