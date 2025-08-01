export const GlFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-gl"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#fff" d="M0 0h640v480H0z" />
			<path
				fill="#d00c33"
				d="M0 240h640v240H0zm80 0a160 160 0 1 0 320 0 160 160 0 0 0-320 0"
			/>
		</svg>
	)
}
