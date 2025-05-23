import { Avatar, Flexbox, designTokens } from "../../../"
import type { LibColorsShort } from "../../../types"
import type { ILibAvatar } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

const IMG_URL = "/images/pic-avatar.jpg"

const AvatarPreview = (props: Omit<ILibAvatar, "img">) => {
	const arr = Object.values(designTokens.colorsShort) as Array<LibColorsShort>

	return (
		<Flexbox gap="s">
			{arr.map((c, i) => (
				<Avatar
					key={i}
					backgroundColor={c}
					data-testid="testid"
					className="className"
					id={`avatar-${i}-${
						props?.letter || props?.icon?.toString()
					}`}
					{...(props as any)}
				/>
			))}
		</Flexbox>
	)
}

export const avatarPreview: ComponentPreview<ILibAvatar> = {
	name: "Avatar",
	component: Avatar,
	category: "components",
	import: "Avatar",
	additionalImports: null,
	optionalImports: null,
	propsImport: "ILibAvatar",
	additionalTypeImports: null,
	extends: ["HTMLSpanElement"],
	previews: [
		{
			previewTitle: "With img",
			props: {
				img: IMG_URL,
				"data-testid": "testid",
				className: "className",
			},
		},
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
				"data-testid": "testid",
				className: "className",
			},
		},
		{
			previewTitle: "With letter",
			demo: <AvatarPreview letter="A" />,
		},
		{
			previewTitle: "With icon",
			demo: <AvatarPreview icon="user" size={64} />,
		},
		{
			previewTitle: "On error",
			props: {
				img: { src: "./abc.png", alt: "Hello", fallback: "JS" },
			},
		},
	],
}
