import { forwardRef, type ChangeEvent } from "react"
import { roundIconSize } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import { StyledToggle, ToggleInput, ToggleLabel } from "./styles"
import type { ILibButtonGroupToggle } from "./subtypes"

export const ButtonGroupToggle = forwardRef<
    HTMLLabelElement,
    ILibButtonGroupToggle
>(
    (
        {
            "data-testid": testid,
            className,
            toggle,
            toggleType,
            color,
            variant,
            size,
            name,
            index,
            toggles,
            setToggles,
            iconBaseUrl,
        },
        ref
    ) => {
        const handleSingle = (e: ChangeEvent<HTMLInputElement>) => {
            const { id, checked } = e.target

            setToggles(prevState => {
                const nextState: { [id: string]: boolean } = {}

                Object.keys(prevState).forEach(key => {
                    nextState[key] = false
                })
                return { ...nextState, [id]: checked }
            })
        }

        const handleUncheckRadio = () => {
            if (toggles[toggle.id] === true && toggleType === "single") {
                setToggles(prevState => {
                    const nextState: { [id: string]: boolean } = {}

                    Object.keys(prevState).forEach(key => {
                        nextState[key] = false
                    })

                    return nextState
                })
            }
        }

        const handleMulti = (e: ChangeEvent<HTMLInputElement>) =>
            setToggles({ ...toggles, [e.target.id]: e.target.checked })

        return (
            <StyledToggle
                data-testid={
                    toggle["data-testid"] ||
                    (testid && `${testid}.ToggleContainer.${index}`)
                }
                ref={ref}
                className={toggle.className ?? (className && "ToggleContainer")}
                onClick={handleUncheckRadio}
                htmlFor={toggle.id}
                $color={color!}
                $size={size}
                $variant={variant}
                $withIcon={!!toggle.icon}
            >
                <ToggleInput
                    id={toggle.id}
                    name={name}
                    type={toggleType === "multi" ? "checkbox" : "radio"}
                    onChange={
                        toggleType === "multi" ? handleMulti : handleSingle
                    }
                    checked={toggles[toggle.id] === true}
                />

                <ToggleLabel>
                    {toggle.icon && (
                        <LibIcon
                            icon={toggle.icon}
                            size={toggle.iconSize ?? roundIconSize(24)}
                            baseUrl={iconBaseUrl}
                        />
                    )}

                    {toggle.text && toggle.text}
                </ToggleLabel>
            </StyledToggle>
        )
    }
)
