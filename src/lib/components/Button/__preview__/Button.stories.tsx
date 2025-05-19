import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../Button"
import { Check } from "../../../icons/Check"

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "Button component for actions, navigation, or links, supporting icons, loading state, and variants.",
            },
            page: null, // Use default autodocs page with playground/controls
        },
    },
    argTypes: {
        color: {
            control: "select",
            options: [
                "primary",
                "secondary",
                "success",
                "danger",
                "warning",
                "gray",
                "black",
                "white",
            ],
        },
        size: {
            control: "select",
            options: ["default", "small"],
        },
        variant: {
            control: "select",
            options: ["plain", "outline", "ghost", "transparent"],
        },
        borderRadius: {
            control: "select",
            options: ["xxl", "xl", "l", "m", "s", "xs", "round", "circle"],
        },
        gap: {
            control: "select",
            options: ["xxl", "xl", "l", "m", "s", "xs", "xxs", 0],
        },
        shadow: {
            control: "select",
            options: ["xxl", "xl", "l", "m", "s", "xs", undefined],
        },
        isLoading: { control: "boolean" },
        disabled: { control: "boolean" },
        noPadding: { control: "boolean" },
        blank: { control: "boolean" },
        icons: {
            control: "object",
            mapping: {
                none: {},
                left: { left: <Check /> },
                right: { right: <Check /> },
                both: { left: <Check />, right: <Check /> },
            },
            options: ["none", "left", "right", "both"],
        },
    },
    args: {
        children: "Button",
        color: "primary",
        size: "default",
        variant: "plain",
        borderRadius: "m",
        gap: "xs",
        isLoading: false,
        disabled: false,
        // noPadding: false,
        // blank: false,
        icons: {},
    },
}
export default meta

type Story = StoryObj<typeof Button>

/**
 * Playground
 */
export const Docs: Story = {
    render: args => <Button {...args} />,
    parameters: {
        docs: {
            source: { type: "dynamic" },
        },
    },
}
