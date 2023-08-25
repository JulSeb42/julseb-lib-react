/*=============================================== Skeleton story ===============================================*/

import type { Meta, StoryObj } from "@storybook/react"

import { Skeleton } from "./Skeleton"

const meta = {
    title: "Components/Skeleton",
    component: Skeleton,
    tags: ["autodocs"],
    argTypes: {
        as: { control: "none" },
    },
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Docs: Story = {
    args: {
        
    },
}
