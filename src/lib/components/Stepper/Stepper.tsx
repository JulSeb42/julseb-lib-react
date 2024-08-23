/*=============================================== Stepper component ===============================================*/

import { forwardRef } from "react"
import { uuid } from "ts-utils-julseb"
import { Step } from "./Step"
import { StyledStepper } from "./styles"
import type { ILibStepper } from "./types"

/**
 * @description Returns a Stepper component
 * @link https://documentation-components-react.vercel.app/components/stepper
 * @extends HTMLDivElement
 * @prop data-testid?: string
 * @prop as?: ElementType
 * @prop ref?: ForwardedRef<HTMLDivElement>
 *
 * @type LibStep
 * @extends LibButtonLinkBlank
 * @prop data-testid?: string
 * @prop className?: string
 */
export const Stepper = forwardRef<HTMLDivElement, ILibStepper>(
    (
        {
            "data-testid": testid,
            as,
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
        },
        ref
    ) => {
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
                              className={
                                  step.className || (className && "Step")
                              }
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
)
