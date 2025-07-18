export const AtFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-at"
			viewBox="0 0 640 480"
			width={width}
		>
			<g fillRule="evenodd">
				<path fill="#fff" d="M640 480H0V0h640z" />
				<path
					fill="#c8102e"
					d="M640 480H0V320h640zm0-319.9H0V.1h640z"
				/>
			</g>
		</svg>
	)
}
