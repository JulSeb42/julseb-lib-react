/*=============================================== InputCheck demo ===============================================*/

import type { ReactNode } from "react"
import type { CssFlexDirection, LibSpacers } from "../../../types"
import { InputCheck, Flexbox } from "../../../"

const FlexDemo = ({
    children,
    flexDirection = "row",
    gap = "m",
}: {
    children?: ReactNode
    flexDirection?: CssFlexDirection
    gap?: LibSpacers
}) => {
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

export const InputCheckDemoCheckbox = () => {
    return (
        <FlexDemo>
            <InputCheck
                id="checkbox-1"
                name="checkbox-demo-1"
                type="checkbox"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-2"
                name="checkbox-demo-1"
                type="checkbox"
                defaultChecked
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-3"
                name="checkbox-demo-2"
                type="checkbox"
                validation={false}
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-4"
                name="checkbox-demo-2"
                type="checkbox"
                validation={false}
                defaultChecked
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-5"
                name="checkbox-demo-3"
                type="checkbox"
                disabled
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-6"
                name="checkbox-demo-3"
                type="checkbox"
                defaultChecked
                disabled
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
        </FlexDemo>
    )
}

export const InputCheckDemoRadio = () => {
    return (
        <FlexDemo>
            <InputCheck
                id="radio-1"
                name="radio-demo-1"
                type="radio"
                data-testid="testid"
                className="className"
                label="Radio"
            />
            <InputCheck
                id="radio-2"
                name="radio-demo-1"
                type="radio"
                defaultChecked
                data-testid="testid"
                className="className"
                label="Radio"
            />
            <InputCheck
                id="radio-3"
                name="radio-demo-2"
                type="radio"
                validation={false}
                data-testid="testid"
                className="className"
                label="Radio"
            />
            <InputCheck
                id="radio-4"
                name="radio-demo-2"
                type="radio"
                validation={false}
                defaultChecked
                data-testid="testid"
                className="className"
                label="Radio"
            />
            <InputCheck
                id="radio-5"
                name="radio-demo-3"
                type="radio"
                disabled
                data-testid="testid"
                className="className"
                label="Radio"
            />
            <InputCheck
                id="radio-6"
                name="radio-demo-3"
                type="radio"
                defaultChecked
                disabled
                data-testid="testid"
                className="className"
                label="Radio"
            />
        </FlexDemo>
    )
}

export const InputCheckDemoCheckboxTile = () => {
    return (
        <FlexDemo flexDirection="column" gap="xs">
            <InputCheck
                id="checkbox-tile-1"
                name="checkbox-tile-demo-1"
                type="checkbox"
                variant="tile"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-tile-2"
                name="checkbox-tile-demo-1"
                type="checkbox"
                defaultChecked
                variant="tile"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-tile-3"
                name="checkbox-tile-demo-2"
                type="checkbox"
                validation={false}
                variant="tile"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-tile-4"
                name="checkbox-tile-demo-2"
                type="checkbox"
                validation={false}
                defaultChecked
                variant="tile"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-tile-5"
                name="checkbox-tile-demo-3"
                type="checkbox"
                disabled
                variant="tile"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-tile-6"
                name="checkbox-tile-demo-3"
                type="checkbox"
                defaultChecked
                disabled
                variant="tile"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
        </FlexDemo>
    )
}

export const InputCheckDemoRadioTile = () => {
    return (
        <FlexDemo flexDirection="column" gap="xs">
            <InputCheck
                id="radio-tile-1"
                name="radio-tile-demo-1"
                type="radio"
                variant="tile"
                data-testid="testid"
                className="className"
                label="Radio"
            />
            <InputCheck
                id="radio-tile-2"
                name="radio-tile-demo-1"
                type="radio"
                defaultChecked
                variant="tile"
                data-testid="testid"
                className="className"
                label="Radio"
            />
            <InputCheck
                id="radio-tile-3"
                name="radio-tile-demo-2"
                type="radio"
                validation={false}
                variant="tile"
                data-testid="testid"
                className="className"
                label="Radio"
            />
            <InputCheck
                id="radio-tile-4"
                name="radio-tile-demo-2"
                type="radio"
                validation={false}
                defaultChecked
                variant="tile"
                data-testid="testid"
                className="className"
                label="Radio"
            />
            <InputCheck
                id="radio-tile-5"
                name="radio-tile-demo-3"
                type="radio"
                disabled
                variant="tile"
                data-testid="testid"
                className="className"
                label="Radio"
            />
            <InputCheck
                id="radio-tile-6"
                name="radio-tile-demo-3"
                type="radio"
                defaultChecked
                disabled
                variant="tile"
                data-testid="testid"
                className="className"
                label="Radio"
            />
        </FlexDemo>
    )
}

export const InputCheckDemoCheckboxToggle = () => {
    return (
        <FlexDemo>
            <InputCheck
                id="checkbox-toggle-1"
                name="checkbox-toggle-demo-1"
                type="checkbox"
                variant="toggle"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-toggle-2"
                name="checkbox-toggle-demo-1"
                type="checkbox"
                defaultChecked
                variant="toggle"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-toggle-3"
                name="checkbox-toggle-demo-2"
                type="checkbox"
                validation={false}
                variant="toggle"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-toggle-4"
                name="checkbox-toggle-demo-2"
                type="checkbox"
                validation={false}
                defaultChecked
                variant="toggle"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-toggle-5"
                name="checkbox-toggle-demo-3"
                type="checkbox"
                disabled
                variant="toggle"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-toggle-6"
                name="checkbox-toggle-demo-3"
                type="checkbox"
                defaultChecked
                disabled
                variant="toggle"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
        </FlexDemo>
    )
}

export const InputCheckDemoCheckboxSelector = () => {
    return (
        <FlexDemo>
            <InputCheck
                id="checkbox-selector-1"
                name="checkbox-selector-demo-1"
                type="checkbox"
                variant="selector"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-selector-2"
                name="checkbox-selector-demo-1"
                type="checkbox"
                defaultChecked
                variant="selector"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-selector-3"
                name="checkbox-selector-demo-2"
                type="checkbox"
                validation={false}
                variant="selector"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-selector-4"
                name="checkbox-selector-demo-2"
                type="checkbox"
                validation={false}
                defaultChecked
                variant="selector"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-selector-5"
                name="checkbox-selector-demo-3"
                type="checkbox"
                disabled
                variant="selector"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
            <InputCheck
                id="checkbox-selector-6"
                name="checkbox-selector-demo-3"
                type="checkbox"
                defaultChecked
                disabled
                variant="selector"
                data-testid="testid"
                className="className"
                label="Checkbox"
            />
        </FlexDemo>
    )
}
