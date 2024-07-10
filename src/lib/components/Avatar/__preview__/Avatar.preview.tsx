/*=============================================== AvatarPreview ===============================================*/

import { Avatar } from "../../../"
import {  } from "../../../types"
import type { AvatarProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

export const avatarPreview: ComponentPreview<AvatarProps, typeof Avatar> = {
    name: "Avatar",
    component: Avatar,
    category: "components",
    props: [
        { previewTitle: "Default" },
    ],
}
