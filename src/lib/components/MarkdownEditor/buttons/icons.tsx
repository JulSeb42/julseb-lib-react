import { type FC } from "react"

interface IIcon {
	size: number
}

export const IconCode: FC<IIcon> = ({ size }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3 5V6.74198H14.0423V16.1893H3V18L15.8769 17.9899V5H3Z"
				fill="currentColor"
			/>
			<path
				d="M17.85 5H21V6.74198L19.65 6.77634V16.155H21V18L17.85 17.9899V5Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export const IconLive: FC<IIcon> = ({ size }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3 5V6.74198H9.19615V16.1893H3V18L11.0308 17.9899V5H3Z"
				fill="currentColor"
			/>
			<path
				d="M13.0038 5H21V6.74198L14.8038 6.77634V16.155H21V18L13.0038 17.9899V5Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export const IconPreview: FC<IIcon> = ({ size }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3 5V6.73874L4.31618 6.77303V16.2028L3 16.1685V17.9758L6.1508 18V5.03429L3 5Z"
				fill="currentColor"
			/>
			<path
				d="M8.12387 5.03429L21 5V6.73874L9.92387 6.80732V16.1685L21 16.1342V17.9758L8.12387 18V5.03429Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export const IconSeparator: FC<IIcon> = ({ size }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3 11H6V13H3V11ZM8 11H11V13H8V11ZM13 11H16V13H13V11ZM18 11H21V13H18V11Z"
				fill="currentColor"
			/>
		</svg>
	)
}
