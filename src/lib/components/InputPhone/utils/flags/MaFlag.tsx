export const MaFlag: FC<{ width?: number }> = ({ width = 16 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="flag-ma"
			viewBox="0 0 640 480"
			width={width}
		>
			<path fill="#c1272d" d="M640 0H0v480h640z" />
			<path
				fill="none"
				stroke="#006233"
				strokeWidth="11.7"
				d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
			/>
		</svg>
	)
}
