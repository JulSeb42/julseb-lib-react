export const GaFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ga"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#ffe700" d="M640 480H0V0h640z" />
				<path fill="#36a100" d="M640 160H0V0h640z" />
				<path fill="#006dbc" d="M640 480H0V320h640z" />
			</g>
		</svg>
	)
}
