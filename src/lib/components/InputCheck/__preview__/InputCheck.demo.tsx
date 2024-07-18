/*=============================================== InputCheck demo ===============================================*/

import type { ReactNode } from "react"
import type { CssFlexDirection, LibSpacers } from "../../../types"
import { InputCheck, Flexbox } from "../../../"

function FlexDemo({
    children,
    flexDirection = "row",
    gap = "m",
}: {
    children?: ReactNode
    flexDirection?: CssFlexDirection
    gap?: LibSpacers
}) {
    return (
        <Flexbox
            gap={gap}
            flexDirection={flexDirection}
            flexWrap="wrap"
            style={{ width: "100%" }}
        >
            {children}
        </Flexbox>
    )
}

export function InputCheckDemoCheckbox() {
    return (
        <FlexDemo>
            <InputCheck id="checkbox-1" name="checkbox-demo-1" type="checkbox">
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-2"
                name="checkbox-demo-1"
                type="checkbox"
                defaultChecked
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-3"
                name="checkbox-demo-2"
                type="checkbox"
                validation="not-passed"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-4"
                name="checkbox-demo-2"
                type="checkbox"
                validation="not-passed"
                defaultChecked
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-5"
                name="checkbox-demo-3"
                type="checkbox"
                disabled
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-6"
                name="checkbox-demo-3"
                type="checkbox"
                defaultChecked
                disabled
            >
                Checkbox
            </InputCheck>
        </FlexDemo>
    )
}

export function InputCheckDemoRadio() {
    return (
        <FlexDemo>
            <InputCheck id="radio-1" name="radio-demo-1" type="radio">
                Radio
            </InputCheck>
            <InputCheck
                id="radio-2"
                name="radio-demo-1"
                type="radio"
                defaultChecked
            >
                Radio
            </InputCheck>
            <InputCheck
                id="radio-3"
                name="radio-demo-2"
                type="radio"
                validation="not-passed"
            >
                Radio
            </InputCheck>
            <InputCheck
                id="radio-4"
                name="radio-demo-2"
                type="radio"
                validation="not-passed"
                defaultChecked
            >
                Radio
            </InputCheck>
            <InputCheck id="radio-5" name="radio-demo-3" type="radio" disabled>
                Radio
            </InputCheck>
            <InputCheck
                id="radio-6"
                name="radio-demo-3"
                type="radio"
                defaultChecked
                disabled
            >
                Radio
            </InputCheck>
        </FlexDemo>
    )
}

// Checkbox tile
export function InputCheckDemoCheckboxTile() {
    return (
        <FlexDemo flexDirection="column" gap="xs">
            <InputCheck
                id="checkbox-tile-1"
                name="checkbox-tile-demo-1"
                type="checkbox"
                variant="tile"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-tile-2"
                name="checkbox-tile-demo-1"
                type="checkbox"
                defaultChecked
                variant="tile"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-tile-3"
                name="checkbox-tile-demo-2"
                type="checkbox"
                validation="not-passed"
                variant="tile"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-tile-4"
                name="checkbox-tile-demo-2"
                type="checkbox"
                validation="not-passed"
                defaultChecked
                variant="tile"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-tile-5"
                name="checkbox-tile-demo-3"
                type="checkbox"
                disabled
                variant="tile"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-tile-6"
                name="checkbox-tile-demo-3"
                type="checkbox"
                defaultChecked
                disabled
                variant="tile"
            >
                Checkbox
            </InputCheck>
        </FlexDemo>
    )
}
// Radio tile
export function InputCheckDemoRadioTile() {
    return (
        <FlexDemo flexDirection="column" gap="xs">
            <InputCheck
                id="radio-tile-1"
                name="radio-tile-demo-1"
                type="radio"
                variant="tile"
            >
                Radio
            </InputCheck>
            <InputCheck
                id="radio-tile-2"
                name="radio-tile-demo-1"
                type="radio"
                defaultChecked
                variant="tile"
            >
                Radio
            </InputCheck>
            <InputCheck
                id="radio-tile-3"
                name="radio-tile-demo-2"
                type="radio"
                validation="not-passed"
                variant="tile"
            >
                Radio
            </InputCheck>
            <InputCheck
                id="radio-tile-4"
                name="radio-tile-demo-2"
                type="radio"
                validation="not-passed"
                defaultChecked
                variant="tile"
            >
                Radio
            </InputCheck>
            <InputCheck
                id="radio-tile-5"
                name="radio-tile-demo-3"
                type="radio"
                disabled
                variant="tile"
            >
                Radio
            </InputCheck>
            <InputCheck
                id="radio-tile-6"
                name="radio-tile-demo-3"
                type="radio"
                defaultChecked
                disabled
                variant="tile"
            >
                Radio
            </InputCheck>
        </FlexDemo>
    )
}
// Toggle
export function InputCheckDemoCheckboxToggle() {
    return (
        <FlexDemo>
            <InputCheck
                id="checkbox-toggle-1"
                name="checkbox-toggle-demo-1"
                type="checkbox"
                variant="toggle"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-toggle-2"
                name="checkbox-toggle-demo-1"
                type="checkbox"
                defaultChecked
                variant="toggle"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-toggle-3"
                name="checkbox-toggle-demo-2"
                type="checkbox"
                validation="not-passed"
                variant="toggle"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-toggle-4"
                name="checkbox-toggle-demo-2"
                type="checkbox"
                validation="not-passed"
                defaultChecked
                variant="toggle"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-toggle-5"
                name="checkbox-toggle-demo-3"
                type="checkbox"
                disabled
                variant="toggle"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-toggle-6"
                name="checkbox-toggle-demo-3"
                type="checkbox"
                defaultChecked
                disabled
                variant="toggle"
            >
                Checkbox
            </InputCheck>
        </FlexDemo>
    )
}
// Checkbox selector
export function InputCheckDemoCheckboxSelector() {
    return (
        <FlexDemo>
            <InputCheck
                id="checkbox-selector-1"
                name="checkbox-selector-demo-1"
                type="checkbox"
                variant="selector"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-selector-2"
                name="checkbox-selector-demo-1"
                type="checkbox"
                defaultChecked
                variant="selector"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-selector-3"
                name="checkbox-selector-demo-2"
                type="checkbox"
                validation="not-passed"
                variant="selector"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-selector-4"
                name="checkbox-selector-demo-2"
                type="checkbox"
                validation="not-passed"
                defaultChecked
                variant="selector"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-selector-5"
                name="checkbox-selector-demo-3"
                type="checkbox"
                disabled
                variant="selector"
            >
                Checkbox
            </InputCheck>
            <InputCheck
                id="checkbox-selector-6"
                name="checkbox-selector-demo-3"
                type="checkbox"
                defaultChecked
                disabled
                variant="selector"
            >
                Checkbox
            </InputCheck>
        </FlexDemo>
    )
}
