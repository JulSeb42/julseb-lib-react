import { BiUser } from "react-icons/bi"
import { Avatar } from "../../../"
import type { ILibAvatar } from "../../../types/components-props"
import type { ComponentPreview } from "../../../../data/components"

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
			previewTitle: "With image",
			props: {
				children: <img src="/images/pic-avatar.jpg" alt="Avatar" />,
			},
		},
		{ previewTitle: "With initials", props: { children: "JS" } },
		{
			previewTitle: "With icon",
			props: { children: <BiUser size={32} /> },
		},
		{
			previewTitle: "With badge",
			props: {
				children: "JS",
				backgroundColor: "secondary",
				borderColor: "warning",
				className: "border-4",
				badge: { content: 1, color: "danger" },
			},
		},
	],
	props: [
		{
			name: "badge",
			type: "string | Object",
			possibleValues: null,
			defaultValue: null,
			description:
				"Badge to display on the avatar, can be a string or an object with content and colors.",
			isRequired: false,
		},
		{
			name: "containerStyle",
			type: "CSSProperties",
			possibleValues: null,
			defaultValue: null,
			description: "Inline styles for the avatar container.",
			isRequired: false,
		},
		{
			name: "containerClassName",
			type: "string",
			possibleValues: null,
			defaultValue: null,
			description: "Additional CSS classes for the avatar container.",
			isRequired: false,
		},
		{
			name: "borderRadius",
			type: "string",
			possibleValues: [
				"none",
				"sm",
				"md",
				"lg",
				"xl",
				"2xl",
				"3xl",
				"full",
			],
			defaultValue: "full",
			description: "Border radius of the avatar.",
			isRequired: false,
		},
		{
			name: "borderColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: null,
			description: "Border color of the avatar.",
			isRequired: false,
		},
		{
			name: "backgroundColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "primary",
			description: "Background color of the avatar.",
			isRequired: false,
		},
		{
			name: "contentColor",
			type: "string",
			possibleValues: "Any color from the library",
			defaultValue: "white",
			description: "Text color of the avatar.",
			isRequired: false,
		},
	],
}
