/*=============================================== Text story ===============================================*/

import type { Meta, StoryObj } from "@storybook/react"

import { Text } from "./Text"

const meta = {
    title: "Styles/Text",
    component: Text,
    tags: ["autodocs"],
    argTypes: {
        as: { control: "none" },
    },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Docs: Story = {
    args: {
        tag: "h1",
        children: "Hello World!",
        display: true,
    },
}
