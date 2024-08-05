/*=============================================== ButtonGroupToggles ===============================================*/

import { forwardRef, type ChangeEvent } from "react"
import { roundIconSize } from "../../lib-utils"
import { LibIcon } from "../LibIcon"
import type { DispatchState, LibButtonGroupToggle } from "../../types"
import { StyledToggle, ToggleInput, ToggleLabel } from "./styles"
import type { ILibButtonGroup } from "./types"

export const ButtonGroupToggle = forwardRef<
    HTMLLabelElement,
    Pick<
        ILibButtonGroup,
        | "data-testid"
        | "className"
        | "toggleType"
        | "color"
        | "variant"
        | "size"
        | "name"
    > & {
        toggle: LibButtonGroupToggle
        toggles: { [id: string]: boolean }
        setToggles: DispatchState<{ [id: string]: boolean }>
        i: number
    }
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
            i,
            toggles,
            setToggles,
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
                    (testid && `${testid}.ToggleContainer.${i}`)
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
                            baseUrl={toggle.iconBaseUrl}
                        />
                    )}

                    {toggle.text && toggle.text}
                </ToggleLabel>
            </StyledToggle>
        )
    }
)
