import type { FC } from "react"
import { uuid } from "@julseb-lib/utils"
import { Step } from "./Step"
import { StyledStepper } from "./styles"
import type { ILibStepper } from "./types"

/**
 * Stepper component for rendering a sequence of steps, supporting both array-based and custom children, with customizable direction, icons, and accent color.
 *
 * @component
 * @extends HTMLDivElement
 * @param {Object} props - Stepper props.
 * @param {string} [props.data-testid] - Test id for testing purposes.
 * @param {ElementType} [props.as] - Custom element type to render as.
 * @param {Ref<HTMLDivElement>} [props.ref] - Ref forwarded to the root element.
 * @param {Array<LibStep>} [props.steps] - Array of step objects to render (used if children is not defined).
 * @param {ReactNode} [props.children] - Custom step elements (used if steps is not defined).
 * @param {"column" | "row"} [props.direction="row"] - Direction of the stepper layout.
 * @param {number} [props.activeStep=0] - Index of the currently active step (1-based).
 * @param {string | JSX.Element} [props.iconActive] - Icon to display for active/done steps.
 * @param {number} [props.iconActiveSize] - Size of the active icon.
 * @param {string} [props.iconBaseUrl] - Base URL for the icon.
 * @param {"primary" | "secondary" | "success" | "danger" | "warning" | "white" | "gray" | "font" | "background"} [props.accentColor="primary"] - Accent color for the stepper.
 * @param {string} [props.className] - Additional class names.
 * @param {any} [props.rest] - Additional props passed to the root element.
 * @returns {JSX.Element} The rendered Stepper component.
 *
 * @see https://documentation-components-react.vercel.app/components/stepper
 * @example
 * <Stepper
 *   steps={[
 *     { text: "Step 1" },
 *     { text: "Step 2" },
 *     { text: "Step 3" }
 *   ]}
 *   activeStep={2}
 *   direction="row"
 * />
 */
export const Stepper: FC<ILibStepper> = ({
    "data-testid": testid,
    as,
    ref,
    children,
    steps,
    className,
    activeStep = 0,
    direction = "row",
    iconActive,
    iconActiveSize,
    iconBaseUrl,
    accentColor = "primary",
    ...rest
}) => {
    return (
        <StyledStepper
            data-testid={testid}
            ref={ref}
            as={as}
            className={className}
            $direction={direction}
            $accentColor={accentColor}
            {...rest}
        >
            {steps
                ? steps.map((step, i) => (
                      <Step
                          data-testid={
                              step["data-testid"] ||
                              (testid && `${testid}.Step-${i}`)
                          }
                          className={step.className || (className && "Step")}
                          id={step.id}
                          ref={step.ref}
                          number={i + 1}
                          isActive={activeStep >= i + 1}
                          isDone={activeStep >= i}
                          iconActive={iconActive}
                          iconActiveSize={iconActiveSize}
                          direction={direction}
                          accentColor={accentColor}
                          iconBaseUrl={iconBaseUrl}
                          key={uuid()}
                          {...step}
                      >
                          {step.text}
                      </Step>
                  ))
                : children}
        </StyledStepper>
    )
}
