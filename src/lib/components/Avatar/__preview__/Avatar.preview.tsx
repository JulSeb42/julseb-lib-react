/*=============================================== AvatarPreview ===============================================*/

import { Avatar, Flexbox } from "../../../"
import { typeValues, type LibColorsShort } from "../../../types"
import type { AvatarProps } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const IMG_URL = "/images/pic-avatar.jpg"

export const avatarPreview: ComponentPreview<AvatarProps> = {
    name: "Avatar",
    component: Avatar,
    category: "components",
    import: "Avatar",
    additionalImports: null,
    optionalImports: null,
    propsImport: "AvatarProps",
    additionalTypeImports: null,
    extends: ["HTMLSpanElement"],
    previews: [
        { previewTitle: "With img", props: { img: IMG_URL } },
        {
            previewTitle: "With img and badge",
            props: {
                img: IMG_URL,
                size: 64,
                border: { color: "success", width: 2 },
                badge: {
                    backgroundColor: "danger",
                    content: 12345,
                    padding: { leftRight: "xxs" },
                    size: 16,
                    position: "bottom",
                },
            },
        },
        {
            previewTitle: "With letter",
            demo: AvatarPreview({ letter: "A" }),
        },
        {
            previewTitle: "With icon",
            demo: AvatarPreview({ icon: "user", size: 64 }),
        },
    ],
}

function AvatarPreview(props: Omit<AvatarProps, "img">) {
    const arr = Object.values(typeValues.colorsShort) as Array<LibColorsShort>

    return (
        <Flexbox gap="s">
            {arr.map((c, i) => (
                <Avatar key={i} backgroundColor={c} {...(props as any)} />
            ))}
        </Flexbox>
    )
}
